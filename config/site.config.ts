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

/** Danh sách locale – đồng bộ với thư mục locales/*.json */
export const LOCALES: LocaleItem[] = [
  { code: 'vi', language: 'vi-VN', name: 'Tiếng Việt', file: 'vi.json' },
  { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
  { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
  { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
  { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
]

/** Locale mặc định (prefix_except_default: en không có prefix trong URL) */
export const DEFAULT_LOCALE: LocaleCode = 'en'

/** Mảng mã locale – dùng cho validation (plugin, LanguageSwitcher) */
export const LOCALE_CODES: LocaleCode[] = LOCALES.map((l) => l.code)

/** Page keys – mỗi trang có meta trong locales: meta.{pageKey}.title, meta.{pageKey}.description */
export type PageKey = 'home' | 'about'

/** Danh sách page keys – dùng cho prerender và SEO */
export const PAGE_KEYS: PageKey[] = ['home', 'about']

/** Cấu hình nav: route path (không prefix locale) và key dịch cho label */
export interface NavItem {
  path: string
  i18nKey: string
  pageKey: PageKey
}

export const NAV_ITEMS: NavItem[] = [
  { path: '/', i18nKey: 'nav.home', pageKey: 'home' },
  { path: '/about', i18nKey: 'nav.about', pageKey: 'about' },
]
