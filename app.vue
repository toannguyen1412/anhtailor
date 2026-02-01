<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { LOCALE_CODES, DEFAULT_LOCALE } from '~/config/site.config'

const route = useRoute()
const htmlLang = computed(() => {
  const segment = route.path.split('/')[1]
  return segment && LOCALE_CODES.includes(segment) ? segment : DEFAULT_LOCALE
})

useHead({
  htmlAttrs: {
    lang: htmlLang
  }
})
</script>

