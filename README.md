# 🤖 RH BOT - Otomatisasi WhatsApp Cerdas

![RH BOT Banner](https://via.placeholder.com/1200x400/1A2A6C/00D4FF?text=RH+BOT+%7C+Otomatisasi+WhatsApp+Cerdas)

## 📋 Tentang Project

**RH BOT** adalah platform otomatisasi WhatsApp yang memungkinkan bisnis mengirim pesan massal, auto-reply, dan mengelola komunikasi pelanggan secara efisien. Dibangun dengan **Nuxt.js 4** dan **Prisma ORM**.

### ✨ Fitur Utama
- ✅ **Broadcast Massal** - Kirim pesan ke ribuan kontak sekaligus
- ✅ **Auto-Reply Cerdas** - Balas pesan otomatis dengan kata kunci
- ✅ **Dashboard Analitik** - Pantau performa kampanye real-time
- ✅ **Penjadwalan Pesan** - Kirim pesan di waktu yang tepat
- ✅ **Manajemen Kontak** - Kelompokkan kontak berdasarkan segmen
- ✅ **Integrasi API** - Hubungkan dengan sistem Anda

---

## 🚀 Teknologi

| Stack | Keterangan |
|-------|------------|
| **Frontend** | Nuxt.js 4, Vue.js 3, Tailwind CSS |
| **Backend** | Nitro (Nuxt Server), H3 |
| **Database** | SQLite (Development), PostgreSQL (Production) |
| **ORM** | Prisma 6 |
| **Auth** | JWT (hono/jwt) |
| **WhatsApp** | whatsapp-web.js |
| **Deploy** | Vercel / Netlify / Cloudflare Pages |

---

## 📁 Struktur Folder

```
rhbot-website/
├── assets/
│   └── css/
│       └── main.css          # Tailwind CSS
├── components/
│   ├── common/               # Komponen reusable
│   ├── layout/               # Header, Footer
│   └── sections/             # Hero, Features, Pricing, dll
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue             # Beranda
│   ├── features.vue
│   ├── pricing.vue
│   ├── blog/
│   ├── about.vue
│   └── contact.vue
├── server/
│   ├── api/                  # API Endpoints
│   │   ├── auth/             # Login, Register
│   │   ├── messages/         # Send, Broadcast
│   │   ├── user/             # Profile
│   │   └── whatsapp/         # Connect, Status, Disconnect
│   ├── middleware/           # Auth Middleware
│   ├── services/             # WhatsApp Service
│   └── utils/                # Database, Auth helpers
├── prisma/
│   ├── schema.prisma         # Database Schema
│   └── migrations/           # Migrations
├── public/                   # Static files
├── .env                      # Environment variables
├── nuxt.config.ts            # Nuxt config
├── tailwind.config.js        # Tailwind config
├── prisma.config.ts          # Prisma config
└── package.json
```

---

## 🛠️ Instalasi & Setup

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/rhbot-website.git
cd rhbot-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Buat file `.env` di root project:
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-super-secret-key-min-32-characters"
```

### 4. Setup Database
```bash
# Generate Prisma Client
npx prisma generate

# Migrasi database
npx prisma migrate dev --name init

# (Opsional) Buka Prisma Studio
npx prisma studio
```

### 5. Jalankan Development Server
```bash
npm run dev
```

Buka `http://localhost:3000`

---

## 🔧 API Endpoints

### **Auth**
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/auth/register` | Register user baru |
| POST | `/api/auth/login` | Login user |

### **WhatsApp**
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/whatsapp/connect` | Konek WhatsApp (QR Code) |
| POST | `/api/whatsapp/disconnect` | Disconnect WhatsApp |
| GET | `/api/whatsapp/status` | Status koneksi |

### **Messages**
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/messages/send` | Kirim pesan ke satu nomor |
| POST | `/api/messages/broadcast` | Broadcast ke banyak nomor |

### **User**
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/user/profile` | Get profile user |

---

## 🧪 Testing API

### 1. Register
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@email.com","name":"Test User","password":"123456"}'
```

### 2. Login (Dapat Token)
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@email.com","password":"123456"}'
```

### 3. Get Profile (Pakai Token)
```bash
curl http://localhost:3000/api/user/profile \
  -H "Authorization: Bearer <TOKEN>"
```

---

## 🚀 Deploy

### Build Production
```bash
npm run build
```

### Deploy ke Vercel
```bash
npx vercel --prod
```

### Deploy ke Netlify
1. Build: `npm run generate`
2. Upload folder `.output/public` ke Netlify

### Deploy ke Cloudflare Pages
```bash
npm run build
# Upload folder .output/public
```

---

## 🤝 Kontribusi

1. Fork repository
2. Buat branch fitur (`git checkout -b fitur-keren`)
3. Commit perubahan (`git commit -m "Tambahkan fitur"`)
4. Push ke branch (`git push origin fitur-keren`)
5. Buat Pull Request

---

## 📝 Lisensi

MIT © [RH BOT](https://erhabot.com)

---

## 👨‍💻 Developer

**RH BOT Team**  
Website: [erhabot.com](https://erhabot.com)  
Email: admin@erhabot.com

---

## ⭐️ Dukung Kami

Jika project ini bermanfaat, beri ⭐️ di GitHub!