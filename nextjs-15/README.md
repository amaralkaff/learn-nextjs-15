# Aplikasi Next.js Learning

Aplikasi ini adalah proyek pembelajaran Next.js yang mendemonstrasikan fitur-fitur dasar dan routing di Next.js 15.

## Struktur Proyek

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── dashboard/
│   │   ├── jokes/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   ├── error.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── DashboardSidebar.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
public/
├── globe.svg
├── window.svg
├── vercel.svg
└── file.svg
```

## Fitur Utama

- 🚀 **Next.js 15 dengan App Router**

  - Implementasi routing modern
  - Server dan Client Components
  - Optimasi performa otomatis

- 💅 **UI/UX Modern**

  - Tailwind CSS untuk styling
  - Responsif untuk semua ukuran layar
  - Komponen yang dapat digunakan kembali

- 🔄 **Fitur Next.js**
  - Dynamic Routing (`/dashboard/jokes/[id]`)
  - Loading States
  - Error Handling
  - Nested Layouts

## Halaman dan Rute

1. **Beranda** (`/`)

   - Landing page sederhana
   - Link navigasi ke About page
   - Styling dengan Tailwind CSS

2. **About** (`/about`)

   - Halaman informasi tentang aplikasi

3. **Dashboard** (`/dashboard`)

   - Layout khusus dashboard
   - Sidebar navigasi
   - Area konten dinamis

4. **Jokes Section** (`/dashboard/jokes`)
   - Daftar jokes
   - Detail jokes dengan dynamic routing
   - Loading state dan error handling

## Cara Penggunaan

1. **Clone Repository**

```bash
git clone https://github.com/amaralkaff/learn-nextjs-15.git
cd learn-nextjs-15
```

2. **Install Dependencies**

```bash
npm install
# atau
yarn install
```

3. **Jalankan Development Server**

```bash
npm run dev
# atau
yarn dev
```

4. **Buka Browser**

- Kunjungi [http://localhost:3000](http://localhost:3000)

## Tech Stack

- ⚡️ **Next.js 15** - Framework React untuk produksi
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 📘 **TypeScript** - Superset JavaScript dengan type system
- 🔄 **React** - Library UI JavaScript

## Pengembangan

- Gunakan `npm run build` untuk membuat versi production
- Gunakan `npm run start` untuk menjalankan versi production
- Gunakan `npm run lint` untuk menjalankan linter

## Git Setup dan Push

1. **Inisialisasi Git**

```bash
git init
```

2. **Tambahkan File ke Staging**

```bash
git add .
```

3. **Buat Commit Pertama**

```bash
git commit -m "Initial commit"
```

4. **Hubungkan dengan Repository Remote**

```bash
git remote add origin https://github.com/amaralkaff/learn-nextjs-15.git
```

5. **Ganti Branch ke Main**

```bash
git branch -M main
```

6. **Push ke GitHub**

```bash
git push -u origin main
```

## Kontribusi

1. Fork repository
2. Buat branch fitur (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Menambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request
