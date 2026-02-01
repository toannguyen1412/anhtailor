<template>
  <section class="services-section" aria-labelledby="services-heading">
    <header class="services-header">
      <h2 id="services-heading" class="services-title">{{ t('servicesTitle') }}</h2>
      <span class="services-title-line" aria-hidden="true" />
    </header>
    <div class="services-list">
      <article
        v-for="service in services"
        :key="service.nameKey"
        class="service-card"
        @mouseenter="pauseServiceAutoPlay"
        @mouseleave="resumeServiceAutoPlay">
        <div class="service-media">
          <div class="service-slide-wrap">
            <img
              v-for="(image, index) in service.images"
              :key="index"
              :src="image"
              :alt="`${service.name} - Image ${index + 1}`"
              class="service-img"
              :class="{ active: index === service.currentImageIndex }"
              :loading="index === 0 ? 'eager' : 'lazy'"
              @error="handleServiceImageError($event, service)">
          </div>
          <div class="service-icon-badge" aria-hidden="true">
            <i :class="service.icon" />
          </div>
          <button
            type="button"
            class="service-nav service-nav-prev"
            @click.stop="prevServiceImage(service)"
            :aria-label="t('prevImage')">
            <i class="fa-solid fa-chevron-left" />
          </button>
          <button
            type="button"
            class="service-nav service-nav-next"
            @click.stop="nextServiceImage(service)"
            :aria-label="t('nextImage')">
            <i class="fa-solid fa-chevron-right" />
          </button>
          <div class="service-dots">
            <button
              v-for="(img, index) in service.images"
              :key="index"
              type="button"
              class="service-dot"
              :class="{ active: index === service.currentImageIndex }"
              :aria-label="`Slide ${index + 1}`"
              :aria-current="index === service.currentImageIndex ? 'true' : undefined"
              @click.stop="setServiceImageIndex(service, index)" />
          </div>
        </div>
        <div class="service-body">
          <h3 class="service-name">{{ service.name }}</h3>
          <p class="service-meta">
            <i class="fa-solid fa-clock" aria-hidden="true" />
            <span>{{ service.description }}</span>
          </p>
          <p class="service-desc">{{ service.detailDescription }}</p>
          <div class="service-price-block">
            <span class="service-price">{{ service.price }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
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

const updateServiceImageIndex = (nameKey: string, updater: (current: number) => number) => {
  const current = serviceImageIndices.value[nameKey] ?? 0
  serviceImageIndices.value = {
    ...serviceImageIndices.value,
    [nameKey]: updater(current)
  }
}

const nextServiceImage = (service: { nameKey: string; images: unknown[] }) => {
  const len = service.images.length
  if (len === 0) return
  updateServiceImageIndex(service.nameKey, (current) => (current + 1) % len)
}

const prevServiceImage = (service: { nameKey: string; images: unknown[] }) => {
  const len = service.images.length
  if (len === 0) return
  updateServiceImageIndex(service.nameKey, (current) => (current - 1 + len) % len)
}

const setServiceImageIndex = (service: { nameKey: string }, index: number) => {
  serviceImageIndices.value = {
    ...serviceImageIndices.value,
    [service.nameKey]: index
  }
}

const handleServiceImageError = (event: Event, _service: unknown) => {
  const img = event.target as HTMLImageElement
  const wrapper = img.closest('.service-media')
  if (wrapper) {
    img.style.display = 'none'
    const badge = wrapper.querySelector('.service-icon-badge')
    if (badge) {
      const el = badge as HTMLElement
      el.style.display = 'flex'
      el.style.background = 'linear-gradient(135deg, #3c2414, #5d4037)'
    }
  }
}

const startServiceAutoPlay = () => {
  serviceAutoPlayIntervals.value.forEach(id => clearInterval(id))
  serviceAutoPlayIntervals.value = []
  baseServices.forEach((service) => {
    const intervalId = setInterval(() => {
      nextServiceImage(service)
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
