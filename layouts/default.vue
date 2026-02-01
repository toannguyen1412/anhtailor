<template>
  <div class="bio-container" id="main-content">
    <AppHeader />
    <HeroProfile />

    <main class="layout-main">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.bio-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 14px;
  padding: 0 0 40px 0;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}
.layout-main {
  text-align: center;
  padding-bottom: calc(72px + env(safe-area-inset-bottom));
}
</style>

