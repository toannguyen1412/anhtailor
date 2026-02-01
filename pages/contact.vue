<template>
  <NuxtLayout>
    <div>
      <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>

      <ContactLinks @show-qr="showWhatsAppQR = true" />

      <MapSection />

      <NoticeSection />

      <AppFooter />

      <WhatsAppQRModal v-model="showWhatsAppQR" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl as string

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: t('meta.contact.title'),
  description: t('meta.contact.description'),
  url: `${baseUrl}/${locale.value}/contact`,
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Anh Tailor',
    image: `${baseUrl}/images/logo-anh-tailor.jpg`,
    telephone: '+84345197864',
    url: baseUrl,
    sameAs: ['https://www.facebook.com/anhtailorvn/'],
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
    openingHours: 'Mo-Su 08:00-20:00',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84345197864',
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: ['Vietnamese', 'English'],
    },
  },
}))

usePageSeo('contact', { jsonLd })

const showWhatsAppQR = ref(false)
</script>
