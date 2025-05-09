/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01-installation.html",
    "revision": "53b80a2f6d337eed778ebc32f2129281"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "34d07199742bd37d7ab8afe2cad02887"
  },
  {
    "url": "03-trials.html",
    "revision": "f6a55e4b2761aa9ea8fb19b7635b1e98"
  },
  {
    "url": "04-charges.html",
    "revision": "37c09bc5613dbe7d2846683a5cd20e07"
  },
  {
    "url": "05-metered.html",
    "revision": "5b0f5dc8d21e47a86ad793e0ca08affa"
  },
  {
    "url": "06-customer.html",
    "revision": "dcdd4dce4d2bfa6a9bef88d1231300f4"
  },
  {
    "url": "07-invoices.html",
    "revision": "91cc52bb7df0eefda8e92899e2ab6daf"
  },
  {
    "url": "08-refunds.html",
    "revision": "75739445f42ef3d8e15cc2816bf7b811"
  },
  {
    "url": "09-events.html",
    "revision": "70f16a6d7e8fed82adec3567d5ab18f4"
  },
  {
    "url": "10-webhook.html",
    "revision": "7af30fc9bbd5b6fac040266fc0b07bf0"
  },
  {
    "url": "11-testing.html",
    "revision": "9efad197118830668b74ba8d0788c806"
  },
  {
    "url": "12-faq.html",
    "revision": "1611f18b329706ee6e525907b381bdb9"
  },
  {
    "url": "13-upgrade.html",
    "revision": "de645748d99a6163ef3ab9883460c1e8"
  },
  {
    "url": "14-retry.html",
    "revision": "5265e81dc76fe5593b2150af4c3da923"
  },
  {
    "url": "15-localization.html",
    "revision": "cc804f8cda3263856e6d22767ed8f2bf"
  },
  {
    "url": "16-configuration.html",
    "revision": "00faa208c29ce7621f297403420cb437"
  },
  {
    "url": "404.html",
    "revision": "2c39071c03727cd4602387e63c7d8549"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "7f1890f254594de8c4b514dee90ed629"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "bc31b03048d4a3ba4fe82ce2389b0b38"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "19f3e3722c9d450ecfa73e8a92aaa47a"
  },
  {
    "url": "assets/css/0.styles.359cd878.css",
    "revision": "d2acd007420eb02d9daa36f53e706e3e"
  },
  {
    "url": "assets/img/cashier-mollie.svg",
    "revision": "06f0ab467b31062098cffb5ff5d18bc6"
  },
  {
    "url": "assets/img/laravelcashiermollie.a7bde0e4.jpg",
    "revision": "a7bde0e4173f90acd2d72e0eb69d2764"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.2917d10c.js",
    "revision": "7ca5c049ee53bbe1ac3e320a26a3669e"
  },
  {
    "url": "assets/js/10.8b6fb201.js",
    "revision": "ebe7076c7cfaba924bf6673893056d26"
  },
  {
    "url": "assets/js/11.901fda5f.js",
    "revision": "5bd7abafcace3bd1113c3588d889fb83"
  },
  {
    "url": "assets/js/12.2087f6ea.js",
    "revision": "ed1efcf00a650c98b9f0f30e1b0bd23e"
  },
  {
    "url": "assets/js/13.84adbbf2.js",
    "revision": "335804f2e9fb4b0d7c79097b9cfdc443"
  },
  {
    "url": "assets/js/14.e274b137.js",
    "revision": "e5825e61986764b824e1c98468239564"
  },
  {
    "url": "assets/js/15.0945a269.js",
    "revision": "be9b1c84a103aaf7f2d07404c46865a5"
  },
  {
    "url": "assets/js/16.66c64fcc.js",
    "revision": "7f8b251f8a80cce251291381891e1e2a"
  },
  {
    "url": "assets/js/17.8867e27a.js",
    "revision": "35d4385dd1542d8b10f518bcafb172d2"
  },
  {
    "url": "assets/js/18.0277f13b.js",
    "revision": "f2e5a5a19b810f07a4d38aba5fb68fde"
  },
  {
    "url": "assets/js/19.25d97db3.js",
    "revision": "a36ea777a340f9468ccc8993a7d3b52c"
  },
  {
    "url": "assets/js/2.2aa2c32a.js",
    "revision": "bc7894fe621b238dcb56e538db99b6aa"
  },
  {
    "url": "assets/js/20.16b36457.js",
    "revision": "3521ad74fe1cd1c427218bbd5de94e8b"
  },
  {
    "url": "assets/js/21.ff2eec5b.js",
    "revision": "ef8b119bed4522392731b3685c8d81a2"
  },
  {
    "url": "assets/js/22.f9bbfa71.js",
    "revision": "4255d8c584cc9a9ec5f884983313d417"
  },
  {
    "url": "assets/js/23.3d01d7de.js",
    "revision": "da5657d08949a5c960254aa385cb1d3d"
  },
  {
    "url": "assets/js/24.3abf44e5.js",
    "revision": "0c11200cd3b36934d0f3ada0488686a6"
  },
  {
    "url": "assets/js/25.ab96898b.js",
    "revision": "3bdf7d59d2534ab86789a0bc87bdeaa7"
  },
  {
    "url": "assets/js/26.c00865c5.js",
    "revision": "09efca139627c4399ee3c070aecdda5e"
  },
  {
    "url": "assets/js/27.4402c705.js",
    "revision": "13a21ca7126fe63ad0dca24dac38670e"
  },
  {
    "url": "assets/js/28.32edb8ab.js",
    "revision": "c1fad9f36cacfa496b1c617389603f08"
  },
  {
    "url": "assets/js/29.d128db79.js",
    "revision": "d72424e95dd5a85c11ab1d1141c58e87"
  },
  {
    "url": "assets/js/3.39423aeb.js",
    "revision": "731a2eef32fee32c0a0069c2b1bb246a"
  },
  {
    "url": "assets/js/30.bfc32fe8.js",
    "revision": "4d8d04790e77934eb6c52e00b31237a3"
  },
  {
    "url": "assets/js/31.d7c35554.js",
    "revision": "4033be5a9db70f87c372148added7de0"
  },
  {
    "url": "assets/js/32.237d510e.js",
    "revision": "27e6a2c43c18f51ee70bebdee1c30cfb"
  },
  {
    "url": "assets/js/33.b0d7b8d6.js",
    "revision": "dadf2ffc3530c19e870bbd3a571cfca1"
  },
  {
    "url": "assets/js/34.87448590.js",
    "revision": "6784b30c644f116ca0fdbe589bcbb747"
  },
  {
    "url": "assets/js/35.53281c3c.js",
    "revision": "58f9cc49012bda1036c51a04786187b8"
  },
  {
    "url": "assets/js/36.a5641748.js",
    "revision": "0293ce725f2e8936af09e92e2103febb"
  },
  {
    "url": "assets/js/37.d5a3894a.js",
    "revision": "b0920feac5396f94c06d3114940297aa"
  },
  {
    "url": "assets/js/38.7369a807.js",
    "revision": "8c2ec540797917005ed3be5761f098df"
  },
  {
    "url": "assets/js/39.6464dc50.js",
    "revision": "66478578b1a476145de5d448a52dd447"
  },
  {
    "url": "assets/js/4.88c75062.js",
    "revision": "ddc44d446b7969b92b3085bd2358ea53"
  },
  {
    "url": "assets/js/40.6a649407.js",
    "revision": "9da5ef73f15d2be65d4e17d07ccc5fda"
  },
  {
    "url": "assets/js/5.c89d53f0.js",
    "revision": "b797b6728907e46adb471db313177546"
  },
  {
    "url": "assets/js/6.462c7263.js",
    "revision": "dbf6a6c69c1eee5fbea455ea897bcc25"
  },
  {
    "url": "assets/js/7.deb28bf6.js",
    "revision": "99b2920b7f24ce95c1375ea15c579bda"
  },
  {
    "url": "assets/js/app.c5cbf89b.js",
    "revision": "5f0e718b34e83ec92e45cf3f14276f79"
  },
  {
    "url": "assets/js/vendors~docsearch.c4e8fdb6.js",
    "revision": "e1b08506b923019cbab0207abdc4e52c"
  },
  {
    "url": "assets/pages/laravelcashiermollie.jpg",
    "revision": "a7bde0e4173f90acd2d72e0eb69d2764"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "e8cead60a31ba0059df44368227bba35"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2f21759d559a5e952851228adbb628ec"
  },
  {
    "url": "index.html",
    "revision": "6c46052b33b784d583267bb5bce3e89a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
