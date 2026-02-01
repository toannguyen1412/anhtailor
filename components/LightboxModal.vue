<template>
  <div
    v-if="modelValue"
    class="lightbox-overlay"
    @click="close">
    <div class="lightbox-container" @click.stop>
      <button
        class="lightbox-close"
        @click="close"
        :aria-label="t('close')">
        <i class="fa-solid fa-times" />
      </button>
      <button
        class="lightbox-nav lightbox-prev"
        @click="prev"
        :aria-label="t('prevImage')">
        <i class="fa-solid fa-chevron-left" />
      </button>
      <button
        class="lightbox-nav lightbox-next"
        @click="next"
        :aria-label="t('nextImage')">
        <i class="fa-solid fa-chevron-right" />
      </button>
      <div class="lightbox-image-wrapper">
        <img
          v-if="currentImage"
          :src="currentImage.src"
          :alt="currentImage.alt"
          class="lightbox-image"
          @load="imageLoaded = true"
          @error="handleImageError">
        <div v-if="!imageLoaded && currentImage" class="lightbox-loading">
          <i class="fa-solid fa-spinner fa-spin" />
        </div>
      </div>
      <div class="lightbox-counter">
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  modelValue: boolean
  images: { src: string; alt: string }[]
  initialIndex?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const currentIndex = ref(props.initialIndex ?? 0)
const imageLoaded = ref(false)

const currentImage = computed(() => props.images[currentIndex.value])

watch(() => props.modelValue, (visible) => {
  if (visible) {
    currentIndex.value = props.initialIndex ?? 0
    imageLoaded.value = false
    if (import.meta.client) {
      document.body.style.overflow = 'hidden'
    }
  } else if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

watch(() => props.initialIndex, (idx) => {
  if (idx != null) currentIndex.value = idx
  imageLoaded.value = false
})

const close = () => {
  emit('update:modelValue', false)
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
  imageLoaded.value = false
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  imageLoaded.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!props.modelValue) return
  if (event.key === 'Escape') close()
  else if (event.key === 'ArrowRight') next()
  else if (event.key === 'ArrowLeft') prev()
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  const wrapper = img.closest('.lightbox-image-wrapper')
  if (wrapper) {
    wrapper.innerHTML = `<div class="lightbox-error"><i class="fa-solid fa-exclamation-triangle"></i><p>${t('imageNotLoaded')}</p></div>`
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }
})
</script>
