<template>
  <div>
    <TextFeedbackSection />
    <FeedbackGallery />
  </div>
</template>

<script setup lang="ts">
import { BUSINESS } from '~/config/business.config'
import { localeUrl } from '~/utils/route'

const { t, locale } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl as string

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: t('meta.post.title'),
  description: t('meta.post.description'),
  url: localeUrl(baseUrl, locale.value, '/post'),
  isPartOf: { '@type': 'WebSite', name: BUSINESS.name, url: baseUrl },
  about: {
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    url: baseUrl,
    aggregateRating: { '@type': 'AggregateRating', ...BUSINESS.aggregateRating },
  },
}))

usePageSeo('post', { jsonLd })
</script>
