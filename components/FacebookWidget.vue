<template>
  <div class="facebook-widget-section">
    <h3 class="facebook-widget-title">
      <i class="fa-brands fa-facebook" style="color: #1877F2; margin-right: 8px;" />
      {{ t('followFacebook') }}
    </h3>
    <div class="facebook-widget-container">
      <div
        class="fb-page"
        :data-href="facebookWidget.href"
        :data-tabs="facebookWidget.tabs"
        :data-width="facebookWidget.width"
        :data-height="facebookWidget.height"
        :data-small-header="facebookWidget.smallHeader"
        :data-adapt-container-width="facebookWidget.adaptContainerWidth"
        :data-hide-cover="facebookWidget.hideCover"
        :data-show-facepile="facebookWidget.showFacepile"
        :data-lazy="facebookWidget.lazy">
        <blockquote :cite="facebookWidget.href" class="fb-xfbml-parse-ignore">
          <a :href="facebookWidget.href">{{ facebookWidget.pageName }}</a>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const facebookWidget = {
  href: 'https://www.facebook.com/anhtailorvn/',
  tabs: 'timeline',
  width: '',
  height: '500',
  smallHeader: false,
  adaptContainerWidth: true,
  hideCover: false,
  showFacepile: true,
  lazy: true,
  pageName: 'Anh Tailor'
}

onMounted(() => {
  if (import.meta.client && (window as any).FB) {
    (window as any).FB.XFBML.parse()
  }
})
</script>
