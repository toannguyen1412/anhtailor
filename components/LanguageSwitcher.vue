<template>
  <div class="language-switcher">
    <NuxtLink
      v-for="lang in availableLocales"
      :key="lang.code"
      :to="switchLocalePath(lang.code)"
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
import { LOCALES } from '~/config/site.config'

const { locale } = useI18n()
const availableLocales = computed(() =>
  LOCALES.map((l) => ({ code: l.code, name: l.name }))
)

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

const switchLocalePath = useSwitchLocalePath()
</script>
