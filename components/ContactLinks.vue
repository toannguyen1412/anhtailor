<template>
  <template v-for="link in contactLinksWithTranslations" :key="link.textKey">
    <a
      v-if="link.textKey !== 'whatsapp'"
      :href="link.href"
      class="link-button"
      :target="link.target"
      :rel="link.target === '_blank' ? 'noopener noreferrer' : ''"
      @click="handleLinkClick">
      <span class="link-icon"><i :class="link.icon" /></span>
      {{ link.text }}
    </a>
    <div v-else class="whatsapp-button-group">
      <a
        :href="link.href"
        class="link-button whatsapp-main"
        :target="link.target"
        :rel="link.target === '_blank' ? 'noopener noreferrer' : ''"
        @click="handleLinkClick">
        <span class="link-icon"><i :class="link.icon" /></span>
        {{ link.text }}
      </a>
      <button
        class="link-button whatsapp-qr-btn"
        @click="emit('showQr')"
        :aria-label="t('showWhatsAppQR')">
        <i class="fa-solid fa-qrcode" />
      </button>
    </div>
  </template>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { contactLinksWithTranslations } = useContactLinks()

const emit = defineEmits<{
  showQr: []
}>()

const handleLinkClick = (event: Event) => {
  const button = event.currentTarget as HTMLElement
  button.style.transform = 'scale(0.95)'
  setTimeout(() => {
    button.style.transform = ''
  }, 150)
}
</script>
