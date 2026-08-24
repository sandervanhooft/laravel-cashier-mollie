<?php

declare(strict_types=1);

namespace Laravel\Cashier\Tests\Refunds;

use Illuminate\Support\Facades\Event;
use Laravel\Cashier\Cashier;
use Laravel\Cashier\Events\RefundInitiated;
use Laravel\Cashier\Mollie\Contracts\CreateMollieRefund;
use Laravel\Cashier\Order\OrderItemCollection;
use Laravel\Cashier\Refunds\RefundBuilder;
use Laravel\Cashier\Refunds\RefundItem;
use Laravel\Cashier\Tests\BaseTestCase;
use Laravel\Cashier\Tests\Database\Factories\OrderItemFactory;
use LogicException;
use RuntimeException;
use Mollie\Api\MollieApiClient;
use Mollie\Api\Resources\Refund as MollieRefund;
use Mollie\Api\Types\RefundStatus as MollieRefundStatus;
use PHPUnit\Framework\Attributes\Test;

class RefundsBuilderTest extends BaseTestCase
{
    #[Test]
    public function can_create_a_refund_for_a_complete_order(): void
    {
        Event::fake();
        $this->mock(CreateMollieRefund::class, function (CreateMollieRefund $mock) {
            $mollieRefund = new MollieRefund(new MollieApiClient);
            $mollieRefund->id = 're_dummy_refund_id';
            $mollieRefund->status = MollieRefundStatus::PENDING;
            $mock->shouldReceive('execute')->with('tr_dummy_payment_id', [
                'amount' => [
                    'value' => '22.00',
                    'currency' => 'EUR',
                ],
            ])->once()->andReturn($mollieRefund);
        });

        $user = $this->getUser();

        $orderItems = $user->orderItems()->createMany([
            OrderItemFactory::new()->make([
                'unit_price' => 1000,
                'tax_percentage' => 10,
                'quantity' => 1,
            ])->toArray(),
            OrderItemFactory::new()->make([
                'unit_price' => 500,
                'tax_percentage' => 10,
                'quantity' => 2,
            ])->toArray(),
        ]);

        $order = Cashier::$orderModel::createProcessedFromItems(new OrderItemCollection($orderItems));
        $order->mollie_payment_status = 'paid';
        $order->mollie_payment_id = 'tr_dummy_payment_id';
        $this->assertMoneyEURCents(2200, $order->getTotalDue());

        $refundBuilder = RefundBuilder::forWholeOrder($order);
        $refund = $refundBuilder->create();

        $this->assertInstanceOf(Cashier::$refundModel, $refund);
        $this->assertEquals('re_dummy_refund_id', $refund->mollie_refund_id);
        $this->assertEquals(MollieRefundStatus::PENDING, $refund->mollie_refund_status);
        $this->assertNull($refund->order_id);

        $refundItems = $refund->items;
        $this->assertCount(2, $refundItems);

        /** @var RefundItem $itemA */
        $itemA = $refundItems->first(function (RefundItem $item) {
            return (int) $item->quantity === 1;
        });

        $this->assertEquals($itemA->unit_price, 1000);
        $this->assertEquals($itemA->tax_percentage, 10);
        $this->assertEquals($itemA->currency, 'EUR');

        /** @var RefundItem $itemB */
        $itemB = $refundItems->first(function (RefundItem $item) {
            return (int) $item->quantity === 2;
        });
        $this->assertEquals($itemB->unit_price, 500);
        $this->assertEquals($itemB->tax_percentage, 10);
        $this->assertEquals($itemB->currency, 'EUR');

        Event::assertDispatched(RefundInitiated::class, function (RefundInitiated $event) use ($refund) {
            return $event->refund->is($refund);
        });
    }

    #[Test]
    public function only_refunds_the_amount_charged_through_mollie_when_credit_was_used(): void
    {
        Event::fake();

        // Order total EUR 22.00, of which EUR 5.00 came from the owner's credit balance.
        // Only the EUR 17.00 that was actually charged can be refunded through Mollie.
        $this->mock(CreateMollieRefund::class, function (CreateMollieRefund $mock) {
            $mollieRefund = new MollieRefund(new MollieApiClient);
            $mollieRefund->id = 're_dummy_refund_id';
            $mollieRefund->status = MollieRefundStatus::PENDING;
            $mock->shouldReceive('execute')->with('tr_dummy_payment_id', [
                'amount' => [
                    'value' => '17.00',
                    'currency' => 'EUR',
                ],
            ])->once()->andReturn($mollieRefund);
        });

        $user = $this->getUser();
        $order = $this->createPaidOrderUsingCredit($user);

        $this->assertMoneyEURCents(2200, $order->getTotal());
        $this->assertMoneyEURCents(1700, $order->getTotalDue());
        $this->assertMoneyEURCents(500, $order->getCreditUsed());

        $refund = RefundBuilder::forWholeOrder($order)->create();

        // The refund still reverses the full order value for bookkeeping purposes.
        $this->assertEquals(2200, $refund->total);
        $this->assertCount(2, $refund->items);

        // No credit is moved yet - that happens when Mollie confirms the refund.
        $this->assertFalse($user->fresh()->hasCredit('EUR'));

        Event::assertDispatched(RefundInitiated::class, function (RefundInitiated $event) use ($refund) {
            return $event->refund->is($refund);
        });
    }

    #[Test]
    public function caps_a_partial_refund_at_the_amount_still_refundable_through_mollie(): void
    {
        Event::fake();

        // EUR 10.00 of the EUR 17.00 charged has already been refunded, so this refund of
        // EUR 22.00 worth of items can only charge back the remaining EUR 7.00.
        $this->mock(CreateMollieRefund::class, function (CreateMollieRefund $mock) {
            $mollieRefund = new MollieRefund(new MollieApiClient);
            $mollieRefund->id = 're_dummy_refund_id';
            $mollieRefund->status = MollieRefundStatus::PENDING;
            $mock->shouldReceive('execute')->with('tr_dummy_payment_id', [
                'amount' => [
                    'value' => '7.00',
                    'currency' => 'EUR',
                ],
            ])->once()->andReturn($mollieRefund);
        });

        $user = $this->getUser();
        $order = $this->createPaidOrderUsingCredit($user);
        $order->update(['amount_refunded' => 1000]);

        RefundBuilder::forWholeOrder($order)->create();

        $this->assertMoneyEURCents(700, $order->getTotalDueRefundable());
    }

    #[Test]
    public function cannot_refund_an_order_that_was_paid_entirely_with_credit(): void
    {
        Event::fake();

        $this->mock(CreateMollieRefund::class, function (CreateMollieRefund $mock) {
            $mock->shouldNotReceive('execute');
        });

        $user = $this->getUser();
        $order = $this->createPaidOrderUsingCredit($user);
        $order->update(['balance_before' => 2200, 'credit_used' => 2200, 'total_due' => 0]);

        $this->expectException(LogicException::class);
        $this->expectExceptionMessage('There is nothing left to refund through Mollie');

        RefundBuilder::forWholeOrder($order)->create();
    }

    #[Test]
    public function does_not_ask_mollie_to_refund_more_than_was_charged(): void
    {
        Event::fake();

        // Stands in for Mollie's own validation: a payment of EUR 17.00 cannot be refunded
        // for more than EUR 17.00. Asking for more is what issue #328 reported, and Mollie
        // answers it with a 422 "The specified amount cannot be refunded."
        $this->mock(CreateMollieRefund::class, function (CreateMollieRefund $mock) {
            $mock->shouldReceive('execute')->andReturnUsing(function ($paymentId, $payload) {
                $amountChargedThroughMollie = 1700;
                $requested = (int) round(((float) $payload['amount']['value']) * 100);

                if ($requested > $amountChargedThroughMollie) {
                    throw new RuntimeException(
                        'Error executing API call (422: Unprocessable Entity): ' .
                        'The specified amount cannot be refunded.'
                    );
                }

                $mollieRefund = new MollieRefund(new MollieApiClient);
                $mollieRefund->id = 're_dummy_refund_id';
                $mollieRefund->status = MollieRefundStatus::PENDING;

                return $mollieRefund;
            });
        });

        $user = $this->getUser();
        $order = $this->createPaidOrderUsingCredit($user);

        $refund = RefundBuilder::forWholeOrder($order)->create();

        $this->assertEquals('re_dummy_refund_id', $refund->mollie_refund_id);
        $this->assertEquals(2200, $refund->total);
    }

    /**
     * An EUR 22.00 order, paid with EUR 5.00 credit and EUR 17.00 through Mollie.
     */
    protected function createPaidOrderUsingCredit($user)
    {
        $orderItems = $user->orderItems()->createMany([
            OrderItemFactory::new()->make([
                'unit_price' => 1000,
                'tax_percentage' => 10,
                'quantity' => 1,
            ])->toArray(),
            OrderItemFactory::new()->make([
                'unit_price' => 500,
                'tax_percentage' => 10,
                'quantity' => 2,
            ])->toArray(),
        ]);

        $order = Cashier::$orderModel::createProcessedFromItems(new OrderItemCollection($orderItems));

        $order->update([
            'mollie_payment_status' => 'paid',
            'mollie_payment_id' => 'tr_dummy_payment_id',
            'balance_before' => 500,
            'credit_used' => 500,
            'total_due' => 1700,
        ]);

        return $order;
    }
}
