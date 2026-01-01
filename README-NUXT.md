# Anh Tailor Website - Nuxt.js SSR

Website đã được chuyển đổi sang **Nuxt.js SSR** với đa ngôn ngữ hoàn chỉnh.

## 🚀 Quick Start

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Convert translations (chạy một lần)

```bash
node scripts/create-locales.mjs
```

Hoặc nếu dùng ES modules:
```bash
node scripts/create-locales.mjs
```

### 3. Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại `http://localhost:3000`

## 📁 Cấu Trúc Project

```
├── app.vue                 # Root component
├── nuxt.config.ts         # Nuxt configuration với i18n
├── i18n.config.ts         # i18n config
├── pages/
│   └── index.vue          # Home page với SEO meta tags
├── layouts/
│   └── default.vue        # Default layout
├── components/            # Vue components
├── composables/           # Composables (useServices, etc.)
├── locales/              # Translation JSON files
│   ├── vi.json
│   ├── en.json
│   ├── de.json
│   ├── fr.json
│   └── es.json
├── assets/
│   └── css/
│       └── style.css     # CSS styles
└── public/
    └── images/           # Static images
```

## 🌍 Đa Ngôn Ngữ

Website hỗ trợ 5 ngôn ngữ:
- 🇻🇳 Tiếng Việt (`/vi`)
- 🇬🇧 English (`/` hoặc `/en`)
- 🇩🇪 Deutsch (`/de`)
- 🇫🇷 Français (`/fr`)
- 🇪🇸 Español (`/es`)

Nuxt tự động:
- ✅ Tạo routes cho từng ngôn ngữ
- ✅ Cập nhật meta tags theo ngôn ngữ
- ✅ SEO hoàn hảo với hreflang tags
- ✅ Server-side rendering cho mỗi ngôn ngữ

## 🔧 Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Generate static site (SSG)
npm run generate

# Preview production build
npm run preview
```

## 📦 Deploy

### Vercel (Recommended)

1. Push code lên GitHub
2. Import project vào Vercel
3. Vercel tự động detect Nuxt và deploy

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.output/public` (nếu SSG) hoặc `.output` (nếu SSR)

### Node.js Server

```bash
npm run build
node .output/server/index.mjs
```

## ✨ Tính Năng

- ✅ **SSR**: Server-side rendering cho SEO tốt nhất
- ✅ **i18n**: Đa ngôn ngữ tự động
- ✅ **SEO**: Meta tags, structured data, hreflang tự động
- ✅ **Performance**: Code splitting, lazy loading
- ✅ **TypeScript**: Type-safe development

## 📝 Cần Hoàn Thiện

1. ✅ Cấu trúc Nuxt cơ bản
2. ✅ i18n configuration
3. ✅ SEO meta tags
4. ⏳ Migrate components từ index.html
5. ⏳ Migrate CSS styles
6. ⏳ Convert translations.js → JSON files

Xem `MIGRATION-GUIDE.md` để biết chi tiết migration.

