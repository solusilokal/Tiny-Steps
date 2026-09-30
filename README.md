# Tiny Steps - Mini Website Perlengkapan Bayi & Anak

Website mobile-first untuk katalog dan profil toko perlengkapan bayi dan anak "Tiny Steps" menggunakan React, Tailwind CSS, dan Lucide Icons.

## 🚀 Cara Melihat Preview

Server preview saat ini **sudah aktif** dan dapat langsung dibuka di browser:
👉 **[http://localhost:3000](http://localhost:3000)**

---

### Cara Menjalankan Ulang di Lain Waktu

Ada 2 cara mudah:

#### Cara 1: Menggunakan File Batch (Paling Praktis)
Cukup **klik dua kali (double-click)** file:
`jalankan-preview.bat`

Browser akan otomatis terbuka di `http://localhost:3000`.

#### Cara 2: Melalui Terminal / Command Prompt
Buka terminal di folder ini, lalu ketik:
```bash
npm run dev
```
*(Catatan di Windows PowerShell: jika muncul peringatan execution policy, jalankan `npm.cmd run dev`)*

---

## 🛠 Perintah Lainnya

- **Build untuk Production:**
  ```bash
  npm run build
  ```
  File hasil build siap deploy akan tersimpan di folder `dist/`.

- **Preview Hasil Build:**
  ```bash
  npm run preview
  ```

---

## 📁 Struktur Folder

```text
├── src/
│   ├── App.tsx          # Komponen utama halaman Tiny Steps
│   ├── main.tsx         # Entry point React
│   └── index.css        # Konfigurasi Tailwind & Font Quicksand
├── index.html           # HTML template
├── jalankan-preview.bat # Script jalan cepat
├── package.json         # Konfigurasi dependensi
├── tailwind.config.js   # Konfigurasi styling Tailwind CSS
└── vite.config.ts       # Konfigurasi bundler Vite
```
