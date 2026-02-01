<template>
  <div>
    <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>

    <LanguageSwitcher />

    <HeroProfile />

    <ServicesSection />

    <FeaturesSection />

    <StorySection />

    <ContactLinks @show-qr="showWhatsAppQR = true" />

    <MapSection />

    <NoticeSection />

    <FacebookWidget />

    <TextFeedbackSection />

    <FeedbackGallery />

    <FaqSection />

    <WhatsAppQRModal v-model="showWhatsAppQR" />

    <AppFooter />

    <BackToTop />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const showWhatsAppQR = ref(false)
</script>

<style scoped>
/* Component styles are in global CSS */
</style>
