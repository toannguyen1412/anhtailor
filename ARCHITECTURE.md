# Kiến trúc dự án – Đa ngôn ngữ & Đa trang

Tài liệu mô tả cách dự án được tổ chức để dễ mở rộng đa ngôn ngữ và thêm nhiều trang.

> **Lưu ý build:** Nếu gặp lỗi `getActiveHead is not exported by unhead` khi build, đây là lỗi tương thích giữa @nuxtjs/i18n 8.x và unhead v2. Có thể thử thêm `unhead: { legacy: true }` trong `nuxt.config.ts` (đã có sẵn) hoặc nâng cấp @nuxtjs/i18n lên bản tương thích khi có.

## 1. Cấu hình tập trung (`config/site.config.ts`)

**Single source of truth** cho:

- **Locales**: danh sách ngôn ngữ (code, name, language, file), locale mặc định, mảng mã locale.
- **Pages**: page keys (`home`, `about`, …), dùng cho SEO và prerender.
- **Nav**: mục menu (path, i18nKey, pageKey) cho header.

Khi **thêm ngôn ngữ mới**:

1. Thêm file `locales/{code}.json` (copy từ `en.json`, dịch).
2. Trong `config/site.config.ts`: thêm vào type `LocaleCode`, thêm item vào mảng `LOCALES` (code, language, name, file).
3. Trong `nuxt.config.ts` không cần sửa (đã dùng `LOCALES` từ config).
4. Prerender routes được sinh tự động từ `LOCALE_CODES` × `NAV_ITEMS`.

Khi **thêm trang mới**:

1. Tạo file `pages/{tên}.vue` (vd: `pages/contact.vue`).
2. Trong `config/site.config.ts`:
   - Thêm page key vào type `PageKey` và mảng `PAGE_KEYS`.
   - Thêm mục vào `NAV_ITEMS`: `{ path: '/contact', i18nKey: 'nav.contact', pageKey: 'contact' }`.
3. Trong mỗi file `locales/*.json`: thêm `meta.contact.title`, `meta.contact.description` và `nav.contact`.
4. Trong trang: gọi `usePageSeo('contact')` (và tùy chọn `jsonLd` nếu cần).

## 2. SEO từng trang (`composables/usePageSeo.ts`)

- **usePageSeo(pageKey, options?)**: thiết lập title, description, canonical, hreflang, og/twitter từ locale (`meta.{pageKey}.title`, `meta.{pageKey}.description`).
- Canonical và hreflang dựa trên **route hiện tại**, nên đúng cho mọi trang (/, /about, /vi, /vi/about, …).
- **options.image**: URL ảnh OG (mặc định logo).
- **options.jsonLd**: object hoặc `computed()` cho JSON-LD (vd: LocalBusiness trên trang chủ).

Mỗi trang chỉ cần:

```ts
usePageSeo('home', { jsonLd: computed(() => ({ ... })) })
// hoặc
usePageSeo('about')
```

## 3. Cấu trúc locale (`locales/*.json`)

Chuẩn cho mỗi ngôn ngữ:

- **meta**: SEO theo từng trang – `meta.{pageKey}.title`, `meta.{pageKey}.description`.
- **nav**: nhãn menu – `nav.home`, `nav.about`, …
- Các key còn lại: nội dung UI (tagline, services, contact, story, faq, …).

Thêm trang = thêm `meta.{pageKey}` và `nav.{pageKey}` trong **tất cả** file locale.

## 4. Layout & điều hướng

- **Layout** (`layouts/default.vue`): container chung + `AppHeader` + `<slot />` (nội dung trang).
- **AppHeader**: nav (NuxtLink dùng `localePath(item.path)`) + LanguageSwitcher.
- **LanguageSwitcher**: dùng `LOCALE_CODES` và logic path từ config để chuyển ngôn ngữ giữ nguyên path (vd: /about → /vi/about).

## 5. Store & plugin

- **stores/locale.ts**: dùng `LOCALES`, `DEFAULT_LOCALE` từ config; không duplicate danh sách locale.
- **plugins/locale-sync.client.ts**: dùng `LOCALE_CODES`, `DEFAULT_LOCALE` để đồng bộ locale từ route ↔ i18n ↔ Pinia.

## 6. Prerender (Nitro)

Trong `nuxt.config.ts`, `getPrerenderRoutes()` sinh danh sách route từ:

- Mỗi **locale** × mỗi **path** trong `NAV_ITEMS` (prefix_except_default: en không có prefix).

Khi thêm locale hoặc thêm mục nav, prerender tự động bao phủ route mới.

## Tóm tắt quy trình mở rộng

| Mục đích           | Thao tác chính |
|--------------------|----------------|
| Thêm ngôn ngữ      | Thêm file locale + cập nhật `config/site.config.ts` (LOCALES, LocaleCode). |
| Thêm trang         | Thêm `pages/*.vue` + cập nhật config (PageKey, NAV_ITEMS) + thêm meta & nav trong mọi locale + gọi `usePageSeo(pageKey)`. |
| Đổi title/desc SEO | Sửa `meta.{pageKey}` trong từng file `locales/*.json`. |
