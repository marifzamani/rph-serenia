// Service worker ringkas supaya app boleh dipasang (tiada cache data; sentiasa ambil dari rangkaian)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
