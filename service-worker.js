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
    "revision": "247742fb00ccf22c83277e96cc350ba8"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "77dbc97b4e60efa91f4e6a726764da03"
  },
  {
    "url": "03-trials.html",
    "revision": "9b0837a219ca201646409452fe96051b"
  },
  {
    "url": "04-charges.html",
    "revision": "18e6654026b4e4de9fd06addebbc86c1"
  },
  {
    "url": "05-metered.html",
    "revision": "a23387cf3d10bb26b2164985af46ff9c"
  },
  {
    "url": "06-customer.html",
    "revision": "253bd96d096a5cae17a2423fa51a4344"
  },
  {
    "url": "07-invoices.html",
    "revision": "78f17ed49e82559ccb8eb2ac6be14f2f"
  },
  {
    "url": "08-refunds.html",
    "revision": "978183bbcd3affe093a3a8e1c381d257"
  },
  {
    "url": "09-events.html",
    "revision": "cd7bff0bcb5fe5e3cedad9a2d7df0779"
  },
  {
    "url": "10-webhook.html",
    "revision": "6600f08a9bb3059037f6986958f75cc7"
  },
  {
    "url": "11-testing.html",
    "revision": "d04ba7817ac07765014b29c506b352b3"
  },
  {
    "url": "12-faq.html",
    "revision": "fe9b68dfe6a0c253f18b7b4df3d82294"
  },
  {
    "url": "13-upgrade.html",
    "revision": "dc1dbfb2a21f0388be9c9ad7be2a76ae"
  },
  {
    "url": "14-retry.html",
    "revision": "9e300a9235b8c264f129f2676d8250a1"
  },
  {
    "url": "15-localization.html",
    "revision": "cc2e61e8d85cfa5a5d03064364b0ba15"
  },
  {
    "url": "16-configuration.html",
    "revision": "e19d04828cc5c42432a5ab92ac21d992"
  },
  {
    "url": "404.html",
    "revision": "8a0d8941b6d37f43912caea3d2ff832c"
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
    "url": "assets/css/0.styles.55b3e847.css",
    "revision": "0dc105425b8aff6d848214e9acbd76cb"
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
    "url": "assets/js/10.a4313909.js",
    "revision": "ac1dfed68ea2a63cc7d50936a8991c2b"
  },
  {
    "url": "assets/js/11.9cdb7e55.js",
    "revision": "3d9ae0dfac37665f2afe5ce57cd502ec"
  },
  {
    "url": "assets/js/12.de6d39f1.js",
    "revision": "a8fe093d8d4da1a19cd896dd8a96b95e"
  },
  {
    "url": "assets/js/13.bd2d7d7a.js",
    "revision": "ee48e50e061273ecf4d145b124a5e475"
  },
  {
    "url": "assets/js/14.24afae99.js",
    "revision": "5e1687f274cf91198501b3c5d5e9926c"
  },
  {
    "url": "assets/js/15.afa83413.js",
    "revision": "dd53f5e0a1d811b5a5e950e5cfafd631"
  },
  {
    "url": "assets/js/16.616ac1de.js",
    "revision": "fccfccce42daf647893947b350ddc5b8"
  },
  {
    "url": "assets/js/17.3f1f8cf9.js",
    "revision": "a2f86f7f03f2265aa862057200859a69"
  },
  {
    "url": "assets/js/18.ed4bfbe4.js",
    "revision": "5a8ce3796c95ab60cf2b0127d5cae19d"
  },
  {
    "url": "assets/js/19.8b268723.js",
    "revision": "c596c8beca50c012d3b7cde7c781db47"
  },
  {
    "url": "assets/js/2.676c7395.js",
    "revision": "61ac83bed59d894594fd4ae767a74b9b"
  },
  {
    "url": "assets/js/20.23eb098f.js",
    "revision": "6b67d5e12ca113a739c2a9a6af3c7637"
  },
  {
    "url": "assets/js/21.c03b49ba.js",
    "revision": "5ab7a9f334238641c1c7f5dc28c1e18b"
  },
  {
    "url": "assets/js/22.37b4ba2c.js",
    "revision": "aa96618a39b50772aa1a6082952748df"
  },
  {
    "url": "assets/js/23.bf7129d1.js",
    "revision": "d1d15f98782770ac0cc5fd746430e741"
  },
  {
    "url": "assets/js/24.8094284f.js",
    "revision": "4eca465924c9800559dea849a65dc7d5"
  },
  {
    "url": "assets/js/25.d4ae5cb2.js",
    "revision": "e88b913d2a168ef7caf67dace1008edf"
  },
  {
    "url": "assets/js/3.341cd230.js",
    "revision": "3708a8c71b3055459fb97cdd8772788a"
  },
  {
    "url": "assets/js/4.962f095d.js",
    "revision": "77e3c8b1e1961e7c106f1a46a469cbb6"
  },
  {
    "url": "assets/js/5.37372cb8.js",
    "revision": "4f792f9dbbb25bddc2dfcf2e1511696f"
  },
  {
    "url": "assets/js/6.6786ae0f.js",
    "revision": "d90384fd1fe9bfd3fa101caaa3c2809f"
  },
  {
    "url": "assets/js/7.2c5c606b.js",
    "revision": "3ad87aac4f227933ae3af3e9c34f555d"
  },
  {
    "url": "assets/js/8.4d9a6b3b.js",
    "revision": "a04db9c69831e368f57ecec4a72d92d6"
  },
  {
    "url": "assets/js/9.0df33946.js",
    "revision": "1d2f409e57e3f3af4b0a7d962b563add"
  },
  {
    "url": "assets/js/app.cfb8dd23.js",
    "revision": "2fe7064168b355fb1c4812e507b8c11d"
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
    "revision": "7ae5a0d4a5df9054b941871a414d6f1f"
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
