<template>
  <div class="text-feedback-section">
    <h3 class="feedback-title">{{ t('customerReviews') }}</h3>
    <div class="text-feedback-list vertical-scroll">
      <div
        v-for="(feedback, index) in feedbacksWithDates"
        :key="index"
        class="text-feedback-item">
        <div class="feedback-header">
          <div class="feedback-name">{{ feedback.name }}</div>
          <div class="feedback-rating">
            <i
              v-for="n in 5"
              :key="n"
              :class="n <= feedback.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'"
              class="star-icon" />
          </div>
        </div>
        <div class="feedback-content">{{ feedback.content }}</div>
        <div class="feedback-footer">
          <span class="feedback-country">
            <i class="fa-solid fa-globe" /> {{ feedback.country }}
          </span>
          <span class="feedback-date">
            <i class="fa-solid fa-clock" /> {{ feedback.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { feedbacksWithDates } = useFeedbacks()
</script>
