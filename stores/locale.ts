import { defineStore } from 'pinia'

export type LocaleCode = 'vi' | 'en' | 'de' | 'fr' | 'es'

export interface LocaleInfo {
  code: LocaleCode
  name: string
}

const LOCALES: LocaleInfo[] = [
  { code: 'vi', name: 'Tiếng Việt' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' }
]

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locales: LOCALES,
    /** Locale đã chọn (đồng bộ với i18n qua nuxt) */
    currentLocale: 'en' as LocaleCode
  }),
  getters: {
    availableLocales: (state) => state.locales,
    currentLocaleName: (state) => 
      state.locales.find(l => l.code === state.currentLocale)?.name ?? 'English'
  },
  actions: {
    setLocale(code: LocaleCode) {
      this.currentLocale = code
    },
    getLocalePath(localeCode: string, basePath = '/') {
      if (localeCode === 'en') {
        return basePath === '/' ? '/' : basePath
      }
      return basePath === '/' ? `/${localeCode}` : `/${localeCode}${basePath}`
    }
  }
})
