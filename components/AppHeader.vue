<template>
  <header class="app-header">
    <!-- Top bar: chỉ dùng để cân layout, LanguageSwitcher ở ngoài -->
    <div class="app-header-top" aria-hidden="true" />

    <!-- Bottom Nav - sticky kiểu mobile app -->
    <nav
      id="main-nav"
      class="app-bottom-nav"
      aria-label="Main navigation"
      role="navigation">
      <NuxtLink
        v-for="item in NAV_ITEMS"
        :key="item.path"
        :to="localePath(item.path)"
        class="bottom-nav-item"
        :class="{ active: isActive(currentPathNoLocale, item.path) }"
        :aria-current="isActive(currentPathNoLocale, item.path) ? 'page' : undefined">
        <span class="bottom-nav-icon" v-html="getIcon(item.path)" />
        <span class="bottom-nav-label">{{ t(item.i18nKey) }}</span>
      </NuxtLink>
    </nav>
    <LanguageSwitcher />
  </header>
</template>

<script setup lang="ts">
import { NAV_ITEMS } from '~/config/site.config'
import { pathWithoutLocale } from '~/utils/route'

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const currentPathNoLocale = computed(() => pathWithoutLocale(route.path))

function isActive(currentNoLocale: string, itemPath: string) {
  const path = itemPath === '/' ? '/' : itemPath
  return currentNoLocale === path
}

// Icons inline SVG cho từng mục
const ICONS: Record<string, string> = {
  '/': '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  '/contact': '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  '/service': '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>',
  '/post': '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
}

function getIcon(path: string): string {
  return ICONS[path] || ICONS['/']
}
</script>

<style scoped>
.app-header {
  position: relative;
}

.app-header-top {
  min-height: 1px;
}

/* Bottom Nav - refined luxury */
.app-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  z-index: 9998;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  gap: 2px;
  padding: 10px 14px calc(10px + env(safe-area-inset-bottom));
  background: var(--color-paper);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top: 1px solid var(--color-border);
  box-shadow: 0 -2px 24px rgba(31, 31, 31, 0.05);
  border-radius: 14px 14px 0 0;
}

.app-bottom-nav::before {
  content: "";
  position: absolute;
  top: 0;
  left: 12%;
  right: 12%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border-gold), transparent);
  opacity: 0.6;
}

.bottom-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 6px;
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition: color 0.22s ease, background 0.22s ease;
  border-radius: 10px;
  min-width: 0;
}

.bottom-nav-item:hover {
  color: var(--color-primary);
  background: rgba(31, 31, 31, 0.04);
}

.bottom-nav-item.active {
  color: var(--color-primary);
  background: rgba(31, 31, 31, 0.06);
}

.bottom-nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bottom-nav-icon :deep(svg) {
  display: block;
}

.bottom-nav-item.active .bottom-nav-icon :deep(svg) {
  stroke: var(--color-primary);
}

.bottom-nav-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
