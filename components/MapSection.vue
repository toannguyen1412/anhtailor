<template>
  <div class="map-section">
    <h3 class="map-title">
      <i class="fa-solid fa-map-location-dot" style="margin-right: 8px;" />
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
        :title="t('mapTitle')" />
      <div class="map-link-wrapper">
        <a
          href="https://maps.app.goo.gl/x7jmcThrXRpDuKQT8"
          target="_blank"
          rel="noopener noreferrer"
          class="map-link-button">
          <i class="fa-solid fa-external-link-alt" />
          {{ t('openInGoogleMaps') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
