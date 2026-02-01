export interface Review {
  name: string
  /** Tên quốc gia (hiển thị) */
  country: string
  /** Mã ISO 3166-1 alpha-2 để hiển thị cờ (emoji) */
  countryCode: string
  stars: number
  date: string
  content: string
  images: string[]
}

/** Chuyển mã ISO quốc gia (VD: DE, US) thành emoji lá cờ Unicode (regional indicators, VD: 🇩🇪 🇺🇸) */
export function countryCodeToFlag(code: string): string {
  if (!code || code.length !== 2) return ''
  return code
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0)))
    .join('')
}

const FEEDBACK_BASE = '/images/feedback'

/** Đánh giá thực từ Google Maps – ảnh theo thư mục từng khách: customer-01, customer-andilya, customer-clanhlan, customer-graham-davis, customer-lorenzo tasca, customer-malin gumabon */
const reviewsData: Review[] = [
  {
    name: 'John Burke',
    country: 'Ireland',
    countryCode: 'IE',
    stars: 5,
    date: '2025-01-28',
    content: 'Just picked up my 2-piece custom fitted suit for a wedding. Anh was not only professional but a pleasure to work with and he did a great job. Love it!',
    images: [
      `${FEEDBACK_BASE}/customer-01/image (1).jpg`,
      `${FEEDBACK_BASE}/customer-01/image (2).jpg`,
    ],
  },
  {
    name: 'andilya',
    country: 'Germany',
    countryCode: 'DE',
    stars: 5,
    date: '2025-01-11',
    content: 'Ich war sehr knapp in der Zeit, aber er hat innerhalb von drei Tagen einen tollen Anzug geschneidert. Hose und Sakko passen perfekt. Vielen Dank auch für die große Freundlichkeit.',
    images: [
      `${FEEDBACK_BASE}/customer-andilya/image (1).jpg`,
      `${FEEDBACK_BASE}/customer-andilya/image (2).jpg`,
      `${FEEDBACK_BASE}/customer-andilya/image (3).jpg`,
    ],
  },
  {
    name: 'Graham Davis',
    country: 'United Kingdom',
    countryCode: 'GB',
    stars: 5,
    date: '2025-01-01',
    content: "Needed a shirt in a hurry for New Year's Eve. This fabulous tailor made me one in a day and it's perfect! Thank you so much! Highly recommended :-)",
    images: [`${FEEDBACK_BASE}/customer-graham-davis/image.jpg`],
  },
  {
    name: 'Malin Gumabon',
    country: 'Philippines',
    countryCode: 'PH',
    stars: 5,
    date: '2024-12-28',
    content: "I brought in my dress after reading the positive reviews on Google. I needed it for New Year's, and he fixed it beautifully and very quickly - within just one day. The dress was a designer piece with complex craftsmanship, but they handled it perfectly, and I'm extremely happy with the result. They were also incredibly friendly, solution-oriented, and accommodating. Highly recommended!",
    images: [
      `${FEEDBACK_BASE}/customer-malin gumabon/image (1).jpg`,
      `${FEEDBACK_BASE}/customer-malin gumabon/image (2).jpg`,
      `${FEEDBACK_BASE}/customer-malin gumabon/image (3).jpg`,
    ],
  },
  {
    name: 'Brigitte Gödel',
    country: 'Germany',
    countryCode: 'DE',
    stars: 5,
    date: '2024-12-25',
    content: 'So einen tollen Schneider haben wir noch nie gesehen. Mein Mann hat sich einen Anzug mit Hemd schneidern lassen und wir mussten 5 Tage warten. Zu Beginn waren wir etwas skeptisch, da keine Anprobe vereinbart wurde. Aber als wir das gute Stück abgeholt haben waren wir total überrascht. Der Anzug sitzt perfekt, genauso wie das Hemd. Er sieht einfach toll aus und ist präzise und wunderschön genäht. Bei der Abholung bekamen wir sogar etwas zu Essen und zu Trinken angeboten und mein Mann hat dann noch eine Krawatte dazugeschenkt bekommen. Der Schneider war so voller Stolz dass der Anzug super aussah und hat meinen Mann bei der Verabschiedung sogar umarmt. Dieser Mensch versteht nicht nur sein Handwerk, sondern er ist auch ein Mensch mit viel Herz. Wir würden jederzeit wieder zurückkommen und etwas nähen lassen. Kann man nur empfehlen. Vielen Dank. Wir werden immer an den Herren denken wenn mein Mann den Anzug trägt.',
    images: [],
  },
  {
    name: 'Lachlan',
    country: 'Australia',
    countryCode: 'AU',
    stars: 5,
    date: '2024-09-01',
    content: "Thank you very much Anh for the great work taking apart and completely reshaping my daughters out fit so quickly. I know it was a very complex job but you and your wife did a fantastic job. My daughter is very happy with how it sits.",
    images: [`${FEEDBACK_BASE}/customer-clanhlan/image.png`],
  },
  {
    name: 'Matthias Skov Christensen',
    country: 'Denmark',
    countryCode: 'DK',
    stars: 5,
    date: '2024-05-01',
    content: 'Best experience, very competent tailor, very nice and smiling. We ordered 3 shirts and could pick them up just 3 days later. The shirts had a perfect fit. Would more than recommend this tailor for others!',
    images: [],
  },
  {
    name: 'Lorenzo Tasca',
    country: 'Italy',
    countryCode: 'IT',
    stars: 5,
    date: '2024-02-01',
    content: "I had the pleasure of using the services of ANH'S Tailor in Mui Ne, Vietnam, for custom-made suits for a wedding, and I would like to warmly congratulate the whole team for their magnificent work. Despite the distance, the creation process was very easy and the result exceeded all my expectations. The work done by ANH'S Tailor is of great quality and precision, reflecting real know-how and remarkable professionalism. The custom-made suits were not only impeccable in terms of finish and cut, but they also perfectly met my expectations and requirements. The customer service was also exceptional, attentive and responsive to all my requests. I highly recommend ANH'S Tailor to anyone looking for a quality tailor for custom-made clothing. Go there without hesitation, you will not be disappointed. A big thank you to the whole ANH'S Tailor team for their excellent work and professionalism.",
    images: [
      `${FEEDBACK_BASE}/customer-lorenzo tasca/image (1).jpg`,
      `${FEEDBACK_BASE}/customer-lorenzo tasca/image (2).jpg`,
    ],
  },
]

export function useReviews() {
  const { t, locale } = useI18n()

  /** Định dạng ngày theo locale (ví dụ: 28/01/2025 hoặc Jan 28, 2025) */
  const formatReviewDate = (isoDate: string) => {
    const d = new Date(isoDate)
    if (Number.isNaN(d.getTime())) return isoDate
    return new Intl.DateTimeFormat(locale.value, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(d)
  }

  /** Đánh giá kèm ngày đã format */
  const reviews = computed(() =>
    reviewsData.map((r) => ({
      ...r,
      dateFormatted: formatReviewDate(r.date),
    })),
  )

  /** Chuyển danh sách ảnh của một review sang format { src, alt } cho LightboxModal */
  const reviewImagesForLightbox = (review: Review) =>
    review.images.map((src, i) => ({
      src,
      alt: `${review.name} - ${t('viewCustomerPhoto').replace('{index}', String(i + 1))}`,
    }))

  return {
    reviews,
    formatReviewDate,
    reviewImagesForLightbox,
    countryCodeToFlag,
  }
}
