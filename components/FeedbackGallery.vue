<template>
  <section class="feedback-gallery-section">
    <header class="feedback-gallery-header">
      <span class="feedback-gallery-icon" aria-hidden="true">
        <i class="fa-solid fa-images" />
      </span>
      <h3 class="feedback-gallery-title">{{ t('customerPhotos') }}</h3>
      <p class="feedback-gallery-subtitle">{{ t('customerPhotosSubtitle') }}</p>
    </header>

    <div class="feedback-gallery-grid">
      <button
        v-for="(image, index) in feedbackImagesWithTranslations"
        :key="index"
        type="button"
        class="feedback-gallery-card"
        @click="openLightbox(index)"
        :aria-label="t('viewCustomerPhoto').replace('{index}', (index + 1).toString())">
        <span class="feedback-gallery-card-inner">
          <img
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            class="feedback-gallery-img"
            @error="handleFeedbackImageError($event, index)">
          <span class="feedback-gallery-card-overlay">
            <i class="fa-solid fa-expand" />
            <span class="feedback-gallery-card-label">{{ t('view') }}</span>
          </span>
        </span>
      </button>
    </div>

    <LightboxModal
      v-model="showLightbox"
      :images="feedbackImagesWithTranslations"
      :initial-index="currentImageIndex" />
  </section>
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

<style scoped>
.feedback-gallery-section {
  margin-bottom: 28px;
  padding: 0 12px;
}

.feedback-gallery-header {
  text-align: center;
  margin-bottom: 20px;
}

.feedback-gallery-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(60, 36, 20, 0.08), rgba(212, 165, 116, 0.2));
  border-radius: 12px;
  margin-bottom: 10px;
  color: #5d4037;
}

.feedback-gallery-icon i {
  font-size: 1.2rem;
}

.feedback-gallery-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #3c2414;
  margin: 0 0 4px 0;
  letter-spacing: 0.02em;
}

.feedback-gallery-subtitle {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
  font-style: italic;
}

.feedback-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  justify-content: center;
  max-width: 100%;
}

@media (min-width: 500px) {
  .feedback-gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
}

.feedback-gallery-card {
  position: relative;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  min-height: 0;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feedback-gallery-card:focus-visible {
  outline: 2px solid #d4a574;
  outline-offset: 2px;
}

.feedback-gallery-card:hover {
  transform: translateY(-4px);
}

.feedback-gallery-card:hover .feedback-gallery-card-overlay {
  opacity: 1;
}

.feedback-gallery-card-inner {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(60, 36, 20, 0.12);
  background: #f0ebe3;
}

.feedback-gallery-card:hover .feedback-gallery-card-inner {
  box-shadow: 0 8px 24px rgba(60, 36, 20, 0.2);
}

.feedback-gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.feedback-gallery-card:hover .feedback-gallery-img {
  transform: scale(1.05);
}

.feedback-gallery-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(60, 36, 20, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.feedback-gallery-card-overlay i {
  font-size: 1.4rem;
}

.feedback-gallery-card-label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.image-error-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #999;
  font-size: 0.75rem;
  padding: 12px;
  text-align: center;
}

.image-error-placeholder i {
  font-size: 1.5rem;
  opacity: 0.6;
}

@media (max-width: 480px) {
  .feedback-gallery-section {
    padding: 0 8px;
    margin-bottom: 24px;
  }

  .feedback-gallery-grid {
    gap: 10px;
  }

  .feedback-gallery-title {
    font-size: 1.05rem;
  }

  .feedback-gallery-subtitle {
    font-size: 0.8rem;
  }
}
</style>
