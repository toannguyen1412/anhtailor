import { LOCALE_CODES, DEFAULT_LOCALE } from '~/config/site.config'

/**
 * Plugin đồng bộ locale giữa Pinia và i18n khi route thay đổi.
 * Không dùng useI18n() trong plugin vì nó chỉ được gọi trong setup của component.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const localeStore = useLocaleStore()
  const route = useRoute()
  const i18n = nuxtApp.$i18n as { global: { locale: { value: string } } } | undefined

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

  // Đồng bộ khi locale từ i18n thay đổi (ví dụ khi switch language) — dùng $i18n thay vì useI18n()
  if (i18n?.global?.locale) {
    watch(
      () => i18n.global.locale.value,
      (newLocale) => {
        localeStore.setLocale(newLocale as any)
      }
    )
  }
})
