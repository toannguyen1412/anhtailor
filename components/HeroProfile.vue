<template>
  <div id="main-content">
    <div class="profile-image">
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
    parent.style.background = 'linear-gradient(135deg, #d4a574, #c19660)'
    parent.style.fontSize = '50px'
    parent.style.color = '#3c2414'
  }
}
</script>
