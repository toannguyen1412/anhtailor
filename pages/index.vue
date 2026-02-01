<template>
  <div>
    <NuxtLayout>
  <div>
    <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>

    <StorySection />
    <FeaturesSection />

    <FacebookWidget />

    <FaqSection />

    <AppFooter />

  </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl as string

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Anh Tailor',
  image: `${baseUrl}/images/logo-anh-tailor.jpg`,
  description: t('servicesTitle') + ' - ' + t('tagline'),
  address: {
    '@type': 'PostalAddress',
    streetAddress: '357/1 Nguyen Dinh Chieu',
    addressLocality: 'Ham Tien',
    addressRegion: 'Mui Ne',
    postalCode: '800000',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '10.9381',
    longitude: '108.2778',
  },
  telephone: '+84345197864',
  url: baseUrl,
  sameAs: ['https://www.facebook.com/anhtailorvn/'],
  priceRange: '$40 - $380',
  openingHours: 'Mo-Su 08:00-20:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '30',
    bestRating: '5',
    worstRating: '1',
  },
  inLanguage: ['vi', 'en', 'de', 'fr', 'es'],
}))

usePageSeo('home', { jsonLd })
</script>

<style scoped>
/* Page-specific styles */
</style>
