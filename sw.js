const CACHE_NAME = 'adhekari-cache-v1';
const urlsToCache = [
  '/adhekarijewellers/',
  '/adhekarijewellers/index.html',
  '/adhekarijewellers/style.css',
  '/adhekarijewellers/manifest.json',
  '/adhekarijewellers/icon-512x512.png' 
  // আপনার অন্যান্য গুরুত্বপূর্ণ ফাইলগুলোর পাথ এখানে যোগ করুন
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // ক্যাশে থাকলে তা থেকে পরিবেশন করা হবে
        if (response) {
          return response;
        }
        // ক্যাশে না থাকলে নেটওয়ার্ক থেকে নিয়ে আসা হবে
        return fetch(event.request);
      }
    )
  );
});
