// https://nuxt.com/docs/api/configuration/nuxt-config
import { LOCALES, DEFAULT_LOCALE, LOCALE_CODES, NAV_ITEMS } from './config/site.config'

/** Routes cho prerender: mỗi locale × mỗi page. strategy prefix: mọi locale có /vi, /en, ... */
function getPrerenderRoutes(): string[] {
  const pathsByPage = NAV_ITEMS.map((item) => item.path)
  const routes: string[] = []
  for (const locale of LOCALE_CODES) {
    for (const path of pathsByPage) {
      const pathNorm = path === '/' ? '' : path
      routes.push(`/${locale}${pathNorm}`)
    }
  }
  return [...new Set(routes)]
}

export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2026-01-01',
  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: 'vi',
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Anh Tailor - Custom Suit Veston Ham Tien Mui Ne | Quality Tailor",
      meta: [
        {
          name: "description",
          content:
            "Anh Tailor - Professional tailor shop in Ham Tien, Mui Ne. High-quality custom suit, vest, and shirt tailoring services at reasonable prices.",
        },
        {
          name: "keywords",
          content:
            "tailor mui ne, custom suit mui ne, tailor ham tien, custom suit vietnam, bespoke suit",
        },
        { name: "author", content: "Anh Tailor" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#3c2414" },
        { name: "msapplication-TileColor", content: "#3c2414" },
        {
          name: "google-site-verification",
          content: "QRcJoaZ-4mPyMz7jEHGefqjtKqaii0EfFcr0MWsOT2w",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/jpeg",
          href: "/images/logo-anh-tailor.jpg",
        },
        { rel: "apple-touch-icon", href: "/images/logo-anh-tailor.jpg" },
        { rel: "preconnect", href: "https://cdnjs.cloudflare.com" },
        { rel: "preconnect", href: "https://unpkg.com" },
        { rel: "dns-prefetch", href: "https://images.unsplash.com" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
        },
      ],
      script: [
        {
          src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0",
          async: true,
          defer: true,
          crossorigin: "anonymous",
          nonce: "RANDOM123",
        },
      ],
    },
  },

  // CSS
  css: ["@/assets/css/style.css"],

  // Modules
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],

  i18n: {
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    },
    vueI18n: './i18n.config.ts',
    lazy: true,
    langDir: 'i18n/locales',
    // Giữ cách resolve path như v8 (tương thích khi nâng từ v8 lên v9)
    restructureDir: false,
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  // Runtime config
  runtimeConfig: {
    public: {
      baseUrl: "https://anhtailor.vn",
    },
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [], // Tạm tắt prerender (đang 500); bật lại: routes: getPrerenderRoutes()
    },
  },
})
