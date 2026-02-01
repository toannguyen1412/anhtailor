<template>
  <div class="notice-section">
    <div class="notice-item">
      <i class="fa-solid fa-comment-dots notice-icon" />
      <p class="notice-text">{{ t('notice.facebookConsultation') }}</p>
    </div>
    <div class="notice-item">
      <i class="fa-solid fa-ruler-combined notice-icon" />
      <p class="notice-text">{{ t('notice.remoteOrdering') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
