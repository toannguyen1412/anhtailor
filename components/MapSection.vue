<template>
  <div class="map-section">
    <!-- Header -->
    <div class="map-header">
      <h3 class="map-title">{{ t("mapTitle") }}</h3>
      <span class="map-title-line" />
    </div>

    <!-- Address Cards -->
    <div class="map-address-cards">
      <!-- Opening Hours -->
      <div class="map-address-card">
        <div class="map-address-icon">
          <i class="fa-regular fa-clock" />
        </div>
        <div class="map-address-info">
          <p class="map-address-label">{{ t("map.openingHours") }}</p>
          <p class="map-address-text">{{ t("map.openingHoursValue") }}</p>
        </div>
      </div>

      <!-- Address 1: Main Store -->
      <div class="map-address-card">
        <div class="map-address-icon">
          <i class="fa-solid fa-store" />
        </div>
        <div class="map-address-info">
          <p class="map-address-label">{{ t("map.mainStore") }}</p>
          <p class="map-address-text">{{ t("contact.address") }}</p>
        </div>
      </div>

      <!-- Map Embed -->
      <div class="map-embed-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1234567890!2d108.2778!3d10.9381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTAuOTM4MSAxMDguMjc3OA!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s&q=357/1+Nguyen+Dinh+Chieu,+Ham+Tien,+Mui+Ne"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          :title="t('mapTitle')"
        />
      </div>

      <!-- Address 2: Home -->
      <div class="map-address-card">
        <div class="map-address-icon">
          <i class="fa-solid fa-house" />
        </div>
        <div class="map-address-info">
          <p class="map-address-label">{{ t("map.homeStudio") }}</p>
          <p class="map-address-text">{{ t("contact.address2") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BUSINESS } from "~/config/business.config";

const { t } = useI18n();
</script>

<style scoped>
.map-section {
  margin-bottom: 32px;
  padding: 0 16px;
}

.map-header {
  text-align: center;
  margin-bottom: 24px;
}

.map-title {
  font-family: var(--font-heading);
  font-size: 1.55rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0 0 12px 0;
  letter-spacing: var(--tracking-tight);
}

.map-title-line {
  display: block;
  width: 56px;
  height: 2px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-gold),
    var(--color-accent),
    transparent
  );
  border-radius: 1px;
  opacity: 0.9;
}

/* Address Cards */
.map-address-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 18px;
}

.map-address-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  padding: 16px;
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-border-gold);
  box-shadow: var(--shadow-soft);
  display: flex;
  align-items: flex-start;
  gap: 14px;
  transition: var(--transition);
}

.map-address-card:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-card);
  border-color: var(--color-border-accent);
  border-left-color: var(--color-accent-gold);
}

.map-address-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  border-radius: var(--radius-sm);
  color: var(--color-accent-soft);
  font-size: 16px;
  box-shadow: var(--shadow-soft);
}

.map-address-info {
  flex: 1;
  min-width: 0;
}

.map-address-label {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  margin: 0 0 4px 0;
}

.map-address-text {
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-primary);
  margin: 0;
}

/* Map Embed */
.map-embed-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-border);
  margin-bottom: 16px;
  background: var(--color-bg-card);
}

.map-embed-wrapper::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: var(--radius-md);
  pointer-events: none;
  z-index: 1;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
}

.map-embed-wrapper iframe {
  display: block;
}

/* Actions – card style matching ContactLinks */
.map-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.map-action-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 16px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-text);
  transition: var(--transition);
  box-shadow: var(--shadow-soft);
}

.map-action-card:hover {
  border-color: var(--color-border-accent);
  box-shadow: var(--shadow-card);
  transform: translateY(-2px);
  border-left: 3px solid var(--color-border-gold);
}

.map-action-card:active {
  transform: translateY(0) scale(0.98);
}

.map-action-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  border-radius: var(--radius-sm);
  color: var(--color-accent-soft);
  font-size: 1rem;
  flex-shrink: 0;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.map-action-card:hover .map-action-icon {
  color: var(--color-gold);
  transform: scale(1.04);
}

.map-action-text {
  flex: 1;
  text-align: left;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: var(--tracking-tight);
  color: var(--color-primary);
}

.map-action-chevron {
  font-size: 0.65rem;
  color: var(--color-text-light);
  opacity: 0.3;
  transition: var(--transition);
  flex-shrink: 0;
}

.map-action-card:hover .map-action-chevron {
  opacity: 1;
  color: var(--color-accent);
  transform: translateX(3px);
}

/* Responsive */
@media (max-width: 480px) {
  .map-section {
    padding: 0 3px;
  }

  .map-header {
    margin-bottom: 18px;
  }

  .map-title {
    font-size: 1.3rem;
  }

  .map-address-cards {
    gap: 8px;
    margin-bottom: 14px;
  }

  .map-address-card {
    padding: 12px;
    gap: 10px;
  }

  .map-address-icon {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }

  .map-address-label {
    font-size: 0.72rem;
  }

  .map-address-text {
    font-size: 0.85rem;
  }

  .map-embed-wrapper {
    height: 220px;
    margin-bottom: 12px;
  }

  .map-actions {
    gap: 10px;
  }

  .map-action-card {
    padding: 13px 14px;
    gap: 12px;
  }

  .map-action-icon {
    width: 38px;
    height: 38px;
    font-size: 0.9rem;
  }

  .map-action-text {
    font-size: 0.82rem;
  }
}
</style>
