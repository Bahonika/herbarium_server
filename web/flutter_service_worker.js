'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "414282d6d773addc45686a7220b1df89",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/lib/assets/100.jpg": "881e7441e8adcc8ab510785bf0bc5c82",
"assets/lib/assets/1000.jpg": "606449d70d9066a760dac9e2515f2b43",
"assets/lib/assets/101.jpg": "fbcaefb79b2110612ed743f92bc78996",
"assets/lib/assets/111.jpg": "420d7fb82370159ca0ca28e121aeb3d6",
"assets/lib/assets/80.jpg": "935a242917b7bfc541218aae99ed329a",
"assets/lib/assets/81.jpg": "6cb88290c2b77104427493b2865928c3",
"assets/lib/assets/85.jpg": "3d3de9ae735d7947f3ff890134a53f3d",
"assets/lib/assets/89.jpg": "741ad8e05ebbcc042a9e3ed2cd5fb7a0",
"assets/lib/assets/90.jpg": "94eaec33f71bba61ab3c41cc69f386c7",
"assets/lib/assets/93.jpg": "64e4fbe91669788504c7fdab3593d95c",
"assets/lib/assets/94.jpg": "c4876f0ba3943ad81326c444a97a6b6b",
"assets/lib/assets/95.jpg": "84bf5f66a1b8ef670312ca8ab74bb9e5",
"assets/lib/assets/96.jpg": "eaee1b9cd696239462c2c4e9e9875157",
"assets/lib/assets/97.jpg": "6329208526f44f1f0e2652f738dbcc11",
"assets/lib/assets/98.jpg": "674041058946b834903b3dc58ab8fecb",
"assets/lib/assets/99.jpg": "c5230d10c868806b1fc326159ce89ab2",
"assets/lib/assets/flora.png": "58824182f69af5bef5d306e8187727b7",
"assets/lib/assets/herbarium.png": "1415b40cde9210ff56723323ce061ab8",
"assets/lib/assets/home_screen.png": "e2eb83d360de8a435e304d795aa3b3f1",
"assets/lib/assets/logo.png": "28c8e5e3e2cba45f2ad23b4ef61ed995",
"assets/lib/assets/masu.png": "6a647f19cc863bc4ecd077249b70d33a",
"assets/lib/assets/myJson.json": "df07a0baf2a42a735bd088617c53fdce",
"assets/lib/assets/null.png": "494f963dc73be3d20fc01e4a7f765a2a",
"assets/lib/assets/sady.png": "1539797a7e1b0002e6eef5be6dfd6731",
"assets/lib/assets/splash.jpg": "d0633218e29ab0dbf912023e632f6193",
"assets/lib/assets/splash.png": "9b47711c61f0a66b353c852a5002a37d",
"assets/lib/assets/sprouts.png": "9a399497da8d5b21f32631dd85c524e3",
"assets/NOTICES": "a993daab8b64ed4239c04b8e6059e403",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc77bc084f42df4d1d601bb74c82e36b",
"/": "bc77bc084f42df4d1d601bb74c82e36b",
"main.dart.js": "33aa32cd48d44861adb1fb0ef3f9ca3a",
"manifest.json": "9ab33103847aa995ddf4697740b3797a",
"version.json": "5872fee2b6b97e8443ca1ebef745d9c8"
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
