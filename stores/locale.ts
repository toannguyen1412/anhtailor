import { defineStore } from 'pinia'
import type { LocaleCode } from '~/config/site.config'
import { LOCALES, DEFAULT_LOCALE } from '~/config/site.config'

export type { LocaleCode }

export interface LocaleInfo {
  code: LocaleCode
  name: string
}

const localeList: LocaleInfo[] = LOCALES.map((l) => ({ code: l.code, name: l.name }))

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locales: localeList,
    currentLocale: DEFAULT_LOCALE as LocaleCode,
  }),
  getters: {
    availableLocales: (state) => state.locales,
    currentLocaleName: (state) =>
      state.locales.find((l) => l.code === state.currentLocale)?.name ?? 'English',
  },
  actions: {
    setLocale(code: LocaleCode) {
      this.currentLocale = code
    },
    getLocalePath(localeCode: string, basePath = '/') {
      const path = basePath === '/' ? '' : basePath
      return `/${localeCode}${path}`
    },
  },
})
