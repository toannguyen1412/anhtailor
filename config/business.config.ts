/**
 * Thông tin doanh nghiệp tập trung – dùng cho JSON-LD, contact, map, SEO.
 * Single source of truth cho địa chỉ, SĐT, tọa độ, giờ mở cửa, mạng xã hội.
 */

export const BUSINESS = {
  name: 'Anh Tailor',
  /** Địa chỉ đường (dùng schema, map) */
  address: {
    streetAddress: '357/1 Nguyen Dinh Chieu',
    addressLocality: 'Ham Tien',
    addressRegion: 'Mui Ne',
    postalCode: '800000',
    addressCountry: 'VN',
  },
  /** Địa chỉ thứ 2 – nhà riêng nhận may đo */
  address2: {
    streetAddress: '238 Le Thi Hong Gam',
    addressLocality: 'Phu Tai',
    addressRegion: 'Phan Thiet, Binh Thuan',
    addressCountry: 'VN',
  },
  /** Link Google Maps cho địa chỉ 2 (tìm kiếm) */
  googleMapsSearchUrl2: 'https://www.google.com/maps/search/?api=1&query=238+Le+Thi+Hong+Gam+Phu+Tai+Phan+Thiet+Binh+Thuan',
  /** Số điện thoại hiển thị (tel: link) */
  phoneDisplay: '0345197864',
  /** Số điện thoại E.164 (WhatsApp, schema) */
  phoneE164: '+84345197864',
  /** Tọa độ (schema, map embed) */
  geo: {
    latitude: '10.9381',
    longitude: '108.2778',
  },
  openingHours: 'Mo-Su 08:00-20:00',
  priceRange: '$40 - $380',
  /** Năm thành lập (schema) */
  foundingDate: '1996',
  /** URL mạng xã hội (schema sameAs, link) */
  sameAs: ['https://www.facebook.com/anhtailorvn/', 'https://www.tripadvisor.com/Attraction_Review-g1009804-d34102605-Reviews-Anh_Tailor-Mui_Ne_Phan_Thiet_Binh_Thuan_Province.html'],
  /** Link Google Maps */
  googleMapsReviewUrl: 'https://g.page/r/Ca9pQceWoUdEEBE/review',
  /** Link TripAdvisor */
  tripadvisorReviewUrl: 'https://www.tripadvisor.com/Attraction_Review-g1009804-d34102605-Reviews-Anh_Tailor-Mui_Ne_Phan_Thiet_Binh_Thuan_Province.html',
  googleMapsPlaceUrl: 'https://g.co/kgs/G3Ya5nd',
  whatsappUrl: 'https://wa.me/84345197864',
  /** Schema rating mặc định */
  aggregateRating: {
    ratingValue: '5',
    reviewCount: '30',
    bestRating: '5',
    worstRating: '1',
  },
  inLanguage: ['vi', 'en', 'de', 'fr', 'es'],
} as const
