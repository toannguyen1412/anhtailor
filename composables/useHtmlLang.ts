import type { LocaleCode } from '~/config/site.config'
import { DEFAULT_LOCALE, LOCALE_CODES } from '~/config/site.config'

/**
 * Composable trả về lang cho thẻ <html> theo route hiện tại.
 * Dùng trong app.vue để đồng bộ htmlAttrs.lang với locale của trang.
 */
export function useHtmlLang() {
  const route = useRoute()
  return computed<LocaleCode>(() => {
    const segment = route.path.split('/')[1]
    return segment && LOCALE_CODES.includes(segment as LocaleCode)
      ? (segment as LocaleCode)
      : DEFAULT_LOCALE
  })
}
