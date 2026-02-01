<template>
  <NuxtLayout>
    <div>
      <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>

      <TextFeedbackSection />

      <FeedbackGallery />

      <AppFooter />

      <BackToTop />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n()

usePageSeo('post')
</script>
