<template>
  <div class="story-section">
    <h2 class="story-title">{{ t('storyTitle') }}</h2>
    <div class="story-content">
      <div class="story-image-wrapper">
        <img
          src="/images/story.jpg"
          :alt="t('storyImageAlt')"
          class="story-image"
          @error="handleStoryImageError">
      </div>
      <div class="story-text">
        <p class="story-paragraph">{{ t('story.paragraph1') }}</p>
        <p class="story-paragraph">{{ t('story.paragraph2') }}</p>
        <p class="story-paragraph">{{ t('story.paragraph3') }}</p>
        <p class="story-paragraph">{{ t('story.paragraph4') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const handleStoryImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  const wrapper = img.closest('.story-image-wrapper')
  if (wrapper) {
    img.style.display = 'none'
    wrapper.innerHTML = `<div class="story-image-placeholder"><i class="fa-solid fa-image"></i><span>${t('imageNotLoaded')}</span></div>`
  }
}
</script>
