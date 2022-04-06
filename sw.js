const cacheName = "Vila-Miisa-Pizzaria-v0.0.4";
var precacheFiles = [
  '/views/index.html',
  '/views/telaCategorias.html',
  '/views/telaEntregas.html',
  '/views/telaMenu.html',
  '/views/telaPedidos.html',
  '/views/telaPizzas.html',
  '/css/index.css',
  '/css/telaCategorias.css',
  '/css/telaEntregas.css',
  '/css/telaMenu.css',
  '/css/telaPedidos.css',
  '/css/telaPizzas.css',
  '/js/index.js',
  '/js/telaCategorias.js',
  '/js/telaEntregas.js',
  '/js/telaMenu.js',
  '/js/telaPedidos.js',
  '/js/telaPizzas.js',
  '/js/serviceworkerstarter.js',
  '/js/vilaMiisaPizzaria.js',
];

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  let resposta = caches.open(cacheName).then((cache) => {
    return cache.match(event.request).then((recurso) => {
      if (recurso) return recurso;

      try {
          return fetch(event.request).then((recurso) => {
            cache.put(event.request, recurso.clone());
            return recurso;
          });
      } catch (error) {
        console.log(event);
        console.log(recurso);
        return recurso
      }
    });
  });
  event.respondWith(resposta);
});

self.addEventListener('install', function (event) {
  self.skipWaiting();

  event.waitUntil(
  caches.open(cacheName).then((cache) => {
    return cache.addAll(precacheFiles);
  }));
});