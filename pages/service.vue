<template>
  <div>
    <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>

    <ServicesSection />

    <AppFooter />

    <BackToTop />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

usePageSeo('service')
</script>
