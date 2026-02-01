<template>
  <section class="text-feedback-section">
    <header class="section-header">
      <span class="section-icon" aria-hidden="true">
        <i class="fa-solid fa-quote-left" />
      </span>
      <h2 class="section-title">{{ t('customerReviews') }}</h2>
      <p class="section-subtitle">{{ t('customerReviewsSubtitle') }}</p>
    </header>

    <div class="text-feedback-list">
      <article
        v-for="(feedback, index) in feedbacksWithDates"
        :key="index"
        class="feedback-card"
        :style="{ '--delay': `${index % 5 * 0.05}s` }">
        <div class="card-quote">
          <i class="fa-solid fa-quote-right" aria-hidden="true" />
        </div>
        <div class="card-body">
          <div class="card-meta">
            <div class="avatar" :aria-label="feedback.name">
              {{ feedback.name.charAt(0) }}
            </div>
            <div class="meta-info">
              <span class="feedback-name">{{ feedback.name }}</span>
              <div class="feedback-rating" role="img" :aria-label="`${feedback.rating} sao`">
                <i
                  v-for="n in 5"
                  :key="n"
                  :class="n <= feedback.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'"
                  class="star-icon"
                />
              </div>
            </div>
          </div>
          <p class="feedback-content">{{ feedback.content }}</p>
          <footer class="card-footer">
            <span class="feedback-country">
              <i class="fa-solid fa-location-dot" aria-hidden="true" />
              {{ feedback.country }}
            </span>
            <span class="feedback-date">
              <i class="fa-regular fa-clock" aria-hidden="true" />
              {{ feedback.date }}
            </span>
          </footer>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { feedbacksWithDates } = useFeedbacks()
</script>

<style scoped>
.text-feedback-section {
  margin-bottom: 2rem;
  padding: 0 0.75rem;
}

.section-header {
  text-align: center;
  margin-bottom: 1.25rem;
}

.section-icon {
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

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #3c2414;
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 0.8rem;
  color: #888;
  margin: 0;
  font-weight: 500;
}

.text-feedback-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 420px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;
  scrollbar-width: thin;
  scrollbar-color: #d4a574 #f0ebe3;
}

.text-feedback-list::-webkit-scrollbar {
  width: 6px;
}

.text-feedback-list::-webkit-scrollbar-track {
  background: #f0ebe3;
  border-radius: 3px;
}

.text-feedback-list::-webkit-scrollbar-thumb {
  background: #d4a574;
  border-radius: 3px;
}

.feedback-card {
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

.feedback-card:hover {
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

.feedback-name {
  font-weight: 700;
  color: #3c2414;
  font-size: 0.95rem;
  display: block;
  margin-bottom: 0.15rem;
}

.feedback-rating {
  display: flex;
  gap: 2px;
  align-items: center;
}

.star-icon {
  color: #e6a800;
  font-size: 0.75rem;
}

.feedback-content {
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
}

.feedback-country,
.feedback-date {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.feedback-country i,
.feedback-date i {
  color: #b8956a;
  font-size: 0.7rem;
}

@media (max-width: 480px) {
  .text-feedback-section {
    padding: 0 0.5rem;
  }

  .text-feedback-list {
    max-height: 320px;
  }

  .feedback-card {
    padding: 0.875rem 1rem;
  }

  .feedback-content {
    font-size: 0.8125rem;
  }

  .card-footer {
    font-size: 0.7rem;
  }
}
</style>
