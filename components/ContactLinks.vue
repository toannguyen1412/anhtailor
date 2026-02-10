<template>
  <div class="cl">
    <!-- Primary contact methods -->
    <div class="cl__primary">
      <div
        v-for="link in primaryLinks"
        :key="link.textKey"
        class="cl-card-wrap">
        <!-- WhatsApp grouped card -->
        <div v-if="link.textKey === 'whatsapp'" class="cl-card cl-card--grouped">
          <a
            :href="link.href"
            class="cl-card__main"
            :target="link.target"
            :rel="link.target === '_blank' ? 'noopener noreferrer' : ''"
            @click="handleLinkClick">
            <span class="cl-card__icon cl-card__icon--whatsapp">
              <i :class="link.icon" />
            </span>
            <span class="cl-card__content">{{ link.text }}</span>
            <i class="fa-solid fa-chevron-right cl-card__chevron" />
          </a>
          <button
            class="cl-card__qr"
            @click="emit('showQr')"
            :aria-label="t('showWhatsAppQR')">
            <i class="fa-solid fa-qrcode" />
          </button>
        </div>

        <!-- Regular contact card -->
        <a
          v-else
          :href="link.href"
          class="cl-card"
          :target="link.target"
          :rel="link.target === '_blank' ? 'noopener noreferrer' : ''"
          @click="handleLinkClick">
          <span class="cl-card__icon">
            <i :class="link.icon" />
          </span>
          <span class="cl-card__content">{{ link.text }}</span>
          <i class="fa-solid fa-chevron-right cl-card__chevron" />
        </a>
      </div>
    </div>

    <!-- Social & Review links -->
    <div class="cl__social">
      <a
        v-for="link in socialLinks"
        :key="link.textKey"
        :href="link.href"
        class="cl-pill"
        :class="`cl-pill--${link.textKey}`"
        :target="link.target"
        :rel="link.target === '_blank' ? 'noopener noreferrer' : ''">
        <i :class="link.icon" />
        <span>{{ link.text }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { contactLinksWithTranslations } = useContactLinks()

const emit = defineEmits<{
  showQr: []
}>()

const SOCIAL_KEYS = ['facebook', 'reviewUs', 'tripadvisor']

const primaryLinks = computed(() =>
  contactLinksWithTranslations.value.filter(l => !SOCIAL_KEYS.includes(l.textKey)),
)

const socialLinks = computed(() =>
  contactLinksWithTranslations.value.filter(l => SOCIAL_KEYS.includes(l.textKey)),
)

const handleLinkClick = (event: Event) => {
  const el = event.currentTarget as HTMLElement
  el.style.transform = 'scale(0.97)'
  setTimeout(() => { el.style.transform = '' }, 150)
}
</script>

<style scoped>
/* ═══════════════════════════════════════════════
   ContactLinks – Western-European luxury card UI
   ═══════════════════════════════════════════════ */

.cl {
  padding: 0 20px;
  margin-bottom: 12px;
}

/* ─── Primary cards stack ─── */
.cl__primary {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

/* Transparent wrapper – preserves flex flow */
.cl-card-wrap {
  display: contents;
}

/* ─── Card base ─── */
.cl-card {
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
  animation: clReveal 0.5s ease-out both;
}

.cl-card:hover {
  border-color: var(--color-border-accent);
  box-shadow: var(--shadow-card);
  transform: translateY(-2px);
  border-left: 3px solid var(--color-border-gold);
}

.cl-card:active {
  transform: translateY(0) scale(0.98);
}

/* stagger animation */
.cl-card:nth-child(1) { animation-delay: 0.05s; }
.cl-card:nth-child(2) { animation-delay: 0.1s; }
.cl-card:nth-child(3) { animation-delay: 0.15s; }
.cl-card:nth-child(4) { animation-delay: 0.2s; }

/* ─── Card icon ─── */
.cl-card__icon {
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

.cl-card:hover .cl-card__icon {
  color: var(--color-gold);
  transform: scale(1.04);
}

.cl-card__icon--whatsapp {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: #fff;
}

/* ─── Card content text ─── */
.cl-card__content {
  flex: 1;
  text-align: left;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: var(--tracking-tight);
  color: var(--color-primary);
}

/* ─── Card chevron ─── */
.cl-card__chevron {
  font-size: 0.65rem;
  color: var(--color-text-light);
  opacity: 0.3;
  transition: var(--transition);
  flex-shrink: 0;
}

.cl-card:hover .cl-card__chevron,
.cl-card__main:hover ~ .cl-card__chevron {
  opacity: 1;
  color: var(--color-accent);
  transform: translateX(3px);
}

/* ─── Grouped card (WhatsApp + QR) ─── */
.cl-card--grouped {
  display: flex;
  align-items: stretch;
  gap: 0;
  padding: 0;
  overflow: hidden;
  animation: clReveal 0.5s ease-out both;
}

.cl-card--grouped:hover {
  transform: translateY(-2px);
  border-left: 3px solid var(--color-border-gold);
}

.cl-card__main {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 16px;
  text-decoration: none;
  color: var(--color-text);
  flex: 1;
  transition: var(--transition);
}

.cl-card__main:hover {
  background: rgba(44, 44, 44, 0.02);
}

.cl-card__main .cl-card__chevron {
  font-size: 0.65rem;
  color: var(--color-text-light);
  opacity: 0.3;
  transition: var(--transition);
  flex-shrink: 0;
}

.cl-card__main:hover .cl-card__chevron {
  opacity: 1;
  color: var(--color-accent);
  transform: translateX(3px);
}

.cl-card__qr {
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(18, 140, 126, 0.06);
  border: none;
  border-left: 1px solid var(--color-border);
  cursor: pointer;
  color: #128c7e;
  font-size: 1.1rem;
  transition: var(--transition);
}

.cl-card__qr:hover {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: #fff;
}

/* ─── Social pills row ─── */
.cl__social {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  animation: clReveal 0.5s 0.25s ease-out both;
}

.cl-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: 1px solid var(--color-border);
  border-radius: 28px;
  background: transparent;
  text-decoration: none;
  color: var(--color-primary);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: var(--tracking-tight);
  transition: var(--transition);
  white-space: nowrap;
}

.cl-pill:hover {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-soft);
}

.cl-pill i {
  font-size: 0.95rem;
}

/* Brand-specific hover colours */
.cl-pill--facebook:hover {
  background: #1877f2;
  border-color: #1877f2;
}

.cl-pill--reviewUs:hover {
  background: #4285f4;
  border-color: #4285f4;
}

.cl-pill--tripadvisor:hover {
  background: #34e0a1;
  border-color: #34e0a1;
  color: #1a1a1a;
}

/* ─── Reveal keyframe ─── */
@keyframes clReveal {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─── Mobile adjustments ─── */
@media (max-width: 480px) {
  .cl {
    padding: 0 8px;
  }

  .cl__primary {
    gap: 10px;
    margin-bottom: 18px;
  }

  .cl-card {
    padding: 13px 14px;
    gap: 12px;
  }

  .cl-card__icon {
    width: 38px;
    height: 38px;
    font-size: 0.9rem;
  }

  .cl-card__content {
    font-size: 0.82rem;
  }

  .cl-card__main {
    padding: 13px 14px;
    gap: 12px;
  }

  .cl-card__qr {
    width: 48px;
    font-size: 1rem;
  }

  .cl__social {
    gap: 8px;
  }

  .cl-pill {
    padding: 9px 14px;
    font-size: 0.78rem;
    gap: 6px;
  }

  .cl-pill i {
    font-size: 0.85rem;
  }
}
</style>
