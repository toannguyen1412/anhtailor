import { LOCALE_CODES, DEFAULT_LOCALE } from '~/config/site.config'

/**
 * Plugin đồng bộ locale giữa Pinia và i18n khi route thay đổi
 */
export default defineNuxtPlugin(() => {
  const localeStore = useLocaleStore()
  const { locale } = useI18n()
  const route = useRoute()

  const updateStoreFromRoute = () => {
    const pathLocale = route.path.split('/')[1]
    if (pathLocale && LOCALE_CODES.includes(pathLocale as any)) {
      localeStore.setLocale(pathLocale as any)
    } else {
      localeStore.setLocale(DEFAULT_LOCALE)
    }
  }

  updateStoreFromRoute()

  // Đồng bộ khi route thay đổi
  watch(
    () => route.path,
    updateStoreFromRoute
  )

  // Đồng bộ khi locale từ i18n thay đổi (ví dụ khi switch language)
  watch(locale, (newLocale) => {
    localeStore.setLocale(newLocale as any)
  })
})
