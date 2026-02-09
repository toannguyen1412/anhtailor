# Hướng dẫn xử lý lập chỉ mục (Google Search Console)

## Đã xử lý trong code

### 1. Trang có lệnh chuyển hướng (2 trang)
- **Nguyên nhân:** Với `strategy: "prefix"`, URL gốc (`/`, `/contact`) không tồn tại và bị chuyển hướng sang `/en` hoặc `/vi`.
- **Đã sửa:** Chuyển sang `strategy: "prefix_except_default"` trong `nuxt.config.ts`. Locale mặc định (en) không dùng prefix: `https://anhtailor.vn/` và `https://anhtailor.vn/contact` trả 200, không redirect.
- **Kết quả:** Sau khi deploy, 2 mục "Page with redirect" sẽ giảm (Google cần thời gian thu thập lại).

### 2. Trang thay thế có thẻ chính tắc thích hợp (5 trang)
- **Giải thích:** Đây là hành vi đúng. Google thấy các bản ngôn ngữ (alternate) và không lập chỉ mục trùng vì mỗi trang có canonical/hreflang đúng.
- **Hành động:** Không cần sửa. Canonical và hreflang đã được `usePageSeo` thiết lập đúng.

### 3. Đã phát hiện – hiện chưa được lập chỉ mục (19 trang) & Đã thu thập – hiện chưa được lập chỉ mục (1 trang)
- **Nguyên nhân:** Google thu thập được URL nhưng tạm thời chưa đưa vào chỉ mục (do ưu tiên, nội dung, hoặc thời gian).
- **Hành động đề xuất:**
  1. **Request indexing:** Trong GSC, mở từng URL quan trọng (trang chủ, contact, service) → chọn "Yêu cầu lập chỉ mục" (Request indexing).
  2. **Kiểm tra nội dung:** Đảm bảo mỗi trang có title/description riêng, nội dung đủ (đã có qua `usePageSeo` và locale).
  3. **Internal links:** Các trang đã có nav và footer; có thể thêm 1–2 link nội bộ trong nội dung chính nếu cần.
  4. **Sitemap:** Đã có `https://anhtailor.vn/sitemap.xml`, đảm bảo đã gửi trong GSC (Sitemaps).
  5. **Chờ:** Một số URL sẽ được lập chỉ mục sau vài ngày/tuần khi Google quét lại.

## Checklist sau khi deploy

- [ ] Deploy bản có `prefix_except_default` và `localeUrl` (en không prefix).
- [ ] Trong GSC: Sitemaps → kiểm tra sitemap không báo lỗi.
- [ ] Trong GSC: URL Inspection → thử "Request indexing" cho vài URL quan trọng.
- [ ] Sau 1–2 tuần: Kiểm tra lại báo cáo "Lý do trang không được lập chỉ mục".
