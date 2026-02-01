<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const htmlLang = useHtmlLang()

useHead({
  htmlAttrs: {
    lang: htmlLang,
  },
})
</script>

