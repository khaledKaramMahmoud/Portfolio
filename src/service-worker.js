/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/styles.css',
  '/app.js'
];

const wb = new WorkboxSW({
  clientsClaim: true,
  skipWaiting: true
});

wb.precache(urlsToCache);

this.addEventListener('fetch', (event) => {
  console.log('Service worker fetch event:', event.request.url);

  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log('Cache hit:', event.request.url);
        return response;
      }

      console.log('Cache miss:', event.request.url);

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    }).catch(() => {
      return caches.match('/offline.html');
    })
  );
});