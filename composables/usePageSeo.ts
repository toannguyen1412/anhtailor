import type { PageKey } from '~/config/site.config'
import { DEFAULT_LOCALE, LOCALE_CODES } from '~/config/site.config'
import { pathWithoutLocale, localeUrl } from '~/utils/route'

export interface PageSeoOptions {
  /** OG image URL (absolute). Mặc định dùng logo site. */
  image?: string
  /** JSON-LD structured data. Có thể truyền computed() để reactive theo locale. */
  jsonLd?: MaybeRef<Record<string, unknown>>
}

/**
 * Composable SEO cho từng trang: title, description, canonical, hreflang, og/twitter.
 * Đọc meta từ locale: meta.{pageKey}.title, meta.{pageKey}.description.
 * Canonical và hreflang dùng route hiện tại để hỗ trợ đa trang.
 */
export function usePageSeo(pageKey: PageKey, options: PageSeoOptions = {}) {
  const { t, locale } = useI18n()
  const route = useRoute()
  const config = useRuntimeConfig()
  const baseUrl = config.public.baseUrl as string

  const title = computed(() => t(`meta.${pageKey}.title`))
  const description = computed(() => t(`meta.${pageKey}.description`))
  const ogImage = options.image ?? `${baseUrl}/images/logo-anh-tailor.jpg`

  const pathNoLocale = computed(() => pathWithoutLocale(route.path))
  const canonicalUrl = computed(() => localeUrl(baseUrl, locale.value, pathNoLocale.value))

  const linkAlternates = computed(() => [
    { rel: 'canonical' as const, href: canonicalUrl.value },
    ...LOCALE_CODES.map((lang) => ({
      rel: 'alternate' as const,
      hreflang: lang,
      href: localeUrl(baseUrl, lang, pathNoLocale.value),
    })),
    {
      rel: 'alternate' as const,
      hreflang: 'x-default',
      href: localeUrl(baseUrl, DEFAULT_LOCALE, pathNoLocale.value),
    },
  ])

  useHead({
    title: title,
    meta: [{ name: 'description', content: description }],
    link: linkAlternates,
  })

  // Open Graph & Twitter
  useSeoMeta({
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: canonicalUrl,
    ogType: 'website',
    twitterCard: 'summary_large_image',
  })

  // JSON-LD (optional, reactive)
  if (options.jsonLd) {
    const jsonLdString = computed(() => JSON.stringify(toValue(options.jsonLd)))
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: jsonLdString,
        },
      ],
    })
  }

  return { title, description, canonicalUrl }
}
