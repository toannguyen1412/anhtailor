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
  sameAs: ['https://www.facebook.com/anhtailorvn/'],
  /** Link Google Maps */
  googleMapsReviewUrl: 'https://g.page/r/Ca9pQceWoUdEEBE/review',
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
