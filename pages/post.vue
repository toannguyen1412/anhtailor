<template>
  <div>
    <CustomerReviewsPage />
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

const breadcrumbLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: t('nav.home'), item: localeUrl(baseUrl, locale.value, '/') },
    { '@type': 'ListItem', position: 2, name: t('nav.post'), item: localeUrl(baseUrl, locale.value, '/post') },
  ],
}))
const breadcrumbLdString = computed(() => JSON.stringify(breadcrumbLd.value))
useHead({
  script: [
    { type: 'application/ld+json', children: breadcrumbLdString },
  ],
})
</script>
