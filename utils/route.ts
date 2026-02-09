import type { LocaleCode } from '~/config/site.config'
import { DEFAULT_LOCALE, LOCALE_CODES } from '~/config/site.config'

/**
 * Path hiện tại không chứa prefix locale (vd: / → /, /vi/about → /about).
 */
export function pathWithoutLocale(path: string): string {
  const parts = path.split('/').filter(Boolean)
  if (parts.length > 0 && LOCALE_CODES.includes(parts[0] as LocaleCode)) {
    parts.shift()
  }
  return parts.length ? '/' + parts.join('/') : '/'
}

/**
 * Build URL cho locale.
 * prefix_except_default: locale mặc định (en) không có prefix → baseUrl + path;
 * các locale khác → baseUrl/{code}{path}.
 */
export function localeUrl(baseUrl: string, localeCode: string, pathNoLocale: string): string {
  const path = pathNoLocale === '/' ? '' : pathNoLocale
  if (localeCode === DEFAULT_LOCALE) {
    return `${baseUrl}${path}`
  }
  return `${baseUrl}/${localeCode}${path}`
}
