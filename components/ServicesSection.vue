<template>
  <div class="services-section">
    <h3 class="services-title">{{ t('servicesTitle') }}</h3>
    <div class="services-list">
      <div
        v-for="service in services"
        :key="service.nameKey"
        class="service-card"
        @mouseenter="pauseServiceAutoPlay"
        @mouseleave="resumeServiceAutoPlay">
        <div class="service-image-wrapper">
          <div class="service-slide-container">
            <img
              v-for="(image, index) in service.images"
              :key="index"
              :src="image"
              :alt="`${service.name} - Image ${index + 1}`"
              class="service-product-image"
              :class="{ active: index === service.currentImageIndex }"
              :loading="index === 0 ? 'eager' : 'lazy'"
              @error="handleServiceImageError($event, service)">
          </div>
          <div class="service-image-overlay">
            <i :class="service.icon" />
          </div>
          <button
            class="service-slide-nav service-slide-prev"
            @click="prevServiceImage(service)"
            :aria-label="t('prevImage')">
            <i class="fa-solid fa-chevron-left" />
          </button>
          <button
            class="service-slide-nav service-slide-next"
            @click="nextServiceImage(service)"
            :aria-label="t('nextImage')">
            <i class="fa-solid fa-chevron-right" />
          </button>
          <div class="service-slide-indicators">
            <span
              v-for="(image, index) in service.images"
              :key="index"
              class="service-slide-dot"
              :class="{ active: index === service.currentImageIndex }"
              @click="setServiceImageIndex(service, index)" />
          </div>
        </div>
        <div class="service-content">
          <div class="service-header">
            <h4 class="service-name">{{ service.name }}</h4>
            <div class="service-time">
              <i class="fa-solid fa-clock" />
              <span>{{ service.description }}</span>
            </div>
            <div class="service-detail-description">
              {{ service.detailDescription }}
            </div>
          </div>
          <div class="service-price-wrapper">
            <span class="service-price">{{ service.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { services: baseServices, servicesWithTranslations } = useServices()

const serviceImageIndices = ref<Record<string, number>>({
  suits: 0,
  shirts: 0,
  waistcoat: 0
})
const serviceAutoPlayIntervals = ref<NodeJS.Timeout[]>([])

const services = computed(() => {
  return servicesWithTranslations.value.map(service => ({
    ...service,
    currentImageIndex: serviceImageIndices.value[service.nameKey] ?? 0
  }))
})

const nextServiceImage = (service: { nameKey: string; images: unknown[] }) => {
  const currentIndex = serviceImageIndices.value[service.nameKey] ?? 0
  serviceImageIndices.value[service.nameKey] = (currentIndex + 1) % service.images.length
}

const prevServiceImage = (service: { nameKey: string; images: unknown[] }) => {
  const currentIndex = serviceImageIndices.value[service.nameKey] ?? 0
  serviceImageIndices.value[service.nameKey] = (currentIndex - 1 + service.images.length) % service.images.length
}

const setServiceImageIndex = (service: { nameKey: string }, index: number) => {
  serviceImageIndices.value[service.nameKey] = index
}

const handleServiceImageError = (event: Event, _service: unknown) => {
  const img = event.target as HTMLImageElement
  const wrapper = img.closest('.service-image-wrapper')
  if (wrapper) {
    img.style.display = 'none'
    const overlay = wrapper.querySelector('.service-image-overlay')
    if (overlay) {
      (overlay as HTMLElement).style.display = 'flex'
      ;(overlay as HTMLElement).style.background = 'linear-gradient(135deg, #3c2414, #5d4037)'
    }
  }
}

const startServiceAutoPlay = () => {
  serviceAutoPlayIntervals.value.forEach(id => clearInterval(id))
  serviceAutoPlayIntervals.value = []
  baseServices.forEach((service) => {
    const intervalId = setInterval(() => {
      const currentIndex = serviceImageIndices.value[service.nameKey] ?? 0
      serviceImageIndices.value[service.nameKey] = (currentIndex + 1) % service.images.length
    }, 3000)
    serviceAutoPlayIntervals.value.push(intervalId)
  })
}

const pauseServiceAutoPlay = () => {
  serviceAutoPlayIntervals.value.forEach(id => clearInterval(id))
  serviceAutoPlayIntervals.value = []
}

const resumeServiceAutoPlay = () => {
  startServiceAutoPlay()
}

onMounted(() => {
  startServiceAutoPlay()
})

onUnmounted(() => {
  serviceAutoPlayIntervals.value.forEach(id => clearInterval(id))
})
</script>
