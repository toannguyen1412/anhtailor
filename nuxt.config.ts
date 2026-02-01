// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Compatibility date
  compatibilityDate: '2026-01-01',

  // SSR enabled
  ssr: true,

  // App configuration
  app: {
    head: {
      htmlAttrs: {
        lang: "vi",
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

  // i18n configuration
  i18n: {
    locales: [
      {
        code: "vi",
        language: "vi-VN",
        name: "Tiếng Việt",
        file: "vi.json",
      },
      {
        code: "en",
        language: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "de",
        language: "de-DE",
        name: "Deutsch",
        file: "de.json",
      },
      {
        code: "fr",
        language: "fr-FR",
        name: "Français",
        file: "fr.json",
      },
      {
        code: "es",
        language: "es-ES",
        name: "Español",
        file: "es.json",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false,
    },
    vueI18n: "./i18n.config.ts",
    lazy: true,
    langDir: "locales",
  },

  // Runtime config
  runtimeConfig: {
    public: {
      baseUrl: "https://anhtailor.vn",
    },
  },

  // Nitro configuration for SSR
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/vi", "/en", "/de", "/fr", "/es"],
    },
  },
});
