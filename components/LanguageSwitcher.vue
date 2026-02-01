<template>
  <div class="language-switcher">
    <NuxtLink
      v-for="lang in availableLocales"
      :key="lang.code"
      :to="getLocalePath(lang.code)"
      :class="{ active: locale === lang.code }"
      class="lang-btn"
      :aria-label="lang.name">
      <span
        class="lang-flag"
        :style="{ backgroundImage: `url(https://flagcdn.com/w20/${getFlagCode(lang.code)}.png)` }" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const availableLocales = computed(() => {
  if (!locales.value || locales.value.length === 0) {
    return [
      { code: 'vi', name: 'Tiếng Việt' },
      { code: 'en', name: 'English' },
      { code: 'de', name: 'Deutsch' },
      { code: 'fr', name: 'Français' },
      { code: 'es', name: 'Español' }
    ]
  }
  return locales.value
})

const getFlagCode = (code: string) => {
  const flagMap: Record<string, string> = {
    vi: 'vn',
    en: 'gb',
    de: 'de',
    fr: 'fr',
    es: 'es'
  }
  return flagMap[code] || code
}

import { LOCALE_CODES, DEFAULT_LOCALE } from '~/config/site.config'

function pathWithoutLocale(path: string): string {
  const parts = path.split('/').filter(Boolean)
  if (parts.length > 0 && LOCALE_CODES.includes(parts[0] as any)) parts.shift()
  return parts.length ? '/' + parts.join('/') : '/'
}

const getLocalePath = (code: string) => {
  const path = switchLocalePath(code)
  if (path) return path
  const basePath = pathWithoutLocale(route.path)
  if (code === DEFAULT_LOCALE) return basePath === '/' ? '/' : basePath
  return basePath === '/' ? `/${code}` : `/${code}${basePath}`
}
</script>
