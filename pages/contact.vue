<template>
  <div>
    <ContactLinks @show-qr="showWhatsAppQR = true" />
    <MapSection />
    <NoticeSection />
    <WhatsAppQRModal v-model="showWhatsAppQR" />
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
  '@type': 'ContactPage',
  name: t('meta.contact.title'),
  description: t('meta.contact.description'),
  url: localeUrl(baseUrl, locale.value, '/contact'),
  mainEntity: {
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    image: `${baseUrl}/images/logo-anh-tailor.jpg`,
    telephone: BUSINESS.phoneE164,
    url: baseUrl,
    sameAs: [...BUSINESS.sameAs],
    address: { '@type': 'PostalAddress', ...BUSINESS.address },
    geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
    openingHours: BUSINESS.openingHours,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phoneE164,
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: ['Vietnamese', 'English'],
    },
  },
}))

usePageSeo('contact', { jsonLd })

const showWhatsAppQR = ref(false)
</script>
