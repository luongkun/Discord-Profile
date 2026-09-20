# Discord-Profile

Trang bio cá nhân tĩnh, tích hợp **Discord Presence thời gian thực** qua [Lanyard](https://github.com/Phineas/lanyard) và tự động lấy thông tin **máy chủ Discord** từ Invite API.

Giao diện gồm: màn hình chào, thẻ profile (tên / tên ID / avatar / khung avatar đồng bộ theo tài khoản Discord), widget nhạc nền, particle canvas, custom cursor, khu "sở thích" và card máy chủ Discord có số thành viên / số online cập nhật realtime.

## Cấu trúc file

| File | Vai trò |
|---|---|
| `index.html` | Khung trang, markup tĩnh (JS sẽ đổ dữ liệu thật vào) |
| `style.css` | Toàn bộ giao diện, responsive, hiệu ứng |
| `config.js` | **Nơi cần sửa**: Discord ID, thông tin profile, máy chủ, social, playlist nhạc |
| `script.js` | Lanyard realtime, render máy chủ, audio, cursor, particle, typewriter |
| `bai1.mp3` | Nhạc nền |
| `banner_executive.webp`, `profile_banner_cyber.webp` | Ảnh banner của card và của card máy chủ |
| `avatar_decoration.webp`, `favicon*`, `apple-touch-icon.png` | Icon, favicon |
| `qr-bank.png` | Ảnh QR chuyển khoản, hiện khi bấm nút Donate |
| `og-image.jpg` | Thẻ 1200×630 hiện khi chia sẻ link lên Facebook / Messenger / Discord |
| `.github/scripts/check_site.py` | Bộ kiểm tra tự động (chạy ở máy và trên CI) |

### Ghi chú về dung lượng

Trang đã được nén tối đa có thể đo được:

- Thẻ audio dùng `preload="none"` — bài nhạc **không tải** cho tới khi khách bấm vào màn chào.
- Ảnh QR chỉ được tải khi khách **thật sự** mở hộp thoại Donate (xem `loadDonateQr()`).
- Ba ảnh nền/khung dùng WebP đã cắt đúng khung nhìn thật (banner card hiển thị 1124×117 CSS nên ảnh chỉ cần đúng tỉ lệ đó, ở 2x cho màn Retina).

Tổng tài nguyên tải lần đầu khoảng **0.3 MB** cho khách không bật nhạc (trước đây ~2.9 MB).

## Kiểm tra trước khi push

```bash
python3 .github/scripts/check_site.py
```

Bộ kiểm tra canh 4 loại lỗi đã từng xảy ra thật: file được tham chiếu nhưng thiếu, ảnh QR bị đổi/hỏng (giải mã và so với mốc sha256 trong `.github/qr-expected.sha256`), sai cú pháp JavaScript, và CSS lệch ngoặc. Cùng bộ kiểm tra này cũng chạy tự động trong GitHub Actions mỗi lần push lên `main`.

> Khi **chủ ý** đổi ảnh QR: chạy `python3 .github/scripts/check_site.py` để lấy hash mới rồi cập nhật `.github/qr-expected.sha256`. Nếu không cập nhật, CI sẽ chặn push — đó là chủ ý, vì QR sai một ký tự là tiền chuyển sai người.

## Cấu hình

Mở `config.js`:

```js
const CONFIG = {
    discordId: "1222143238056574990",   // Discord User ID của bạn
    profile: {
        name: "Toa",                     // giá trị dự phòng khi chưa có dữ liệu Discord
        syncNameWithDiscord: true,       // true = tên trên card lấy theo Discord
        location: "Ninh Bình, Việt Nam",
        // ...
    },
    servers: [ { inviteUrl: "https://discord.gg/..." } ],
    music: { playlist: [ /* ... */ ] },
    donate: {
        qrImage: "qr-bank.png",           // đổi tên file ảnh QR ở đây nếu cần
        bankName: "",                     // 4 dòng này để trống thì tự ẩn
        accountName: "",
        accountNumber: "",
        note: ""
    },
    // ...
};
```

**Điều kiện để presence hoạt động**: tài khoản Discord phải tham gia server [discord.gg/lanyard](https://discord.gg/lanyard). Nếu không, Lanyard trả 404 và trang hiển thị thông báo "Chưa kích hoạt Lanyard".

**Cách lấy Discord User ID**: bật Developer Mode trong Discord → chuột phải vào avatar → Copy User ID.

Nên dùng **invite vĩnh viễn** (Expire after: Never) cho máy chủ, nếu không card máy chủ sẽ mất dữ liệu sau khi link hết hạn.

## Chạy thử tại máy

Trang gồm nhiều file nên cần chạy qua HTTP server, không mở trực tiếp bằng `file://`:

```bash
python3 -m http.server 8000
# rồi mở http://127.0.0.1:8000
```

## Deploy

Toàn bộ là file tĩnh, không cần build. Có thể deploy thẳng lên GitHub Pages, Cloudflare Pages, Netlify hoặc Vercel (chọn thư mục gốc làm thư mục publish).

## Giấy phép

Dùng cho mục đích cá nhân.
