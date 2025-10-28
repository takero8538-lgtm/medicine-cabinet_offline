self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icon.png",
        "./xlsx.min.js" // 👈 新しいファイル名に修正
      ]);
    })
  );
});
