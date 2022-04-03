'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "62f4905b0af8e078cebb8afbfd072048",
"assets/assets/icons/image.png": "0112e39f5f133d438dde7a20982eccda",
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
"assets/lib/assets/kan/1.jpg": "a47d64f15d073f6ebe86a1c034c3b71f",
"assets/lib/assets/kan/2.jpg": "f0060e5fc54a47af0231299a21be0343",
"assets/lib/assets/kan/3.jpg": "37c916ef7bbea6e9f209c002e233ba65",
"assets/lib/assets/kan/4.jpeg": "2404b3e29f3ba759f5ab686521294883",
"assets/lib/assets/kan/5.jpg": "133dbd1677176f795731ce9316ebedab",
"assets/lib/assets/kan/6.gif": "18a38493446200cc69189d3d0fc214fa",
"assets/lib/assets/kan/7.jpg": "62018cbc1d581db70869ff2b6d0934fa",
"assets/lib/assets/lap/1.jpg": "d1fbba6573f135d47346f7b95517b7c4",
"assets/lib/assets/lap/2.jpg": "8749ac6f068eccafd6837e71e0d4ff5a",
"assets/lib/assets/lap/3.jpg": "17b59c9460163a4e02d7dde07de561c6",
"assets/lib/assets/lap/4.jpg": "ba960d64e7a7ad57b2946f38e1f28b65",
"assets/lib/assets/lap/5.jpg": "0c6d4937d01187d7800d112576f26f90",
"assets/lib/assets/lap/6.jpg": "52277267c975a199f35a573a250d2dbf",
"assets/lib/assets/logo.png": "28c8e5e3e2cba45f2ad23b4ef61ed995",
"assets/lib/assets/masu.png": "6a647f19cc863bc4ecd077249b70d33a",
"assets/lib/assets/myJson.json": "df07a0baf2a42a735bd088617c53fdce",
"assets/lib/assets/null.png": "494f963dc73be3d20fc01e4a7f765a2a",
"assets/lib/assets/pasvik/1.jpg": "7f818713ab57e8274f8078637db7ecbc",
"assets/lib/assets/pasvik/2.jpg": "eafaa55a595e329b159050791c4ae9bc",
"assets/lib/assets/pasvik/3.jpg": "f4f9e7c33f6a3e375a10e58d8d7fc163",
"assets/lib/assets/pasvik/4.jpg": "f9ea6ddb9a1f37443c7204081c629daa",
"assets/lib/assets/pasvik/5.jpg": "97e45e3611728ca69823504d664b9163",
"assets/lib/assets/pasvik/6.jpg": "75abd16f86328079d124cd095d11e3fb",
"assets/lib/assets/pasvik/7.JPG": "926cf7bbd4278c50138a61bddf1edecd",
"assets/lib/assets/pasvik/8.jpg": "6644452d67537ca8b291d5804ca46941",
"assets/lib/assets/sady.png": "1539797a7e1b0002e6eef5be6dfd6731",
"assets/lib/assets/splash.jpg": "d0633218e29ab0dbf912023e632f6193",
"assets/lib/assets/splash.png": "da14592fd1f6009ab83bea9c0a071446",
"assets/lib/assets/sprouts.png": "9a399497da8d5b21f32631dd85c524e3",
"assets/NOTICES": "390d544ca3233a12e39c50058e4d534b",
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
"index.html": "c960bf03328511f269795354a7fbd3c9",
"/": "c960bf03328511f269795354a7fbd3c9",
"main.dart.js": "99375a82b9834b843440ebe324b04762",
"manifest.json": "8f0f94d15e5ef5295c842acaf6f58303",
"version.json": "5eac418430835a2887f3be9d9a0fb150"
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
