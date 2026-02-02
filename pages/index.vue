<template>
  <div>
    <StorySection />
    <FeaturesSection />
    <FacebookWidget />
    <FaqSection />
  </div>
</template>

<script setup lang="ts">
import { BUSINESS } from '~/config/business.config'

const { t } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl as string

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  image: `${baseUrl}/images/thumbnail.jpg`,
  description: t('servicesTitle') + ' - ' + t('tagline'),
  address: { '@type': 'PostalAddress', ...BUSINESS.address },
  geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
  telephone: BUSINESS.phoneE164,
  url: baseUrl,
  sameAs: [...BUSINESS.sameAs],
  priceRange: BUSINESS.priceRange,
  openingHours: BUSINESS.openingHours,
  aggregateRating: { '@type': 'AggregateRating', ...BUSINESS.aggregateRating },
  inLanguage: [...BUSINESS.inLanguage],
}))

usePageSeo('home', { jsonLd })
</script>

<style scoped>
/* Page-specific styles */
</style>
