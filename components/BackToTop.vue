<template>
  <button
    class="back-to-top"
    @click="scrollToTop"
    :aria-label="t('backToTop')"
    :class="{ visible: showBackToTop }">
    <i class="fa-solid fa-arrow-up" />
  </button>
</template>

<script setup lang="ts">
const { t } = useI18n()

const showBackToTop = ref(false)

const handleScroll = () => {
  if (import.meta.client) {
    showBackToTop.value = window.scrollY > 300
  }
}

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
