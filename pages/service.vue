<template>
  <div>
    <ServicesSection />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl as string

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: t('meta.service.title'),
  description: t('meta.service.description'),
  url: `${baseUrl}/${locale.value}/service`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: t('services.suits.name'),
        description: t('services.suits.detailDescription'),
        provider: { '@type': 'LocalBusiness', name: 'Anh Tailor', url: baseUrl },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: t('services.shirts.name'),
        description: t('services.shirts.detailDescription'),
        provider: { '@type': 'LocalBusiness', name: 'Anh Tailor', url: baseUrl },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: t('services.waistcoat.name'),
        description: t('services.waistcoat.detailDescription'),
        provider: { '@type': 'LocalBusiness', name: 'Anh Tailor', url: baseUrl },
      },
    },
  ],
}))

usePageSeo('service', { jsonLd })
</script>
