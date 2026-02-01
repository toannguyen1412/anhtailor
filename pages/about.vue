<template>
  <div>
    <NuxtLayout>
      <div class="page-about">
        <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>
        <section class="about-content">
          <h1 class="about-title">{{ t('storyTitle') }}</h1>
          <div class="about-story">
            <p v-for="(_, key) in storyKeys" :key="key">{{ t(`story.${key}`) }}</p>
          </div>
        </section>
        <AppFooter />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl as string

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: t('meta.about.title'),
  description: t('meta.about.description'),
  url: `${baseUrl}/${locale.value}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Anh Tailor',
    description: t('storyTitle') + ' – ' + t('story.paragraph1'),
    url: baseUrl,
    image: `${baseUrl}/images/logo-anh-tailor.jpg`,
    sameAs: ['https://www.facebook.com/anhtailorvn/'],
    foundingDate: '1996',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '357/1 Nguyen Dinh Chieu',
      addressLocality: 'Ham Tien',
      addressRegion: 'Mui Ne',
      addressCountry: 'VN',
    },
  },
}))

usePageSeo('about', { jsonLd })

const storyKeys = ['paragraph1', 'paragraph2', 'paragraph3', 'paragraph4']
</script>

<style scoped>
.page-about {
  padding: 2rem 1.5rem;
}
.about-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #3c2414;
}
.about-story p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #333;
}
</style>
