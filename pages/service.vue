<template>
  <div>
    <ServicesSection />
  </div>
</template>

<script setup lang="ts">
import { BUSINESS } from '~/config/business.config'
import { localeUrl } from '~/utils/route'

const { t, locale } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl as string

const provider = { '@type': 'LocalBusiness' as const, name: BUSINESS.name, url: baseUrl }

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: t('meta.service.title'),
  description: t('meta.service.description'),
  url: localeUrl(baseUrl, locale.value, '/service'),
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: t('services.suits.name'), description: t('services.suits.detailDescription'), provider } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: t('services.shirts.name'), description: t('services.shirts.detailDescription'), provider } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: t('services.waistcoat.name'), description: t('services.waistcoat.detailDescription'), provider } },
  ],
}))

usePageSeo('service', { jsonLd })
</script>
