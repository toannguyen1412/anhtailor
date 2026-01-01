<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: useI18n().locale.value
  }
})
</script>

