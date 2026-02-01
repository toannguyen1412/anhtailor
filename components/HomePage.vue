<template>
  <div>
    <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>


    <FeaturesSection />

    <StorySection />

    <FacebookWidget />

    <FaqSection />

    <WhatsAppQRModal v-model="showWhatsAppQR" />

    <AppFooter />

  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const showWhatsAppQR = ref(false)
</script>

<style scoped>
/* Component styles are in global CSS */
</style>
