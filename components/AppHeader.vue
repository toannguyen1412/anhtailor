<template>
  <header class="app-header">
    <nav class="app-nav" aria-label="Main navigation">
      <NuxtLink
        v-for="item in NAV_ITEMS"
        :key="item.path"
        :to="localePath(item.path)"
        class="nav-link"
        :class="{ active: isActive(item.path) }">
        {{ t(item.i18nKey) }}
      </NuxtLink>
    </nav>
    <LanguageSwitcher />
  </header>
</template>

<script setup lang="ts">
import { NAV_ITEMS, LOCALE_CODES } from '~/config/site.config'

const { t } = useI18n()
const route = useRoute()

const pathWithoutLocale = computed(() => {
  const path = route.path
  const parts = path.split('/').filter(Boolean)
  if (parts.length > 0 && LOCALE_CODES.includes(parts[0] as any)) parts.shift()
  return parts.length ? '/' + parts.join('/') : '/'
})

function isActive(itemPath: string) {
  const current = pathWithoutLocale.value
  const path = itemPath === '/' ? '/' : itemPath
  return current === path
}
</script>

<style scoped>
.app-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(60, 36, 20, 0.1);
}
.app-nav {
  display: flex;
  gap: 1rem;
}
.nav-link {
  color: #3c2414;
  text-decoration: none;
  font-weight: 500;
}
.nav-link:hover,
.nav-link.active {
  text-decoration: underline;
}
</style>
