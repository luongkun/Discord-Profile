/*
 * Service worker tối giản cho PWA.
 * Chiến lược: KHÔNG cache trang (presence phải luôn realtime), chỉ dự phòng
 * khi MẠNG CHẾT hẳn — trả trang chính + ảnh dự phòng đã có sẵn trong SW.
 */
const CACHE = 'luongkun-shell-v3';
// LƯU Ý QUAN TRỌNG: chỉ đưa vào đây những đường dẫn trả 200 TRỰC TIẾP.
// Cloudflare Pages chuyển hướng 308 cho '/index.html' và '/404.html', mà
// cache.addAll thất bại nếu gặp phản hồi không phải 200 -> service worker
// sẽ không cài được. Vì vậy dùng './' và KHÔNG liệt kê file HTML nào.
const SHELL = ['./', './avatar-me.webp', './avatar-partner.webp', './deco-me.webp', './icon-192.png', './icon-512.png'];

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
    const req = e.request;
    if (req.method !== 'GET') return;
    // Chỉ dự phòng request cùng nguồn; API/WebSocket/CDN ngoài để mặc định
    if (!req.url.startsWith(self.location.origin)) return;
    // Tải một phần (Range) của thẻ audio không cache được -> trả cho trình duyệt tự xử lý
    if (req.headers.has('range')) return;

    e.respondWith(
        // Mạng trước — không bao giờ phục vụ bản cũ khi còn online
        fetch(req)
            .then((res) => {
                // Chỉ cache phản hồi 200 hoàn chỉnh (bỏ 206/redirect)
                if (res.status === 200 && res.type === 'basic') {
                    const copy = res.clone();
                    caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
                }
                return res;
            })
            .catch(() =>
                // Khi mất mạng: trả bản đã cache; điều hướng tới đường dẫn lạ thì
                // trả trang chính (đã cache sẵn dưới khoá './')
                caches.match(req).then((hit) => hit || (req.mode === 'navigate' ? caches.match('./') : Response.error()))
            )
    );
});
