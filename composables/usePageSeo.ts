import type { PageKey } from "~/config/site.config";
import { DEFAULT_LOCALE, LOCALE_CODES, LOCALES } from "~/config/site.config";
import { pathWithoutLocale, localeUrl } from "~/utils/route";

/** Chuyển locale code sang định dạng og:locale (vd: en -> en_US). */
function toOgLocale(localeCode: string): string {
  const item = LOCALES.find((l) => l.code === localeCode);
  return item ? item.language.replace("-", "_") : "en_US";
}

export interface PageSeoOptions {
  /** OG image URL (absolute). Mặc định dùng logo site. */
  image?: string;
  /** JSON-LD structured data. Có thể truyền computed() để reactive theo locale. */
  jsonLd?: MaybeRef<Record<string, unknown>>;
}

/**
 * Composable SEO cho từng trang: title, description, canonical, hreflang, og/twitter.
 * Đọc meta từ locale: meta.{pageKey}.title, meta.{pageKey}.description.
 * Canonical và hreflang dùng route hiện tại để hỗ trợ đa trang.
 */
export function usePageSeo(pageKey: PageKey, options: PageSeoOptions = {}) {
  const { t, locale } = useI18n();
  const route = useRoute();
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl as string;

  const title = computed(() => t(`meta.${pageKey}.title`));
  const description = computed(() => t(`meta.${pageKey}.description`));
  const ogImage = options.image ?? `${baseUrl}/images/thumbnail.jpg`;

  const pathNoLocale = computed(() => pathWithoutLocale(route.path));
  const canonicalUrl = computed(() =>
    localeUrl(baseUrl, locale.value, pathNoLocale.value)
  );
  const ogLocale = computed(() => toOgLocale(locale.value));
  const ogLocaleAlternate = computed(() =>
    LOCALE_CODES.filter((code) => code !== locale.value).map(toOgLocale)
  );

  const linkAlternates = computed(() => [
    { rel: "canonical" as const, href: canonicalUrl.value },
    ...LOCALE_CODES.map((lang) => ({
      rel: "alternate" as const,
      hreflang: lang,
      href: localeUrl(baseUrl, lang, pathNoLocale.value),
    })),
    {
      rel: "alternate" as const,
      hreflang: "x-default",
      href: localeUrl(baseUrl, DEFAULT_LOCALE, pathNoLocale.value),
    },
  ]);

  useHead({
    title: title,
    meta: [{ name: "description", content: description }],
    link: linkAlternates,
  });

  // Open Graph & Twitter (og:locale giúp Facebook/social hiểu đúng ngôn ngữ trang)
  useSeoMeta({
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogImageAlt: "Anh Tailor - Professional tailor, Ham Tien Mui Ne",
    ogUrl: canonicalUrl,
    ogType: "website",
    ogLocale,
    ogLocaleAlternate,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
  });

  // JSON-LD (optional, reactive)
  if (options.jsonLd) {
    const jsonLdString = computed(() =>
      JSON.stringify(toValue(options.jsonLd))
    );
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: jsonLdString,
        },
      ],
    });
  }

  return { title, description, canonicalUrl };
}
