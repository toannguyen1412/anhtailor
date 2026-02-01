<template>
  <section class="reviews-page-section">
    <header class="reviews-page-header">
      <span class="reviews-page-icon" aria-hidden="true">
        <i class="fa-solid fa-star" />
      </span>
      <h2 class="reviews-page-title">{{ t('customerReviews') }}</h2>
      <p class="reviews-page-subtitle">{{ t('customerReviewsSubtitle') }}</p>
    </header>

    <div class="reviews-list">
      <article
        v-for="(review, index) in reviews"
        :key="index"
        class="review-card"
        :style="{ '--delay': `${index % 6 * 0.05}s` }">
        <div class="card-quote">
          <i class="fa-solid fa-quote-right" aria-hidden="true" />
        </div>
        <div class="card-body">
          <div class="card-meta">
            <div class="avatar" :aria-label="review.name">
              {{ review.name.charAt(0) }}
            </div>
            <div class="meta-info">
              <span class="review-name">{{ review.name }}</span>
              <div class="review-rating" role="img" :aria-label="`${review.stars} ${t('stars')}`">
                <i
                  v-for="n in 5"
                  :key="n"
                  :class="n <= review.stars ? 'fa-solid fa-star' : 'fa-regular fa-star'"
                  class="star-icon"
                />
              </div>
            </div>
          </div>
          <p class="review-content">{{ review.content }}</p>
          <footer class="card-footer">
            <span v-if="review.country && review.countryCode" class="review-country" :title="review.country">
              <span class="review-flag" aria-hidden="true">{{ countryCodeToFlag(review.countryCode) }}</span>
              {{ review.country }}
            </span>
            <span class="review-date">
              <i class="fa-regular fa-calendar" aria-hidden="true" />
              {{ review.dateFormatted }}
            </span>
          </footer>
          <div v-if="review.images.length" class="review-images">
            <button
              v-for="(src, imgIndex) in review.images"
              :key="imgIndex"
              type="button"
              class="review-image-thumb"
              @click="openLightbox(index, imgIndex)"
              :aria-label="t('viewCustomerPhoto').replace('{index}', String(imgIndex + 1))">
              <img
                :src="src"
                :alt="`${review.name} - ${imgIndex + 1}`"
                loading="lazy"
                class="review-thumb-img"
                @error="handleImageError($event)">
            </button>
          </div>
        </div>
      </article>
    </div>

    <LightboxModal
      v-model="showLightbox"
      :images="currentLightboxImages"
      :initial-index="currentLightboxIndex" />
  </section>
</template>

<script setup lang="ts">
import type { Review } from '~/composables/useReviews'

const { t } = useI18n()
const { reviews, reviewImagesForLightbox, countryCodeToFlag } = useReviews()

const showLightbox = ref(false)
const currentLightboxIndex = ref(0)
const currentLightboxImages = ref<{ src: string; alt: string }[]>([])

function openLightbox(reviewIndex: number, imageIndex: number) {
  const review = reviews.value[reviewIndex] as Review & { dateFormatted: string }
  currentLightboxImages.value = reviewImagesForLightbox(review)
  currentLightboxIndex.value = imageIndex
  showLightbox.value = true
  if (import.meta.client) {
    document.body.style.overflow = 'hidden'
  }
}

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
  const parent = img.parentElement
  if (parent) {
    parent.innerHTML = `<div class="image-error-placeholder"><i class="fa-solid fa-image"></i><span>${t('imageNotLoaded')}</span></div>`
  }
}
</script>

<style scoped>
.reviews-page-section {
  margin-bottom: 2rem;
  padding: 0 0.75rem;
}

.reviews-page-header {
  text-align: center;
  margin-bottom: 1.25rem;
}

.reviews-page-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%);
  color: #fff;
  border-radius: 50%;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 12px rgba(212, 165, 116, 0.4);
}

.reviews-page-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #3c2414;
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.02em;
}

.reviews-page-subtitle {
  font-size: 0.8rem;
  color: #888;
  margin: 0;
  font-weight: 500;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.review-card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  border: 1px solid rgba(212, 165, 116, 0.25);
  box-shadow: 0 2px 12px rgba(60, 36, 20, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  position: relative;
  animation: cardIn 0.4s ease backwards;
  animation-delay: var(--delay, 0s);
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.review-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(60, 36, 20, 0.1);
  border-color: rgba(212, 165, 116, 0.45);
}

.card-quote {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  color: rgba(212, 165, 116, 0.35);
  font-size: 1.25rem;
  line-height: 1;
}

.card-body {
  position: relative;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #3c2414 0%, #5d4037 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.meta-info {
  flex: 1;
  min-width: 0;
}

.review-name {
  font-weight: 700;
  color: #3c2414;
  font-size: 0.95rem;
  display: block;
  margin-bottom: 0.15rem;
}

.review-rating {
  display: flex;
  gap: 2px;
  align-items: center;
}

.star-icon {
  color: #e6a800;
  font-size: 0.75rem;
}

.review-content {
  color: #555;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0 0 0.75rem 0;
  text-align: left;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 0.75rem;
}

.review-country,
.review-date {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

/* Emoji lá cờ Unicode (regional indicators) – ưu tiên font emoji để hiển thị đúng */
.review-flag {
  font-size: 1.15em;
  line-height: 1;
  display: inline-block;
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", "Twemoji", sans-serif;
}

.review-date i {
  color: #b8956a;
  font-size: 0.7rem;
}

.review-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 10px;
  margin-top: 0.5rem;
}

.review-image-thumb {
  position: relative;
  padding: 0;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  background: #f0ebe3;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.review-image-thumb:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(60, 36, 20, 0.15);
}

.review-image-thumb:focus-visible {
  outline: 2px solid #d4a574;
  outline-offset: 2px;
}

.review-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-error-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #999;
  font-size: 0.65rem;
  padding: 6px;
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 110px;
}

.image-error-placeholder i {
  font-size: 1rem;
  opacity: 0.6;
}

@media (max-width: 480px) {
  .reviews-page-section {
    padding: 0 0.5rem;
  }

  .review-card {
    padding: 0.875rem 1rem;
  }

  .review-content {
    font-size: 0.8125rem;
  }

  .card-footer {
    font-size: 0.7rem;
  }

  .review-images {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
}
</style>
