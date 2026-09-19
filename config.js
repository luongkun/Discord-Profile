/**
 * ====================================================================
 *                 NGUYỄN LƯƠNG BIO - CẤU HÌNH TÙY CHỈNH (CONFIG)
 * ====================================================================
 * Professional English Configuration & Elite Bio Information
 */

const CONFIG = {
    // 0. TÊN WEB (hiện ở tiêu đề tab, thẻ og:title khi share link).
    //    Để trống "" nếu muốn tiêu đề chạy theo tên hiển thị Discord.
    siteName: "luongkun",

    // 1. DISCORD USER ID:
    discordId: "1222143238056574990",

    // 2. THÔNG TIN PROFILE:
    //    name / username / avatar bên dưới chỉ là giá trị DỰ PHÒNG lúc trang mới tải
    //    (hoặc khi Discord ID chưa kích hoạt Lanyard). Ngay khi có dữ liệu từ Discord,
    //    script.js sẽ tự ghi đè bằng tên hiển thị, username, avatar và khung avatar thật.
    profile: {
        name: "Toa",
        // true  = tên trên card lấy theo tên hiển thị Discord (đồng bộ realtime)
        // false = luôn giữ đúng "name" ở trên, bỏ qua tên tài khoản Discord
        syncNameWithDiscord: true,
        username: "chilanoidau",
        title: "Gamer • Music Lover • Coffee Addict",
        avatar: "https://cdn.discordapp.com/avatars/1222143238056574990/cd20117cf2a6a045b8dd4b62cc048320.png?size=256",
        banner: "banner_executive.jpg",
        bio: "Just a normal guy who enjoys the simple things in life. Passionate about gaming, good music, and a perfect cup of coffee. Love traveling to new places, capturing moments, and binge-watching movies. Welcome to my little corner of the internet.",
        location: "Ninh Bình, Việt Nam",
        quotes: [
            "Gaming, coffee & good vibes.",
            "Living one chill day at a time.",
            "Music on, worries off.",
            "Collecting moments, not things."
        ],
        badges: [
            { icon: "fa-solid fa-gamepad", label: "Gamer", color: "#ffffff" },
            { icon: "fa-solid fa-headphones", label: "Music Lover", color: "#e0e0e0" },
            { icon: "fa-solid fa-mug-hot", label: "Coffee Addict", color: "#ffffff" },
            { icon: "fa-solid fa-plane", label: "Traveler", color: "#d1d5db" },
            { icon: "fa-solid fa-camera", label: "Photography", color: "#a1a1aa" },
            { icon: "fa-solid fa-film", label: "Movie Buff", color: "#ffffff" }
        ]
    },

    // 3. DANH SÁCH DISCORD SERVER:
    servers: [
        {
            // Tên, avatar, số thành viên & số online sẽ được cập nhật real-time từ Discord
            // (script.js gọi api discord.com/api/v9/invites/{code}?with_counts=true)
            name: "Starlight Brigade",
            role: "Cộng đồng Starlight Brigade",
            description: "Máy chủ Discord Starlight Brigade — nơi giao lưu, chơi game và kết nối cùng mọi người.",
            // Invite vĩnh viễn (không có expires_at) — kiểm tra bằng API invites/{code}?with_counts=true
            inviteUrl: "https://discord.gg/Mf2EHfNbMW",
            icon: "https://cdn.discordapp.com/icons/1267096791443312734/cd3ef9fd53d343c4c735e0640a6fb9c9.png?size=256",
            // Server này chưa có banner riêng nên dùng ảnh local làm ảnh nền dự phòng
            banner: "profile_banner_cyber.jpg",
            cdnIcon: "https://cdn.discordapp.com/icons/1267096791443312734/cd3ef9fd53d343c4c735e0640a6fb9c9.png?size=256",
            cdnBanner: "profile_banner_cyber.jpg",
            members: "47 Members",
            online: "19 Online",
            tag: "COMMUNITY",
            featured: true
        }
    ],

    // 4. MẠNG XÃ HỘI / LIÊN HỆ (DIRECT CONNECTIONS):
    // Mục có field "copy" sẽ KHÔNG mở link — click là sao chép giá trị đó + toast thông báo.
    socials: [
        { name: "Facebook", icon: "fa-brands fa-facebook", url: "https://www.facebook.com/nlwos" },
        { name: "Email", icon: "fa-solid fa-envelope", url: "", copy: "lucifermeta0210@gmail.com" },
        { name: "TikTok", icon: "fa-brands fa-tiktok", url: "https://www.tiktok.com/@nlwo2" },
        { name: "Spotify", icon: "fa-brands fa-spotify", url: "https://open.spotify.com/user/31qttkds2lxweu7s5qxqrms2ab2i?si=d5a2f7b40b2e412f" }
    ],

    // 4.1 MÀN "SETLOVE" (trượt từ phải sang):
    //     tên tạm + ngày tạm — nhớ sửa lại cho đúng nhé!
    setlove: {
        myName: "Nguyễn Lương",
        partnerName: "Bé Yêu",
        // Ngày bắt đầu yêu — 115 ngày tính đến 19/09/2026
        startDate: "2026-05-27"
    },

    // 5. NHẠC NỀN & PLAYLIST (AUDIO PLAYLIST):
    music: {
        autoplayOnEnter: true,
        volume: 0.4,
        playlist: [
            {
                title: "Mưa Đợi Chờ",
                artist: "Nguyễn Lương",
                url: "bai1.mp3"
            }
        ],
        // Default / Initial Track Fallback
        title: "Mưa Đợi Chờ",
        artist: "Nguyễn Lương",
        url: "bai1.mp3"
    },

    // 6. HIỆU ỨNG:
    effects: {
        enableTilt: true,
        enableSpotlight: true,
        enableCustomCursor: true,
        enableParticles: true,
        enableShootingStars: true
    },

    // 7. SỞ THÍCH & PHONG CÁCH SỐNG (CORE - 6 PILLARS):
    techStack: [
        { name: "Gaming", domain: "PC • Mobile • Co-op", icon: "fa-solid fa-gamepad" },
        { name: "Nghe nhạc", domain: "Lofi • Chill • V-Pop", icon: "fa-solid fa-headphones" },
        { name: "Cà phê", domain: "Sáng • Sữa đá • Góc chill", icon: "fa-solid fa-mug-hot" },
        { name: "Du lịch", domain: "Biển • Núi • Khám phá", icon: "fa-solid fa-plane" },
        { name: "Chụp ảnh", domain: "Khoảnh khắc • Đời thường", icon: "fa-solid fa-camera" },
        { name: "Xem phim", domain: "Anime • Phim lẻ • Series", icon: "fa-solid fa-film" }
    ]
};



