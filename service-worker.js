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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "afa9e42827aaa67e76baa12d6ae7200f"
  },
  {
    "url": "assets/css/0.styles.7b19ecef.css",
    "revision": "b16e815fc972fa6e26f91610002378ce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.060a9809.js",
    "revision": "24b05fba6b549b9d41d2fa8fde445d72"
  },
  {
    "url": "assets/js/11.8824d8e1.js",
    "revision": "b4d216ac135ed0234fa9f5d1a06f511e"
  },
  {
    "url": "assets/js/12.562469b6.js",
    "revision": "bd8ff2a033b83a22ab843046a5228fd4"
  },
  {
    "url": "assets/js/13.4b083563.js",
    "revision": "4783f045a5b753b84b10eed4181d86d1"
  },
  {
    "url": "assets/js/14.6d764f53.js",
    "revision": "16e5607419e53ebe8cf09735b6fd70ab"
  },
  {
    "url": "assets/js/15.d74ab4c1.js",
    "revision": "2ddcdb8178faf5daa5ef51c4e33ffa28"
  },
  {
    "url": "assets/js/16.5f147180.js",
    "revision": "c08406acf9afd0fbb850b2295f4e2da7"
  },
  {
    "url": "assets/js/17.3be2cd0b.js",
    "revision": "22a818d8d30868fc51f0d5876036c9ad"
  },
  {
    "url": "assets/js/18.578a4a2f.js",
    "revision": "a37beb08809cc2f57441c38fbb84b172"
  },
  {
    "url": "assets/js/19.3202ee52.js",
    "revision": "e9ded5a7cb043bd2f9770377a7615790"
  },
  {
    "url": "assets/js/2.fa2acb09.js",
    "revision": "3b5a845956432f0d58e0545f569a91cc"
  },
  {
    "url": "assets/js/20.ac649b5a.js",
    "revision": "04ea9888ae1686c0271f7651c9ef9855"
  },
  {
    "url": "assets/js/21.aadf0579.js",
    "revision": "e68b78c2be30e057bd70c6d06b7a6d72"
  },
  {
    "url": "assets/js/22.f0292e23.js",
    "revision": "cefa645b552635970c2d9845222cc2b8"
  },
  {
    "url": "assets/js/23.b8b33f84.js",
    "revision": "8516a72bb026dfad82367aca540a56b2"
  },
  {
    "url": "assets/js/24.f6be4bd7.js",
    "revision": "983a591af44e488c44cd11a6fc7fef1a"
  },
  {
    "url": "assets/js/25.356014d7.js",
    "revision": "2af486caba4addf6fdd337e34601d5e1"
  },
  {
    "url": "assets/js/3.ebc0c907.js",
    "revision": "454c51b1d08b526873bf17a4afec6f56"
  },
  {
    "url": "assets/js/4.80f91650.js",
    "revision": "146a54afbadac106129db7519ef19f26"
  },
  {
    "url": "assets/js/5.0ca3c3d5.js",
    "revision": "e7452a3a6be14e42fd1270b4524ef305"
  },
  {
    "url": "assets/js/6.2c25a14b.js",
    "revision": "8cd9295fab43f64d4506c7b93581155a"
  },
  {
    "url": "assets/js/7.edebd64b.js",
    "revision": "08ec517bee18bf6d06ba23c9abaecafe"
  },
  {
    "url": "assets/js/8.0c97b270.js",
    "revision": "386e1569b2780bafb5608f0991eac048"
  },
  {
    "url": "assets/js/9.1e204f55.js",
    "revision": "8684671d05c5d2b6013c5494580664e0"
  },
  {
    "url": "assets/js/app.ba514306.js",
    "revision": "c5faa3729f8303f8e24b5e096141402f"
  },
  {
    "url": "guide/config.html",
    "revision": "984bbb8ea04fc6fa30ab04b8417ebba2"
  },
  {
    "url": "guide/design-concept.html",
    "revision": "024e01bca694dafc8b61d51d2e546c09"
  },
  {
    "url": "guide/install.html",
    "revision": "b543fe388456010d43e1ba9cc0c57b91"
  },
  {
    "url": "guide/introduction.html",
    "revision": "36e8e73e687488dac736f799f883fa43"
  },
  {
    "url": "guide/project-integration.html",
    "revision": "650af9984b6f234d7c8c3e8ccd7e8069"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "f6605cd155caec745dbb014c1fb5ac11"
  },
  {
    "url": "guide/schema.html",
    "revision": "2a44bfefbaf9a0599766d89635a6a7f4"
  },
  {
    "url": "guide/share.html",
    "revision": "01367cc030c7aee6efaaa7d7aefd1187"
  },
  {
    "url": "guide/use-in-test.html",
    "revision": "97c070bd97267d86da8e1a418b46dc7d"
  },
  {
    "url": "guide/webpack-tutorial.html",
    "revision": "6e1815ce4a86c689e97c7f949b88dff3"
  },
  {
    "url": "index.html",
    "revision": "6477970f91958351cd0e75398cb7fc9d"
  },
  {
    "url": "logo/logo-color.svg",
    "revision": "ce025e5858229195d4fa7018ee849edd"
  },
  {
    "url": "zh/guide/config.html",
    "revision": "5d15859424940421cf6ab9fd96932623"
  },
  {
    "url": "zh/guide/design-concept.html",
    "revision": "d4e9f47da299085b52ccc59ce39c3971"
  },
  {
    "url": "zh/guide/install.html",
    "revision": "5dc07942e77a383c535976188a0c7a41"
  },
  {
    "url": "zh/guide/introduction.html",
    "revision": "4079a27b325d0520e7010a605bbb8e25"
  },
  {
    "url": "zh/guide/project-integration.html",
    "revision": "c8379fbf1d4db3c52416c16d04f53efa"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "5af254024d6b0bb45108f3f7796ee3ca"
  },
  {
    "url": "zh/guide/schema.html",
    "revision": "f349485f8e48858ba8cd7288f261d6f5"
  },
  {
    "url": "zh/guide/share.html",
    "revision": "0c43a29ce5ecf583f6332117867fdeba"
  },
  {
    "url": "zh/guide/use-in-test.html",
    "revision": "aafde00d106b8bd1396b16f5220b0c1c"
  },
  {
    "url": "zh/guide/webpack-tutorial.html",
    "revision": "d75826ad96528e2adc73c3f402394a00"
  },
  {
    "url": "zh/index.html",
    "revision": "435c1afa846497aa7866d54af72c1af9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
