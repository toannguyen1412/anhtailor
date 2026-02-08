<template>
  <div class="app-float-buttons">
    <a
      :href="BUSINESS.googleMapsReviewUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="float-btn float-btn-map"
      :aria-label="t('openInGoogleMaps')"
      title="Google Maps - Xem đánh giá">
      <i class="fa-solid fa-map-location-dot" />
    </a>
    <a
      :href="BUSINESS.whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="float-btn float-btn-whatsapp"
      :aria-label="t('openWhatsApp')"
      title="WhatsApp">
      <i class="fa-brands fa-whatsapp" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { BUSINESS } from '~/config/business.config'

const { t } = useI18n()
</script>

<style scoped>
.app-float-buttons {
  position: fixed;
  right: 12px;
  bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 9999;
}

.float-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

@media (max-width: 480px) {
  .app-float-buttons {
    right: 10px;
    bottom: calc(12px + env(safe-area-inset-bottom, 0px));
    gap: 6px;
  }
  .float-btn {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
}

.float-btn:hover {
  transform: scale(1.08);
  color: white;
}

.float-btn-whatsapp {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
}

.float-btn-whatsapp:hover {
  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.5);
}

.float-btn-map {
  background: linear-gradient(135deg, #4285f4 0%, #1a73e8 100%);
  box-shadow: 0 4px 20px rgba(66, 133, 244, 0.45);
}

.float-btn-map:hover {
  box-shadow: 0 6px 28px rgba(66, 133, 244, 0.5);
}
</style>
