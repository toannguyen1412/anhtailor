/**
 * Plugin đồng bộ locale giữa Pinia và i18n khi route thay đổi
 */
export default defineNuxtPlugin(() => {
  const localeStore = useLocaleStore()
  const { locale } = useI18n()
  const route = useRoute()

  // Đồng bộ locale từ route sang store khi init
  const updateStoreFromRoute = () => {
    const pathLocale = route.path.split('/')[1]
    const validLocales = ['vi', 'en', 'de', 'fr', 'es']
    if (pathLocale && validLocales.includes(pathLocale)) {
      localeStore.setLocale(pathLocale as any)
    } else {
      localeStore.setLocale('en')
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
