<template>
  <div class="app-float-buttons">
    <a
      :href="BUSINESS.googleMapsReviewUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="float-btn-wrap"
      :aria-label="t('openInGoogleMaps')"
      title="Google Maps - Xem đánh giá">
      <span class="float-btn-label">{{ t('openInGoogleMaps') }}</span>
      <span class="float-btn float-btn-map">
        <i class="fa-solid fa-map-location-dot" />
      </span>
    </a>
    <a
      :href="BUSINESS.whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="float-btn-wrap"
      :aria-label="t('openWhatsApp')"
      title="WhatsApp">
      <span class="float-btn-label">{{ t('openWhatsApp') }}</span>
      <span class="float-btn float-btn-whatsapp">
        <i class="fa-brands fa-whatsapp" />
      </span>
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
  bottom: calc(80px + env(safe-area-inset-bottom, 0px));
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 9999;
}

.float-btn-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  color: inherit;
}

.float-btn-label {
  position: absolute;
  right: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%) translateX(8px);
  font-size: 0.85rem;
  font-weight: 500;
  color: #3c2414;
  background: white;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.float-btn-wrap:hover .float-btn-label {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

.float-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

@media (max-width: 480px) {
  .app-float-buttons {
    right: 10px;
    bottom: calc(76px + env(safe-area-inset-bottom, 0px));
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
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
}

.float-btn-whatsapp {
  color: #25d366;
}

.float-btn-whatsapp:hover {
  color: #128c7e;
}

.float-btn-map {
  color: #4285f4;
}

.float-btn-map:hover {
  color: #1a73e8;
}
</style>
