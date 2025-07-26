self.addEventListener("install", e => {
  e.waitUntil(caches.open("cch-rci").then(cache => {
    return cache.addAll([
      "./",
      "./caja_chica_rci_final_con_borrar.html",
      "./manifest.json"
    ]);
  }));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(response => {
    return response || fetch(e.request);
  }));
});
