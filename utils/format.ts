import type { LocaleCode } from '~/config/site.config'

export interface PriceRangeUSD {
  min: number
  max: number
}

export interface PriceRangeVND {
  min: string
  max: string
}

/**
 * Format giá theo locale: VND cho vi, USD cho các ngôn ngữ khác.
 */
export function formatPrice(
  priceUSD: PriceRangeUSD,
  priceVND: PriceRangeVND,
  locale: LocaleCode
): string {
  if (locale === 'vi') {
    return priceVND.min === priceVND.max
      ? `${priceVND.min} VNĐ`
      : `${priceVND.min} - ${priceVND.max} VNĐ`
  }
  return priceUSD.min === priceUSD.max
    ? `$${priceUSD.min} (USD)`
    : `$${priceUSD.min} - $${priceUSD.max} (USD)`
}
