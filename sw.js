const CACHE_NAME = 'cave-livreur-v2';
const ASSETS = [
  '/cave-livreur/livreur.html',
  '/cave-livreur/manifest.json',
  '/cave-livreur/icon-192.png',
  '/cave-livreur/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() =>
      caches.match('/cave-livreur/livreur.html')
    ))
  );
});
