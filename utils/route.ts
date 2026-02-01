import type { LocaleCode } from '~/config/site.config'
import { LOCALE_CODES } from '~/config/site.config'

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
 * Build URL cho locale: strategy prefix → baseUrl/{code}{path}.
 * pathNoLocale: path không có locale (/, /about, ...).
 */
export function localeUrl(baseUrl: string, localeCode: string, pathNoLocale: string): string {
  const path = pathNoLocale === '/' ? '' : pathNoLocale
  return `${baseUrl}/${localeCode}${path}`
}
