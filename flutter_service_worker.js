'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8f6dbd0a9c8d12a57cb5d3d3bf5b8aad",
".git/config": "86273080f0e79a7984547e8ad361b789",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "94049ed63346a6b3e9352e678742c7ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe26e739681e3017920cba7b119991f5",
".git/logs/refs/heads/main": "2a0bc2fb98efef52e6ba20fab58e6565",
".git/logs/refs/remotes/origin/main": "093243ab1ee942c40815485fc25e99e6",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/07/737fc16049e23d8261e83493131705c380eb6f": "7d7180868899c93ac301deecc5a13df2",
".git/objects/0c/e3f263d029abe77b326d26dc6b9df74c1c081e": "c810d60489725ddd1193540406183b95",
".git/objects/11/f961451bfb4543cefe30796f69de1ea9215e3e": "31d8a017710383b19e30aa749a97457d",
".git/objects/14/c8ca4cb7d1697d7ceb99815ba62c3454607ff8": "93fb9b3a917a7279830cffceb6e23303",
".git/objects/15/6075b402b57db5c1b057ffd56b624ac817e8f2": "47d9ddf66f691687c1e02217fee6bb4d",
".git/objects/1b/93e9eba7badfe24113b2df4ce44056f0fe0a0a": "f9c09aa0c1d7c5d57d6aacf76da5f2db",
".git/objects/1c/c4cf5e2b305b23b7617fdef42600a5c1b3b4ff": "ae568c20bb4b21359bc44bee33e39663",
".git/objects/1d/2b3447271fb6f1e25aee8b3af9c9c5068166c8": "26a53a1bac8b2e62d5aa47ff7b79e10e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/d79ca6c45661ddab9f35ba3380fb1b15401cd3": "ddb0f236c876dc542da7be8f5fb33c13",
".git/objects/2a/2ef57ae827ed1ef80f2be66aea4ca8250faf7a": "4f8de6787b4a461bfa5d49441da62aaa",
".git/objects/30/cb62bd2847e8d4c663ea17d58af0c2b463f6ee": "5a38392c551ba0fe7b06a424ca325280",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/fec90ff0e38a1c9c17768ee280df173903a2b8": "80290701f2775cbdd152ea4c22fbdb13",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/41/913c494540f98cd5c36d6f1a226745cb3af1fc": "81983c4b1443ff4ef18db222a49eee92",
".git/objects/44/73433368b119863fa40a3ffaae5c72fe2d0b78": "bee65eecd393ca154d7390ac90ce1259",
".git/objects/47/94fb59d4235e12c6fa264064da5c5b3059bc8c": "84b919be7dd03534045558b812b2575b",
".git/objects/4a/816b7e758df7766e2b67e7b2fc0652984004e3": "3b5ff81f5fcb88b3af9984f952fa6807",
".git/objects/4a/ccd33075ba2eb62889b3a0dc48614cf8c55f01": "bc1a1f02bbd77c7f40ee706b766409d0",
".git/objects/4d/b1d1f1fe0c0a92a0b32dec33beede1b5d44868": "6bd7afc907baa05c7a76769d1cd38fd8",
".git/objects/4e/34e6e5d5e5ad88ddabeff3d6851da9b044769c": "b76b7508c938c199ab23268695916e80",
".git/objects/4f/8c711accad71c0c804efdb10eca1ceeaa074b1": "b15862c829dc7f5a900003a562027302",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/56/1ed7cc8f940ac0c82378b9d1eea0890381c62b": "90e59cea21ef89c1738fc48ae9df9ab0",
".git/objects/5d/b19998e268d73a34bd803afded7c35feab4f0a": "f160160e66ab323e3d2bf1e4e4c5e36f",
".git/objects/61/8a4d9a048b4a611db6b69f8d8e2524bc23244e": "88e0adfffbeaa7bb19153b37132cf02e",
".git/objects/62/4778d8d04c60a6ced9daf4ec5569e723c02c89": "c350fefc4e6c653b75c2d0a526bfa82e",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/6d/c71f88cd5e3577ed9d790998cd8daf893a6d68": "bb7c4d44a7158cdf053083dc6e31cadf",
".git/objects/77/ebf8eb7c970f1c64464acefdbaa3ebd69fda09": "1b6de86e61c3ac8bf08b654104959d04",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/be03edf6ad69dad07abcb72ef34019fb64292b": "36498a4a203335be478ae94ad91e96df",
".git/objects/7c/5b119fd53f62837839fcb31db0b9ca87008306": "b0aeb9366109314e68ccc294aa22007a",
".git/objects/84/d1c23c3668d82091341b0106c8c08826509b03": "b79a9976bfd9fd3a94715409727efe2b",
".git/objects/85/c705061d33f6fea0a54c25d4506ba08980f317": "7eeeb31a5a425e0c5328737a41371b50",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1889a630ffdb0e3755e7df20a5ae470e10fdb2": "8ccdde4d9e66d249ef16c1ec1d614b0e",
".git/objects/8d/cddbe02fe7b7bc3f348e38ff506241238b1009": "a2fbfdba2ceee0434115adbb2184bb95",
".git/objects/92/69cf33bbcbc4d432959b6deaf2fd475f5d1fec": "e91f709132bdf8fa3399379479ed41c7",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/98/81e4c3eb5b686ada94ccde8b9408e99a5033fa": "78b7b32585c2a2606e7a2414e56418be",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/7699b0da9faa075bd755b9a5ccd8c67a3e89cc": "98ebc54f9fbfeed5c8571838c83051fb",
".git/objects/a4/752e164532b581139690588c75966ff579cc28": "c6c69e480b2632fce1267b5faa3d5666",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/3bdab537f9c2ce4cb1d343205ddc15829f25ea": "af37ea489d5b6e0e0096391bbd320f12",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/af/1bb5098ac7e819a8eaebca129135f2cdf3944b": "31abe68411b03d0e2492230aa0b6e65a",
".git/objects/af/3bf31084fbcb86d5889e0a239c4c6dcaf46f77": "76f6b6d2ea9450ccd4d4126f83acd971",
".git/objects/b6/0ca82287b116594ff078d6af378c5f5de1cc19": "ca2631651d0cbed0c45915904f9c18d8",
".git/objects/b6/29e52ead8679ab1a741017b9ffdba2aad7ac87": "afe3e2c33af606b180ae542ce3736e49",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/bf/ab254081c104926b7675144da0f06087599949": "4b160ab08a0e191be50ae5f8138067aa",
".git/objects/c0/556020f6c171dedccc141fb6ae58862913f868": "e3c910be79e2d8d8c3986a4cf6988102",
".git/objects/c3/e9627f99cd7153b66be6a774d006bf79d2663a": "2f734a617c36fd037b296bee07a6495a",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/c8/040312449c8fc7e07539fdc4ae011319901667": "bb6ebf6c2689bcd92c3e669ba27c2431",
".git/objects/cb/787ea9a0aa128c5ae8f3ff1d97013e0b3a00ca": "29d8ed8b74d44926b4d1dd5331c33c68",
".git/objects/d0/98bbc11ded1b2f365fe81f9bba95fd12ff17ce": "e9a9f8ca641367b91932082511ec918c",
".git/objects/d1/ac29457faa3725d75ee6bda3882c937cab8c38": "5596a2638a1456a02e3bff4fbccfca9b",
".git/objects/d4/e9e99a70189fc613fd35c204aa8d7187fc7b14": "156726fefca3d1978799f3c2868955b5",
".git/objects/d5/dde290bbafeb3fbf48362c0802f59ba294df5a": "d36fb766812cb02408f38ad67d0749fe",
".git/objects/db/05b329a2434e6717c809a12aa3d411bc8693aa": "0241822ba20b91dafd96d4769e7b695d",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/e2/81024cf550d36597e6e69e9e3ff7a54367dec1": "9eff32a7fc46ac3a0e444635d9dd7eb2",
".git/objects/e3/8f38b23aeace603d123bbf3dc8d7b93f03a70e": "540103f15ac5c2b848652d277673f126",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/9ab6f6a43241b0274e8727106adfe50e937af1": "d4417aa81040760c29890b8243921d2e",
".git/objects/fc/6b0b7c13f54e9d4986276a94ffcea3c0181bfe": "ab3104935e3c561b2c4a0e53956b3b3f",
".git/refs/heads/main": "a569a5c8a6bf486eaf326cf17ae17c6c",
".git/refs/remotes/origin/main": "a569a5c8a6bf486eaf326cf17ae17c6c",
"assets/AssetManifest.json": "77fb1b60eee3fea5a989a47100509a97",
"assets/assets/akyanpay.png": "ada868f7575a788e7b5b70ec5826e5b3",
"assets/assets/brand1.png": "f3a3a0de79048e1f14aac62ec76609b8",
"assets/assets/brand2.png": "91c6d8820e35e10e39757e0de6ac4345",
"assets/assets/brand3.png": "c0915a84744f3481a2105c5aea6727e0",
"assets/assets/brand4.png": "e9441e9a5d26e508f592aa31b9febff6",
"assets/assets/brand5.png": "fc57e9a9ff95830ea207e2452ffd4bd6",
"assets/assets/certificate.jpg": "9f4fd0d62b6e2ad59cf3245b74f18bb9",
"assets/assets/cs_club.png": "2a30033eaf8b7ce6a7b944ca0ec1a1eb",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/female.png": "29c52b49d99a5de88d34ab04aafe3f59",
"assets/assets/ios.png": "49f79e21da11e96b8cf0e3b8bef6616c",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/male.png": "a687ddbf4597360c3b9e293a58b1d829",
"assets/assets/plm_profile.jpg": "3635976fa04d2c56fd3e2d9e23729bce",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/update_oncinema.png": "ed0638dce87b8c9f3132bed717ca6d6e",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9f2f579505efaf41d50171ea388ca32a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f450f59939be33aa1644a20b3b15c87e",
"/": "f450f59939be33aa1644a20b3b15c87e",
"main.dart.js": "49c7e2981d43bc380b9947db4e2c3b67",
"manifest.json": "755a1c3a07ae25428983ed94a9efe01a",
"version.json": "a53d54dbee8ca024fa4168791835596b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
