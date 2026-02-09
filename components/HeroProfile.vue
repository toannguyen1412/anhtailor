<template>
  <div id="main-content" class="hero-profile">
    <div class="profile-image hero-reveal">
      <img
        src="/images/logo-anh-tailor.jpg"
        :alt="t('logoAlt')"
        class="logo-img"
        @error="handleImageError">
    </div>
    <h1 class="brand-name hero-reveal">{{ brandHeading }}</h1>
    <p class="tagline hero-reveal">{{ t('tagline') }}</p>
  </div>
</template>

<script setup lang="ts">
import { BUSINESS } from '~/config/business.config'

const { t } = useI18n()

const brandHeading = `${BUSINESS.name} | ${BUSINESS.address.addressRegion}`

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  const parent = img.parentElement
  if (parent) {
    img.style.display = 'none'
    parent.innerHTML = '✂️'
    parent.style.background = '#2c2c2c'
    parent.style.fontSize = '50px'
    parent.style.color = '#c4a574'
  }
}
</script>
