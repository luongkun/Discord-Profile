/*
 * Service worker tối giản cho PWA.
 * Chiến lược: KHÔNG cache trang (presence phải luôn realtime), chỉ dự phòng
 * khi MẠNG CHẾT hẳn — trả trang chính + ảnh dự phòng đã có sẵn trong SW.
 */
const CACHE = 'luongkun-shell-v1';
const SHELL = ['/', '/index.html', '/404.html', '/avatar-me.webp', '/avatar-partner.webp', '/deco-me.webp', '/icon-192.png', '/icon-512.png'];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;
    // Chỉ dự phòng request cùng nguồn; API/WebSocket/CDN ngoài để mặc định
    if (!e.request.url.startsWith(self.location.origin)) return;

    e.respondWith(
        fetch(e.request)
            .then((res) => {
                // Cập nhật quietly bản shell mới nhất khi online
                if (res.ok && e.request.destination === 'document') {
                    const copy = res.clone();
                    caches.open(CACHE).then((c) => c.put(e.request, copy));
                }
                return res;
            })
            .catch(() =>
                caches.match(e.request).then((hit) => hit || caches.match('/index.html'))
            )
    );
});
