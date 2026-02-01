/**
 * Cấu hình tập trung cho site: đa ngôn ngữ và định nghĩa trang.
 * Single source of truth cho locales và page keys – dùng cho nuxt.config, store, plugin, prerender.
 */

/** Mã ngôn ngữ hỗ trợ */
export type LocaleCode = 'vi' | 'en' | 'de' | 'fr' | 'es'

export interface LocaleItem {
  code: LocaleCode
  language: string
  name: string
  file: string
}

/** Danh sách locale – đồng bộ với thư mục i18n/locales/*.json */
export const LOCALES: LocaleItem[] = [
  { code: 'vi', language: 'vi-VN', name: 'Tiếng Việt', file: 'vi.json' },
  { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
  { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
  { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
  { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
]

/** Locale mặc định và fallback khi redirect / theo ngôn ngữ trình duyệt */
export const DEFAULT_LOCALE: LocaleCode = 'en'

/** Mảng mã locale – dùng cho validation (plugin, LanguageSwitcher) */
export const LOCALE_CODES: LocaleCode[] = LOCALES.map((l) => l.code)

/** Page keys – mỗi trang có meta trong locales: meta.{pageKey}.title, meta.{pageKey}.description */
export type PageKey = 'home' | 'about' | 'contact' | 'service' | 'post'

/** Danh sách page keys – dùng cho prerender và SEO */
export const PAGE_KEYS: PageKey[] = ['home', 'about', 'contact', 'service', 'post']

/** Cấu hình nav: route path (không prefix locale) và key dịch cho label */
export interface NavItem {
  path: string
  i18nKey: string
  pageKey: PageKey
}

export const NAV_ITEMS: NavItem[] = [
  { path: '/', i18nKey: 'nav.home', pageKey: 'home' },
  { path: '/contact', i18nKey: 'nav.contact', pageKey: 'contact' },
  { path: '/service', i18nKey: 'nav.service', pageKey: 'service' },
  { path: '/post', i18nKey: 'nav.post', pageKey: 'post' },
]
