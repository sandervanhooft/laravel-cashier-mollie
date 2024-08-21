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
    "revision": "6035363c132b3e3240a735f5cff66d0f"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "0251f845461bbbf208dae86c81ccc8b6"
  },
  {
    "url": "03-trials.html",
    "revision": "5702dd9ebc44c068b4cce586079d3a59"
  },
  {
    "url": "04-charges.html",
    "revision": "21ceb9ae6939037adabe46d33467721a"
  },
  {
    "url": "05-metered.html",
    "revision": "f25b57879e7ee20f9da6c58ed0f16d88"
  },
  {
    "url": "06-customer.html",
    "revision": "6d04cc52a1a434c3efa0c996f3218110"
  },
  {
    "url": "07-invoices.html",
    "revision": "0a0a4e116a836d54864c0eeaae9fada4"
  },
  {
    "url": "08-refunds.html",
    "revision": "c0fd743cd87918f3adc10cb81ad984dc"
  },
  {
    "url": "09-events.html",
    "revision": "c7dc1e60e6575d702c20a08b67da57ca"
  },
  {
    "url": "10-webhook.html",
    "revision": "7d38ef3f4c9d338199198fa6adaa3f80"
  },
  {
    "url": "11-testing.html",
    "revision": "bc61253969ee31820cbf4ae685928838"
  },
  {
    "url": "12-faq.html",
    "revision": "73ce8865fa22e18f82c55e26151f068b"
  },
  {
    "url": "13-upgrade.html",
    "revision": "c0fd2ba41ac414cc084e0c33b7a6d23b"
  },
  {
    "url": "14-retry.html",
    "revision": "8670a3e25e5e048453a43977f3708bd0"
  },
  {
    "url": "15-localization.html",
    "revision": "60ba0478807dabe00ed57988965a5c77"
  },
  {
    "url": "16-configuration.html",
    "revision": "d7fb5f7c8cca49345ab777486e3d63b1"
  },
  {
    "url": "404.html",
    "revision": "ed0afe7a332ac32d38ea23a07a0e3b23"
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
    "url": "assets/js/1.15efec23.js",
    "revision": "68bc74217a872de9ee0109e7b1a26e5a"
  },
  {
    "url": "assets/js/10.ab8d7fd0.js",
    "revision": "39bb5a1a914c7efe7f701daf407157db"
  },
  {
    "url": "assets/js/11.532a7183.js",
    "revision": "d6074faaefd801a10616371a9a8b5e87"
  },
  {
    "url": "assets/js/12.f0a1d067.js",
    "revision": "e49536446110def7bcb76aff50d37a41"
  },
  {
    "url": "assets/js/13.6df373a5.js",
    "revision": "05c19a9a1cc45bc5e77379b63257a000"
  },
  {
    "url": "assets/js/14.24cdc978.js",
    "revision": "2d90b324a9fecd81e973906a91066523"
  },
  {
    "url": "assets/js/15.59fb7875.js",
    "revision": "a76ce03924a9d075b8f1df7915799cfc"
  },
  {
    "url": "assets/js/16.acfc1f75.js",
    "revision": "0cc95f3dbc900dc96a5072b0c8b9ea8a"
  },
  {
    "url": "assets/js/17.f40546dc.js",
    "revision": "ad9907aed31efe2788fb57619ecec9cf"
  },
  {
    "url": "assets/js/18.f4fe92b3.js",
    "revision": "4e1af6ad2beb1a486fd489dfed3c5ba6"
  },
  {
    "url": "assets/js/19.cd4c20e3.js",
    "revision": "d8ff7f7acc8dd6816c90dd48a5e4dbac"
  },
  {
    "url": "assets/js/2.68ce5646.js",
    "revision": "98dac27b80527415fe48150818ee54fb"
  },
  {
    "url": "assets/js/20.808d3d84.js",
    "revision": "3c8ae50ec09c345bc690b5c02f073352"
  },
  {
    "url": "assets/js/21.f8874ddb.js",
    "revision": "4ae9e9212f7f178d25d1666a6a32229a"
  },
  {
    "url": "assets/js/22.cd5188a1.js",
    "revision": "8497172040014030983f87ba2746837d"
  },
  {
    "url": "assets/js/23.3ee46f83.js",
    "revision": "73c944e2ed85915bad8fd4015f7f7f7f"
  },
  {
    "url": "assets/js/24.b8075864.js",
    "revision": "a7143e3e6da7d88c9eca83efcd238ff4"
  },
  {
    "url": "assets/js/25.fce0db21.js",
    "revision": "f828a077a5a3e874aa0069a698f199b4"
  },
  {
    "url": "assets/js/26.4011eebd.js",
    "revision": "ab522416de4b7328c300700b1b8b604a"
  },
  {
    "url": "assets/js/27.09e2c9e4.js",
    "revision": "71dc276e47184d6591da126ddf42e6ed"
  },
  {
    "url": "assets/js/28.cb4145aa.js",
    "revision": "344a0bce1e3147e6b28ab22f1ecc6d44"
  },
  {
    "url": "assets/js/29.6d54f8e6.js",
    "revision": "4a970220328e02898d29ec6123acdf41"
  },
  {
    "url": "assets/js/3.58fc4e65.js",
    "revision": "23b39162c7f4f8a2644bdfa45a7e9469"
  },
  {
    "url": "assets/js/30.08972a81.js",
    "revision": "9dde966e7b5fbdefada285bcb0e156bc"
  },
  {
    "url": "assets/js/31.90df113b.js",
    "revision": "91616d8d53d0201d490610c0662db4f9"
  },
  {
    "url": "assets/js/32.f7e8c4d7.js",
    "revision": "c6cd820658b8ac582217d03780bbba26"
  },
  {
    "url": "assets/js/33.510d0fa4.js",
    "revision": "b9b93c016f9bddeac4ce9e45e315f932"
  },
  {
    "url": "assets/js/34.5f33fa4c.js",
    "revision": "6c288f46e274a3f35a709013ab8914c3"
  },
  {
    "url": "assets/js/35.13e3df6d.js",
    "revision": "4aa294a0d57a732545c25cb5ba9cf05a"
  },
  {
    "url": "assets/js/36.5217c1b4.js",
    "revision": "3b26f54818550f1522657d5d2404106d"
  },
  {
    "url": "assets/js/37.88ef5c50.js",
    "revision": "279e5e645bed0330eea449387f9d1917"
  },
  {
    "url": "assets/js/38.d97231ff.js",
    "revision": "6abc74abf9a79ecf5cdcd09fe408106e"
  },
  {
    "url": "assets/js/39.f0787efe.js",
    "revision": "6900062d93f0baf9ce99db7ed11b060c"
  },
  {
    "url": "assets/js/4.3719ffd6.js",
    "revision": "bf7558d065334e1f1dcf47eacf63efc2"
  },
  {
    "url": "assets/js/40.4d35aec6.js",
    "revision": "1f8b5908c4e10410e20d06ad7c525244"
  },
  {
    "url": "assets/js/5.fc64803e.js",
    "revision": "7096e8bb497b7f237b794357a93f2709"
  },
  {
    "url": "assets/js/6.9073e6bf.js",
    "revision": "7b6b44cca0907872c3fbf05f27ee14dd"
  },
  {
    "url": "assets/js/7.bfb26b92.js",
    "revision": "3fae222b5627a7dbd6751acd340dcf8e"
  },
  {
    "url": "assets/js/app.00803f37.js",
    "revision": "561b1395f4023c0588e764b8d750b1ae"
  },
  {
    "url": "assets/js/vendors~docsearch.94bc955b.js",
    "revision": "1ac5cbda5c4f33b996115d3f3a739c5d"
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
    "revision": "d2b6208aae5e97259e396b4b2516625e"
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
