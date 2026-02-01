<template>
  <div>
    <TextFeedbackSection />
    <FeedbackGallery />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl as string

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: t('meta.post.title'),
  description: t('meta.post.description'),
  url: `${baseUrl}/${locale.value}/post`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Anh Tailor',
    url: baseUrl,
  },
  about: {
    '@type': 'LocalBusiness',
    name: 'Anh Tailor',
    url: baseUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '30',
      bestRating: '5',
      worstRating: '1',
    },
  },
}))

usePageSeo('post', { jsonLd })
</script>
