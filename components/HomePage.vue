<template>
  <div>
    <a href="#main-content" class="skip-link">{{ t('skipToContent') }}</a>
    
    <!-- Language Switcher -->
    <div class="language-switcher">
      <NuxtLink 
        v-for="lang in availableLocales" 
        :key="lang.code"
        :to="getLocalePath(lang.code)"
        :class="{ active: locale === lang.code }"
        class="lang-btn"
        :aria-label="lang.name">
        <span 
          class="lang-flag" 
          :style="{ backgroundImage: `url(https://flagcdn.com/w20/${getFlagCode(lang.code)}.png)` }">
        </span>
      </NuxtLink>
    </div>

    <!-- Profile Section -->
    <div class="profile-image">
      <img 
        src="/images/logo-anh-tailor.jpg" 
        :alt="t('logoAlt')" 
        class="logo-img"
        @error="handleImageError">
    </div>
    
    <h1 class="brand-name">Anh Tailor | Mui Ne</h1>
    <p class="tagline">{{ t('tagline') }}</p>

    <!-- Services Section -->
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
                :class="{ 'active': index === service.currentImageIndex }"
                :loading="index === 0 ? 'eager' : 'lazy'"
                @error="handleServiceImageError($event, service)">
            </div>
            <div class="service-image-overlay">
              <i :class="service.icon"></i>
            </div>
            <button 
              class="service-slide-nav service-slide-prev" 
              @click="prevServiceImage(service)"
              :aria-label="t('prevImage')">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              class="service-slide-nav service-slide-next" 
              @click="nextServiceImage(service)"
              :aria-label="t('nextImage')">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <div class="service-slide-indicators">
              <span 
                v-for="(image, index) in service.images" 
                :key="index"
                class="service-slide-dot"
                :class="{ 'active': index === service.currentImageIndex }"
                @click="setServiceImageIndex(service, index)">
              </span>
            </div>
          </div>
          <div class="service-content">
            <div class="service-header">
              <h4 class="service-name">{{ service.name }}</h4>
              <div class="service-time">
                <i class="fa-solid fa-clock"></i>
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

    <!-- Features Section -->
    <div class="features-section">
      <h2 class="features-title">{{ t('featuresTitle') }}</h2>
      <div class="features-grid">
        <div 
          v-for="feature in featuresWithTranslations" 
          :key="feature.key"
          class="feature-card">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-name">{{ feature.name }}</h3>
        </div>
      </div>
    </div>

    <!-- Story Section -->
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

    <!-- Contact Links -->
    <template v-for="link in contactLinksWithTranslations" :key="link.textKey">
      <a 
        v-if="link.textKey !== 'whatsapp'"
        :href="link.href" 
        class="link-button" 
        :target="link.target"
        :rel="link.target === '_blank' ? 'noopener noreferrer' : ''"
        @click="handleLinkClick">
        <span class="link-icon"><i :class="link.icon"></i></span>
        {{ link.text }}
      </a>
      <div v-else class="whatsapp-button-group">
        <a 
          :href="link.href" 
          class="link-button whatsapp-main" 
          :target="link.target"
          :rel="link.target === '_blank' ? 'noopener noreferrer' : ''"
          @click="handleLinkClick">
          <span class="link-icon"><i :class="link.icon"></i></span>
          {{ link.text }}
        </a>
        <button 
          class="link-button whatsapp-qr-btn" 
          @click="showWhatsAppQR = true"
          :aria-label="t('showWhatsAppQR')">
          <i class="fa-solid fa-qrcode"></i>
        </button>
      </div>
    </template>

    <!-- Google Map Section -->
    <div class="map-section">
      <h3 class="map-title">
        <i class="fa-solid fa-map-location-dot" style="margin-right: 8px;"></i>
        {{ t('mapTitle') }}
      </h3>
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1234567890!2d108.2778!3d10.9381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTAuOTM4MSAxMDguMjc3OA!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s&q=357/1+Nguyen+Dinh+Chieu,+Ham+Tien,+Mui+Ne"
          width="100%" 
          height="400" 
          style="border:0; border-radius: 8px;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          :title="t('mapTitle')">
        </iframe>
        <div class="map-link-wrapper">
          <a 
            href="https://maps.app.goo.gl/x7jmcThrXRpDuKQT8" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="map-link-button">
            <i class="fa-solid fa-external-link-alt"></i>
            {{ t('openInGoogleMaps') }}
          </a>
        </div>
      </div>
    </div>

    <!-- Notice Section -->
    <div class="notice-section">
      <div class="notice-item">
        <i class="fa-solid fa-comment-dots notice-icon"></i>
        <p class="notice-text">{{ t('notice.facebookConsultation') }}</p>
      </div>
      <div class="notice-item">
        <i class="fa-solid fa-ruler-combined notice-icon"></i>
        <p class="notice-text">{{ t('notice.remoteOrdering') }}</p>
      </div>
    </div>

    <!-- Facebook Page Widget -->
    <div class="facebook-widget-section">
      <h3 class="facebook-widget-title">
        <i class="fa-brands fa-facebook" style="color: #1877F2; margin-right: 8px;"></i>
        {{ t('followFacebook') }}
      </h3>
      <div class="facebook-widget-container">
        <div 
          class="fb-page" 
          :data-href="facebookWidget.href" 
          :data-tabs="facebookWidget.tabs" 
          :data-width="facebookWidget.width" 
          :data-height="facebookWidget.height" 
          :data-small-header="facebookWidget.smallHeader" 
          :data-adapt-container-width="facebookWidget.adaptContainerWidth" 
          :data-hide-cover="facebookWidget.hideCover" 
          :data-show-facepile="facebookWidget.showFacepile"
          :data-lazy="facebookWidget.lazy">
          <blockquote :cite="facebookWidget.href" class="fb-xfbml-parse-ignore">
            <a :href="facebookWidget.href">{{ facebookWidget.pageName }}</a>
          </blockquote>
        </div>
      </div>
    </div>

    <!-- Text Feedback Section -->
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
                class="star-icon"></i>
            </div>
          </div>
          <div class="feedback-content">{{ feedback.content }}</div>
          <div class="feedback-footer">
            <span class="feedback-country">
              <i class="fa-solid fa-globe"></i> {{ feedback.country }}
            </span>
            <span class="feedback-date">
              <i class="fa-solid fa-clock"></i> {{ feedback.date }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Feedback Images Section -->
    <div class="feedback-section">
      <h3 class="feedback-title">{{ t('customerPhotos') }}</h3>
      <div class="feedback-gallery vertical-scroll">
        <div 
          v-for="(image, index) in feedbackImagesWithTranslations" 
          :key="index"
          class="feedback-item">
          <img 
            :src="image.src" 
            :alt="image.alt" 
            loading="lazy"
            @click="openLightbox(index)"
            @error="handleFeedbackImageError($event, index)"
            :aria-label="t('viewCustomerPhoto').replace('{index}', (index + 1).toString())">
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
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
            <span class="faq-icon" :class="{ 'open': faq.isOpen }">
              <i class="fa-solid fa-plus"></i>
            </span>
            <span class="faq-question-text">{{ faq.question }}</span>
          </button>
          <div 
            class="faq-answer" 
            :id="`faq-answer-${index}`"
            :class="{ 'open': faq.isOpen }"
            v-show="faq.isOpen">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- WhatsApp QR Modal -->
    <div 
      v-if="showWhatsAppQR" 
      class="whatsapp-qr-overlay" 
      @click="showWhatsAppQR = false">
      <div class="whatsapp-qr-container" @click.stop>
        <button 
          class="whatsapp-qr-close" 
          @click="showWhatsAppQR = false" 
          :aria-label="t('close')">
          <i class="fa-solid fa-times"></i>
        </button>
        <div class="whatsapp-qr-content">
          <h3 class="whatsapp-qr-title">{{ t('scanQRCode') }}</h3>
          <div class="whatsapp-qr-image-wrapper">
            <img 
              :src="whatsAppQR.imageSrc" 
              :alt="t('whatsAppQRAlt')" 
              class="whatsapp-qr-image">
          </div>
          <div class="whatsapp-qr-info">
            <p class="whatsapp-qr-name">{{ whatsAppQR.contactName }}</p>
            <p class="whatsapp-qr-subtitle">{{ t('whatsAppContact') }}</p>
          </div>
          <div class="whatsapp-qr-actions">
            <a 
              :href="whatsAppQR.link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="whatsapp-qr-button">
              <i class="fa-brands fa-whatsapp"></i>
              {{ t('openWhatsApp') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div 
      v-if="showLightbox" 
      class="lightbox-overlay" 
      @click="closeLightbox">
      <div class="lightbox-container" @click.stop>
        <button 
          class="lightbox-close" 
          @click="closeLightbox" 
          :aria-label="t('close')">
          <i class="fa-solid fa-times"></i>
        </button>
        <button 
          class="lightbox-nav lightbox-prev" 
          @click="prevImage" 
          :aria-label="t('prevImage')">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button 
          class="lightbox-nav lightbox-next" 
          @click="nextImage" 
          :aria-label="t('nextImage')">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div class="lightbox-image-wrapper">
          <img 
            :src="feedbackImagesWithTranslations[currentImageIndex].src" 
            :alt="feedbackImagesWithTranslations[currentImageIndex].alt"
            class="lightbox-image"
            @load="imageLoaded = true"
            @error="handleLightboxImageError">
          <div v-if="!imageLoaded" class="lightbox-loading">
            <i class="fa-solid fa-spinner fa-spin"></i>
          </div>
        </div>
        <div class="lightbox-counter">
          {{ currentImageIndex + 1 }} / {{ feedbackImagesWithTranslations.length }}
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      {{ t('footer') }}
    </div>

    <!-- Back to Top Button -->
    <button 
      class="back-to-top" 
      @click="scrollToTop" 
      :aria-label="t('backToTop')"
      :class="{ visible: showBackToTop }">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()
const { services: baseServices, servicesWithTranslations } = useServices()
const { featuresWithTranslations } = useFeatures()
const { contactLinksWithTranslations } = useContactLinks()
const { feedbackImagesWithTranslations, feedbacksWithDates } = useFeedbacks()
const { faqsWithTranslations } = useFAQs()

// Reactive state
const showWhatsAppQR = ref(false)
const showLightbox = ref(false)
const currentImageIndex = ref(0)
const imageLoaded = ref(false)
const showBackToTop = ref(false)
const openFaqIndex = ref<number | null>(null)
const serviceAutoPlayIntervals = ref<NodeJS.Timeout[]>([])

// Services state for image carousel - track currentImageIndex separately
const serviceImageIndices = ref<Record<string, number>>({
  suits: 0,
  shirts: 0,
  waistcoat: 0
})

// Computed services with translations and current image index
const services = computed(() => {
  return servicesWithTranslations.value.map(service => ({
    ...service,
    currentImageIndex: serviceImageIndices.value[service.nameKey] || 0
  }))
})

// FAQs state
const faqs = computed(() => {
  return faqsWithTranslations.value.map((faq, index) => ({
    ...faq,
    isOpen: openFaqIndex.value === index
  }))
})

// Facebook Widget
const facebookWidget = {
  href: 'https://www.facebook.com/anhtailorvn/',
  tabs: 'timeline',
  width: '',
  height: '500',
  smallHeader: false,
  adaptContainerWidth: true,
  hideCover: false,
  showFacepile: true,
  lazy: true,
  pageName: 'Anh Tailor'
}

// WhatsApp QR
const whatsAppQR = {
  imageSrc: '/images/whatapp.png',
  contactName: 'anhtailor',
  link: 'https://wa.me/84345197864'
}

// Available locales - ensure we have the locales
const availableLocales = computed(() => {
  if (!locales.value || locales.value.length === 0) {
    return [
      { code: 'vi', name: 'Tiếng Việt' },
      { code: 'en', name: 'English' },
      { code: 'de', name: 'Deutsch' },
      { code: 'fr', name: 'Français' },
      { code: 'es', name: 'Español' }
    ]
  }
  return locales.value
})

// Methods
const getFlagCode = (code: string) => {
  const flagMap: Record<string, string> = {
    vi: 'vn',
    en: 'gb',
    de: 'de',
    fr: 'fr',
    es: 'es'
  }
  return flagMap[code] || code
}

const getLocalePath = (code: string) => {
  // Use switchLocalePath to get the correct path for the locale
  const path = switchLocalePath(code)
  if (path) {
    return path
  }
  
  // Fallback: construct path manually
  const currentPath = route.path
  // Remove current locale prefix if exists
  const pathWithoutLocale = currentPath.replace(/^\/(vi|en|de|fr|es)/, '') || '/'
  
  // Build new path: default locale (en) has no prefix
  if (code === 'en') {
    return pathWithoutLocale === '/' ? '/' : pathWithoutLocale
  } else {
    return pathWithoutLocale === '/' ? `/${code}` : `/${code}${pathWithoutLocale}`
  }
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  const parent = img.parentElement
  if (parent) {
    img.style.display = 'none'
    parent.innerHTML = '✂️'
    parent.style.background = 'linear-gradient(135deg, #d4a574, #c19660)'
    parent.style.fontSize = '50px'
    parent.style.color = '#3c2414'
  }
}

const handleServiceImageError = (event: Event, service: any) => {
  const img = event.target as HTMLImageElement
  const wrapper = img.closest('.service-image-wrapper')
  if (wrapper) {
    img.style.display = 'none'
    const overlay = wrapper.querySelector('.service-image-overlay')
    if (overlay) {
      ;(overlay as HTMLElement).style.display = 'flex'
      ;(overlay as HTMLElement).style.background = 'linear-gradient(135deg, #3c2414, #5d4037)'
    }
  }
}

const nextServiceImage = (service: any) => {
  const currentIndex = serviceImageIndices.value[service.nameKey] || 0
  serviceImageIndices.value[service.nameKey] = (currentIndex + 1) % service.images.length
}

const prevServiceImage = (service: any) => {
  const currentIndex = serviceImageIndices.value[service.nameKey] || 0
  serviceImageIndices.value[service.nameKey] = (currentIndex - 1 + service.images.length) % service.images.length
}

const setServiceImageIndex = (service: any, index: number) => {
  serviceImageIndices.value[service.nameKey] = index
}

const handleLinkClick = (event: Event) => {
  const button = event.currentTarget as HTMLElement
  button.style.transform = 'scale(0.95)'
  setTimeout(() => {
    button.style.transform = ''
  }, 150)
}

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  showLightbox.value = true
  imageLoaded.value = false
  if (import.meta.client) {
    document.body.style.overflow = 'hidden'
  }
}

const closeLightbox = () => {
  showLightbox.value = false
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % feedbackImagesWithTranslations.value.length
  imageLoaded.value = false
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + feedbackImagesWithTranslations.value.length) % feedbackImagesWithTranslations.value.length
  imageLoaded.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!showLightbox.value) return
  
  if (event.key === 'Escape') {
    closeLightbox()
  } else if (event.key === 'ArrowRight') {
    nextImage()
  } else if (event.key === 'ArrowLeft') {
    prevImage()
  }
}

const handleFeedbackImageError = (event: Event, index: number) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
  const parent = img.parentElement
  if (parent) {
    parent.innerHTML = `<div class="image-error-placeholder"><i class="fa-solid fa-image"></i><span>${t('imageNotLoaded')}</span></div>`
  }
}

const handleLightboxImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  const wrapper = img.closest('.lightbox-image-wrapper')
  if (wrapper) {
    wrapper.innerHTML = `<div class="lightbox-error"><i class="fa-solid fa-exclamation-triangle"></i><p>${t('imageNotLoaded')}</p></div>`
  }
}

const handleStoryImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  const wrapper = img.closest('.story-image-wrapper')
  if (wrapper) {
    img.style.display = 'none'
    wrapper.innerHTML = `<div class="story-image-placeholder"><i class="fa-solid fa-image"></i><span>${t('imageNotLoaded')}</span></div>`
  }
}

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  if (import.meta.client) {
    showBackToTop.value = window.scrollY > 300
  }
}

const startServiceAutoPlay = () => {
  serviceAutoPlayIntervals.value.forEach(intervalId => {
    clearInterval(intervalId)
  })
  serviceAutoPlayIntervals.value = []
  
  baseServices.value.forEach((service) => {
    const intervalId = setInterval(() => {
      const currentIndex = serviceImageIndices.value[service.nameKey] || 0
      serviceImageIndices.value[service.nameKey] = (currentIndex + 1) % service.images.length
    }, 3000)
    serviceAutoPlayIntervals.value.push(intervalId)
  })
}

const pauseServiceAutoPlay = () => {
  serviceAutoPlayIntervals.value.forEach(intervalId => {
    clearInterval(intervalId)
  })
  serviceAutoPlayIntervals.value = []
}

const resumeServiceAutoPlay = () => {
  startServiceAutoPlay()
}

const toggleFaq = (index: number) => {
  if (openFaqIndex.value === index) {
    openFaqIndex.value = null
  } else {
    openFaqIndex.value = index
  }
}

// Lifecycle
onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    startServiceAutoPlay()
    
    // Initialize Facebook SDK
    if (import.meta.client && (window as any).FB) {
      (window as any).FB.XFBML.parse()
    }
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('scroll', handleScroll)
    serviceAutoPlayIntervals.value.forEach(intervalId => {
      clearInterval(intervalId)
    })
  }
})

// Watch for locale changes to update services
watch(locale, () => {
  // Services will be updated automatically via computed
})
</script>

<style scoped>
/* Component styles are in global CSS */
</style>

