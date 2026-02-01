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
        <BackToTop />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

usePageSeo('about')

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
