<template>
  <div class="feedback-section">
    <h3 class="feedback-title">{{ t('customerPhotos') }}</h3>
    <div class="feedback-gallery vertical-scroll">
      <div
        v-for="(image, index) in feedbackImagesWithTranslations"
        :key="index"
        class="feedback-item">
        <img
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          @click="openLightbox(index)"
          @error="handleFeedbackImageError($event, index)"
          :aria-label="t('viewCustomerPhoto').replace('{index}', (index + 1).toString())">
      </div>
    </div>
    <LightboxModal
      v-model="showLightbox"
      :images="feedbackImagesWithTranslations"
      :initial-index="currentImageIndex" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { feedbackImagesWithTranslations } = useFeedbacks()

const showLightbox = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  showLightbox.value = true
  if (import.meta.client) {
    document.body.style.overflow = 'hidden'
  }
}

const handleFeedbackImageError = (event: Event, _index: number) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
  const parent = img.parentElement
  if (parent) {
    parent.innerHTML = `<div class="image-error-placeholder"><i class="fa-solid fa-image"></i><span>${t('imageNotLoaded')}</span></div>`
  }
}
</script>
