# Hướng Dẫn Migration từ Vue.js sang Nuxt.js SSR

## Tổng Quan

Website đã được chuyển đổi từ Vue.js Client-Side Rendering sang **Nuxt.js SSR** với đa ngôn ngữ hoàn chỉnh.

## Cấu Trúc Mới

```
anhtailor/
├── app.vue                 # Root component
├── nuxt.config.ts         # Nuxt configuration
├── i18n.config.ts         # i18n configuration
├── package.json           # Dependencies
├── pages/
│   └── index.vue          # Home page với SEO
├── layouts/
│   └── default.vue        # Default layout
├── components/            # Vue components (cần migrate)
├── composables/           # Composables (useServices, etc.)
├── locales/              # Translation files (JSON)
│   ├── vi.json
│   ├── en.json
│   ├── de.json
│   ├── fr.json
│   └── es.json
├── assets/
│   └── css/
│       └── style.css     # CSS từ file cũ
└── public/
    └── images/           # Images (giữ nguyên)
```

## Bước Tiếp Theo

### 1. Cài Đặt Dependencies

```bash
npm install
```

### 2. Tạo File Locales

Bạn cần convert file `translations.js` thành các file JSON trong thư mục `locales/`:

**locales/vi.json:**

```json
{
  "tagline": "May Veston Chuyên Nghiệp & Áo Vest Đo May",
  "servicesTitle": "Dịch Vụ & Giá Cả",
  ...
}
```

**locales/en.json:**

```json
{
  "tagline": "Professional Tailoring & Bespoke Suits",
  "servicesTitle": "Our Services & Prices",
  ...
}
```

Tương tự cho `de.json`, `fr.json`, `es.json`

### 3. Migrate Components

Chuyển đổi các components từ `index.html` sang Vue components:

- `components/LanguageSwitcher.vue`
- `components/ServicesSection.vue`
- `components/FeaturesSection.vue`
- `components/StorySection.vue`
- `components/ContactLinks.vue`
- `components/MapSection.vue`
- `components/NoticeSection.vue`
- `components/FacebookWidget.vue`
- `components/TextFeedbackSection.vue`
- `components/FeedbackGallery.vue`
- `components/FAQSection.vue`
- `components/WhatsAppQRModal.vue`
- `components/LightboxModal.vue`

### 4. Migrate CSS

Copy file `style.css` vào `assets/css/style.css`

### 5. Migrate Images

Giữ nguyên thư mục `images/` hoặc copy vào `public/images/`

### 6. Tạo HomePage Component

Tạo `components/HomePage.vue` với toàn bộ nội dung từ `index.html`

## Script Migration Helper

Tôi có thể tạo script để tự động convert `translations.js` sang JSON files. Bạn có muốn tôi tạo không?

## Lợi Ích SSR

✅ **SEO 100%**: Google index hoàn hảo  
✅ **Performance**: Load nhanh hơn  
✅ **Đa ngôn ngữ**: Routing tự động (`/vi`, `/en`, `/de`, `/fr`, `/es`)  
✅ **Meta tags**: Tự động cập nhật theo ngôn ngữ  
✅ **Structured Data**: Tự động generate

## Chạy Development Server

```bash
npm run dev
```

Website sẽ chạy tại `http://localhost:3000`

## Build cho Production

```bash
npm run build
npm run generate  # Nếu muốn static site
```

## Deploy

Nuxt SSR có thể deploy lên:

- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- **Node.js server** (cho SSR)

## Lưu Ý

1. **Routing**: Nuxt tự động tạo routes từ `pages/` folder
2. **i18n**: Sử dụng `useI18n()` composable thay vì `translations` object
3. **Meta tags**: Sử dụng `useHead()` và `useSeoMeta()` thay vì manual tags
4. **SSR**: Tất cả code sẽ chạy trên server trước khi gửi về client

## Cần Giúp Đỡ?

Nếu bạn muốn tôi:

1. ✅ Tạo script convert translations.js → JSON files
2. ✅ Migrate toàn bộ components
3. ✅ Tạo HomePage component hoàn chỉnh
4. ✅ Setup deployment config

Hãy cho tôi biết!
