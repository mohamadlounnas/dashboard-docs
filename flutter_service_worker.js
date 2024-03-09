'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c7a2619ad8f87148bc92205b6696d920",
"index.html": "8ea12037dde02fb774c3f57a07302237",
"/": "8ea12037dde02fb774c3f57a07302237",
"main.dart.js": "36e8d2634bb2992f24ba4feed395195d",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "d71757c31a05437c0ad57424024edf0f",
"icons/Icon-192.png": "5f8ed1a09e0f7843f3e32ce98fbf5ca8",
"icons/Icon-maskable-192.png": "5f8ed1a09e0f7843f3e32ce98fbf5ca8",
"icons/Icon-maskable-512.png": "20ff618e6c67307fac7d67c9d6209468",
"icons/Icon-512.png": "20ff618e6c67307fac7d67c9d6209468",
"manifest.json": "e6aec6ec8a9c7c6068999d952c0ad1fb",
"privacy_policy.html": "d39c88b61bbc1c281a304450bce65273",
"assets/AssetManifest.json": "f2ae0bc3aa499adaee74ab9c669b96d7",
"assets/NOTICES": "c83900cc5ebd1ad0399087e8b9502edf",
"assets/FontManifest.json": "ccf665d238a0b7781a3ee2f5c931d35e",
"assets/AssetManifest.bin.json": "1526462e0fb44dc4070b4cbd2a7658cb",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/fast_rsa/web/assets/worker.js": "cb436a66695a131c0f470e15a55b86a9",
"assets/packages/fast_rsa/web/assets/wasm_exec.js": "8bccb701dbf4a238e687fa92cda9c4bb",
"assets/packages/fast_rsa/web/assets/rsa.wasm": "316c2af4f44865c7a0e6cbaddef82c7e",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "14f5605d06c3713d13eeab99e2427c55",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "8a498250f19fa3c6fbb8a7b8265bf25a",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "2664bfa258b396039fb2bf98c28ff490",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/audios/flow.mp3": "ee0d372271eda909eedc1e2dc1ffafea",
"assets/assets/audios/new_assistance.mp3": "0d963c2e4996c0ebef4f1331064f0a2c",
"assets/assets/logo_black.png": "4f5c453a5a089e66de036bb700d8bbf5",
"assets/assets/zed_logo_black.png": "f71bf2fbca33551d87b5c3c408897b5a",
"assets/assets/backgrounds/4.jpg": "5881059133950ccb7b00d327a18f7dab",
"assets/assets/backgrounds/2.jpg": "32e4e6459b1d85fb46e0d072af718a97",
"assets/assets/backgrounds/3.jpg": "889db6a17d3201a1a07c72cf10703fed",
"assets/assets/backgrounds/1.png": "9fcaa39c9de986c996a5a5cb6809d993",
"assets/assets/backgrounds/0.jpg": "9b549c811d418fc731d50881d2ae789d",
"assets/assets/ic/ic_launcher_monochrome.png": "f71bf2fbca33551d87b5c3c408897b5a",
"assets/assets/ic/ic_launcher_foreground.png": "e451ec711ac9133ac666d84b8e344380",
"assets/assets/ic/ic_launcher_background.png": "337602abf2735cd8f2307a338171d466",
"assets/assets/fel_khidma/logo_dark_bg_2.png": "7d5834098a4691901f19f1e1b52c1bfb",
"assets/assets/fel_khidma/logo_dark_bg.png": "31ce65908604ec22ba014e02b8d5e4c0",
"assets/assets/fel_khidma/logo_transparent_on_light.png": "9a498a682aa23b5224689dc6cdb06276",
"assets/assets/fel_khidma/logo_transparent_on_dark.png": "d2375f3f3742c55ae405d91b68ac7ea5",
"assets/assets/themes/content_based_color_scheme_1.png": "e1a3ae773f889b10c046ad28eae04ba0",
"assets/assets/themes/content_based_color_scheme_3.png": "611182ce7bac0662d61abc081a6c1df9",
"assets/assets/themes/content_based_color_scheme_2.png": "603065c6789ffaa35a60af7a2451b2ac",
"assets/assets/themes/content_based_color_scheme_6.png": "2707c527f337276689670a999871c131",
"assets/assets/themes/content_based_color_scheme_5.png": "6fa39e70c560445d01fbfb80d0825a34",
"assets/assets/themes/content_based_color_scheme_4.png": "5bf5736f2150bbcd7b69e56339572fb3",
"assets/assets/roya/logo_transparent_on_light.png": "011e587270cac2cd931fe76a1d466251",
"assets/assets/roya/logo_transparent_on_dark.png": "cb79f94180bc7594d32ca90acb016ab5",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
