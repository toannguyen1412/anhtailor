<template>
  <div>
    <NuxtLayout>
      <HomePage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()

// SEO Meta tags
useHead({
  title: () => {
    const titles = {
      vi: 'Anh Tailor - May Veston Chuyên Nghiệp & Áo Vest Đo May | Ham Tien Mui Ne',
      en: 'Anh Tailor - Custom Suit Veston Ham Tien Mui Ne | Quality Tailor',
      de: 'Anh Tailor - Professionelles Maßschneidern & Maßanzüge | Ham Tien Mui Ne',
      fr: 'Anh Tailor - Couture Professionnelle & Costumes Sur Mesure | Ham Tien Mui Ne',
      es: 'Anh Tailor - Sastrería Profesional & Trajes a Medida | Ham Tien Mui Ne'
    }
    return titles[locale.value] || titles.en
  },
  meta: [
    {
      name: 'description',
      content: () => {
        const descriptions = {
          vi: 'Anh Tailor - Tiệm may chuyên nghiệp tại Hàm Tiến, Mũi Né. Dịch vụ may đo veston, áo vest và áo sơ mi chất lượng cao với giá cả hợp lý.',
          en: 'Anh Tailor - Professional tailor shop in Ham Tien, Mui Ne. High-quality custom suit, vest, and shirt tailoring services at reasonable prices.',
          de: 'Anh Tailor - Professionelles Maßschneidergeschäft in Ham Tien, Mui Ne. Hochwertige Maßanzüge, Westen und Hemden zu vernünftigen Preisen.',
          fr: 'Anh Tailor - Atelier de couture professionnel à Ham Tien, Mui Ne. Services de couture sur mesure de qualité supérieure à des prix raisonnables.',
          es: 'Anh Tailor - Sastrería profesional en Ham Tien, Mui Ne. Servicios de sastrería a medida de alta calidad a precios razonables.'
        }
        return descriptions[locale.value] || descriptions.en
      }
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `${config.public.baseUrl}${locale.value === 'en' ? '' : '/' + locale.value}`
    },
    ...['vi', 'en', 'de', 'fr', 'es'].map(lang => ({
      rel: 'alternate',
      hreflang: lang,
      href: `${config.public.baseUrl}${lang === 'en' ? '' : '/' + lang}`
    })),
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${config.public.baseUrl}`
    }
  ]
})

// Structured Data
useSeoMeta({
  ogTitle: () => {
    const titles = {
      vi: 'Anh Tailor - May Veston Chuyên Nghiệp',
      en: 'Anh Tailor - Custom Suit Veston',
      de: 'Anh Tailor - Professionelles Maßschneidern',
      fr: 'Anh Tailor - Couture Professionnelle',
      es: 'Anh Tailor - Sastrería Profesional'
    }
    return titles[locale.value] || titles.en
  },
  ogDescription: () => t('servicesTitle') + ' - ' + t('tagline'),
  ogImage: `${config.public.baseUrl}/images/logo-anh-tailor.jpg`,
  ogUrl: `${config.public.baseUrl}${locale.value === 'en' ? '' : '/' + locale.value}`,
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

// Structured Data JSON-LD
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Anh Tailor',
        image: `${config.public.baseUrl}/images/logo-anh-tailor.jpg`,
        description: t('servicesTitle') + ' - ' + t('tagline'),
        address: {
          '@type': 'PostalAddress',
          streetAddress: '357/1 Nguyen Dinh Chieu',
          addressLocality: 'Ham Tien',
          addressRegion: 'Mui Ne',
          postalCode: '800000',
          addressCountry: 'VN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '10.9381',
          longitude: '108.2778'
        },
        telephone: '+84345197864',
        url: `${config.public.baseUrl}`,
        sameAs: ['https://www.facebook.com/anhtailorvn/'],
        priceRange: '$40 - $380',
        openingHours: 'Mo-Su 08:00-20:00',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '30',
          bestRating: '5',
          worstRating: '1'
        },
        inLanguage: ['vi', 'en', 'de', 'fr', 'es']
      })
    }
  ]
})
</script>

<style scoped>
/* Styles will be added here */
</style>