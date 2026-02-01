<template>
  <div class="faq-section">
    <h3 class="faq-title">{{ t('faqTitle') }}</h3>
    <div class="faq-list">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item">
        <button
          class="faq-question"
          @click="toggleFaq(index)"
          :aria-expanded="faq.isOpen"
          :aria-controls="`faq-answer-${index}`">
          <span class="faq-icon" :class="{ open: faq.isOpen }">
            <i class="fa-solid fa-plus" />
          </span>
          <span class="faq-question-text">{{ faq.question }}</span>
        </button>
        <div
          class="faq-answer"
          :id="`faq-answer-${index}`"
          :class="{ open: faq.isOpen }"
          v-show="faq.isOpen">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { faqsWithTranslations } = useFAQs()

const openFaqIndex = ref<number | null>(null)

const faqs = computed(() => {
  return faqsWithTranslations.value.map((faq, index) => ({
    ...faq,
    isOpen: openFaqIndex.value === index
  }))
})

const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}
</script>
