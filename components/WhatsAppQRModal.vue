<template>
  <div
    v-if="modelValue"
    class="whatsapp-qr-overlay"
    @click="close">
    <div class="whatsapp-qr-container" @click.stop>
      <button
        class="whatsapp-qr-close"
        @click="close"
        :aria-label="t('close')">
        <i class="fa-solid fa-times" />
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
            <i class="fa-brands fa-whatsapp" />
            {{ t('openWhatsApp') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BUSINESS } from '~/config/business.config'

const { t } = useI18n()

defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const whatsAppQR = {
  imageSrc: '/images/whatapp.png',
  contactName: BUSINESS.name.toLowerCase(),
  link: BUSINESS.whatsappUrl,
}

const close = () => {
  emit('update:modelValue', false)
}
</script>
