<template>
  <section class="faq-section" aria-labelledby="faq-heading">
    <header class="faq-header">
      <h2 id="faq-heading" class="faq-title">{{ t('faqTitle') }}</h2>
      <span class="faq-title-line" aria-hidden="true" />
    </header>
    <div class="faq-list">
      <article
        v-for="(faq, index) in faqsWithTranslations"
        :key="index"
        class="faq-card"
        :class="{ open: openFaqIndex === index }">
        <button
          type="button"
          class="faq-trigger"
          :aria-expanded="openFaqIndex === index"
          :aria-controls="`faq-answer-${index}`"
          :id="`faq-question-${index}`"
          @click.stop="toggleFaq(index)">
          <span class="faq-trigger-text">{{ faq.question }}</span>
          <span class="faq-chevron" aria-hidden="true">
            <i class="fa-solid fa-chevron-down" />
          </span>
        </button>
        <div
          class="faq-content"
          :id="`faq-answer-${index}`"
          :class="{ open: openFaqIndex === index }"
          :aria-labelledby="`faq-question-${index}`"
          :aria-hidden="openFaqIndex !== index"
          role="region">
          <div class="faq-content-inner">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { faqsWithTranslations } = useFAQs()

const openFaqIndex = ref<number | null>(null)

function toggleFaq(index: number) {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}
</script>
