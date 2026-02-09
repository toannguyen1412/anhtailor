<template>
  <div>
    <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>

    <div class="bio-container" id="main-content">
      <AppHeader />
      <HeroProfile />

      <main class="layout-main">
        <slot />
        <AppFooter />
      </main>
    </div>

    <AppFloatButton />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.bio-container {
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  padding: 0 0 40px 0;
  width: 100%;
  max-width: 400px;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  text-align: center;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}
.layout-main {
  text-align: center;
  padding-bottom: calc(72px + env(safe-area-inset-bottom));
}
</style>

