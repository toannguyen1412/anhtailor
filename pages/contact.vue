<template>
  <NuxtLayout>
    <div>
      <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>

      <ContactLinks @show-qr="showWhatsAppQR = true" />

      <MapSection />

      <NoticeSection />

      <AppFooter />

      <BackToTop />

      <WhatsAppQRModal v-model="showWhatsAppQR" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n()

usePageSeo('contact')

const showWhatsAppQR = ref(false)
</script>
