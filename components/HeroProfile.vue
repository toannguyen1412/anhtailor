<template>
  <div id="main-content">
    <div class="profile-image" style="margin-top: 10px;">
      <img
        src="/images/logo-anh-tailor.jpg"
        :alt="t('logoAlt')"
        class="logo-img"
        @error="handleImageError">
    </div>
    <h1 class="brand-name">Anh Tailor | Mui Ne</h1>
    <p class="tagline">{{ t('tagline') }}</p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

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
