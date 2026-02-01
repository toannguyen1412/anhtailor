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

const getLocalePath = (code: string) => {
  const path = switchLocalePath(code)
  if (path) return path
  const currentPath = route.path
  const pathWithoutLocale = currentPath.replace(/^\/(vi|en|de|fr|es)/, '') || '/'
  if (code === 'en') {
    return pathWithoutLocale === '/' ? '/' : pathWithoutLocale
  }
  return pathWithoutLocale === '/' ? `/${code}` : `/${code}${pathWithoutLocale}`
}
</script>
