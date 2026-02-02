<template>
  <div>
    <ContactLinks @show-qr="showWhatsAppQR = true" />
    <NoticeSection />
    <MapSection />
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
    image: `${baseUrl}/images/thumbnail.jpg`,
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

const breadcrumbLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: t('nav.home'), item: localeUrl(baseUrl, locale.value, '/') },
    { '@type': 'ListItem', position: 2, name: t('nav.contact'), item: localeUrl(baseUrl, locale.value, '/contact') },
  ],
}))
const breadcrumbLdString = computed(() => JSON.stringify(breadcrumbLd.value))
useHead({
  script: [
    { type: 'application/ld+json', children: breadcrumbLdString },
  ],
})

const showWhatsAppQR = ref(false)
</script>
