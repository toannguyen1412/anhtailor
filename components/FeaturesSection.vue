<template>
  <div class="features-section">
    <h2 class="features-title">{{ t('featuresTitle') }}</h2>
    <div class="features-grid">
      <div
        v-for="feature in featuresWithTranslations"
        :key="feature.key"
        class="feature-card">
        <div class="feature-icon">
          <i :class="feature.icon" />
        </div>
        <h3 class="feature-name">{{ feature.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { featuresWithTranslations } = useFeatures()
</script>
