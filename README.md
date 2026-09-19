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
| `banner_executive.jpg`, `profile_banner_cyber.jpg` | Ảnh banner của card và của card máy chủ |
| `avatar_decoration.png`, `favicon*`, `apple-touch-icon.png` | Icon, favicon |

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
