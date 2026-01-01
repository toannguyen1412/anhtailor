export const useFeedbacks = () => {
  const { t } = useI18n()

  const feedbackImages = Array.from({ length: 23 }, (_, i) => ({
    src: `/images/feedback/customer (${i + 1}).jpg`,
    altKey: 'customerPhoto',
    index: i + 1
  }))

  const feedbackImagesWithTranslations = computed(() => {
    return feedbackImages.map(image => ({
      ...image,
      alt: t('viewCustomerPhoto').replace('{index}', image.index.toString()) + ' - Anh Tailor'
    }))
  })

  const textFeedbacks = [
    {
      name: 'Nguyễn Văn An',
      content: 'Giá rất hợp lý và thời gian may nhanh chỉ 2-3 ngày! Chất lượng áo veston rất tốt, vừa vặn hoàn hảo. Rất đáng tiền!',
      country: 'Vietnam',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      content: 'Unbelievable price for such quality! Got my suit ready in just 2 days. The price is very reasonable compared to other tailors. Highly recommend!',
      country: 'United States',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      content: 'Amazing value for money! My custom vest was ready in 3 days and the price was so affordable. Quality is excellent. Will definitely return!',
      country: 'Australia',
      rating: 5
    },
    {
      name: 'James Anderson',
      content: 'Fast service and great prices! My suit was completed in 2 days. Very affordable compared to back home. Quality is outstanding!',
      country: 'Canada',
      rating: 5
    },
    {
      name: 'Jean-Pierre Dubois',
      content: 'Prix très raisonnable et service rapide! Mon costume était prêt en seulement 2-3 jours. Excellent rapport qualité-prix. Je recommande!',
      country: 'France',
      rating: 5
    },
    {
      name: 'Giovanni Rossi',
      content: 'Prezzo molto conveniente e tempi rapidi! Il vestito è stato completato in 2-3 giorni. Qualità eccellente a un prezzo giusto. Consiglio!',
      country: 'Italy',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      content: 'Precio muy razonable y servicio rápido! Mi traje estuvo listo en solo 2-3 días. Excelente calidad por un precio justo. ¡Recomiendo!',
      country: 'Spain',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      content: 'Great prices and super fast! My wedding suit was ready in just 2 days. Very affordable and the quality is perfect. Highly satisfied!',
      country: 'United Kingdom',
      rating: 5
    },
    {
      name: 'Yuki Tanaka',
      content: '価格がとても手頃で、仕立ても早い！2-3日で完成しました。品質も良く、コストパフォーマンスが最高です。おすすめします！',
      country: 'Japan',
      rating: 5
    },
    {
      name: 'Trần Thị Hoa',
      content: 'Giá rẻ mà chất lượng tốt! Áo veston may chỉ 2 ngày là xong. Rất hợp lý so với các tiệm khác. Sẽ quay lại!',
      country: 'Vietnam',
      rating: 5
    },
    {
      name: 'David Brown',
      content: 'Incredible value! Got my business suit in 3 days at a fraction of the price I would pay at home. Fast service and excellent quality!',
      country: 'United States',
      rating: 5
    },
    {
      name: 'Lisa Wilson',
      content: 'So affordable and quick! My blazer was ready in 2 days. The price is very reasonable and the fit is perfect. Great service!',
      country: 'Australia',
      rating: 5
    },
    {
      name: 'Robert Taylor',
      content: 'Fast turnaround and fair prices! My waistcoat was completed in 2-3 days. Much cheaper than expected with excellent quality!',
      country: 'Canada',
      rating: 5
    },
    {
      name: 'Sophie Martin',
      content: 'Prix excellent et délai très rapide! Mon costume était prêt en 2 jours. Qualité parfaite pour un prix si raisonnable. Parfait!',
      country: 'France',
      rating: 5
    },
    {
      name: 'Marco Bianchi',
      content: 'Servizio veloce e prezzi onesti! Il mio vestito è stato completato in 3 giorni. Ottimo rapporto qualità-prezzo. Molto soddisfatto!',
      country: 'Italy',
      rating: 5
    },
    {
      name: 'Carlos Rodriguez',
      content: 'Precio muy justo y entrega rápida! Mi traje estuvo listo en 2 días. Calidad excelente a un precio muy razonable. ¡Excelente!',
      country: 'Spain',
      rating: 5
    },
    {
      name: 'Thomas Wright',
      content: 'Amazing prices and super fast service! My suit was ready in 2-3 days. Very affordable and the quality exceeded my expectations!',
      country: 'United Kingdom',
      rating: 5
    },
    {
      name: 'Hiroshi Yamamoto',
      content: '手頃な価格で迅速なサービス！2日で完成しました。品質も良く、価格も非常に合理的です。大満足です！',
      country: 'Japan',
      rating: 5
    },
    {
      name: 'Lê Minh Đức',
      content: 'Giá cả hợp lý, thời gian may nhanh chóng! Chỉ 2-3 ngày là có áo veston. Chất lượng tốt, giá rẻ hơn nhiều nơi khác. Rất hài lòng!',
      country: 'Vietnam',
      rating: 5
    },
    {
      name: 'Jennifer Smith',
      content: 'Great value and fast delivery! My custom shirt was ready in 2 days. The price is very reasonable and the quality is excellent!',
      country: 'United States',
      rating: 5
    },
    {
      name: 'Peter Mitchell',
      content: 'Affordable prices and quick service! Got my suit in 3 days. Much cheaper than I expected with perfect quality. Highly recommend!',
      country: 'Australia',
      rating: 5
    },
    {
      name: 'Matthew Brown',
      content: 'Fast service and great prices! My waistcoat was completed in 2-3 days. Very affordable with perfect quality!',
      country: 'Canada',
      rating: 5
    },
    {
      name: 'Isabelle Moreau',
      content: 'Prix excellent et service ultra rapide! Mon costume était prêt en 2 jours. Qualité parfaite pour un prix si raisonnable!',
      country: 'France',
      rating: 5
    },
    {
      name: 'Roberto Verdi',
      content: 'Prezzi fantastici e tempi rapidissimi! Il mio vestito è stato completato in 2 giorni. Qualità eccellente a prezzo giusto!',
      country: 'Italy',
      rating: 5
    }
  ]

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffSeconds = Math.floor(diffMs / 1000)
    const diffMinutes = Math.floor(diffSeconds / 60)
    const diffHours = Math.floor(diffMinutes / 60)
    const diffDays = Math.floor(diffHours / 24)
    const diffMonths = Math.floor(diffDays / 30)
    const diffYears = Math.floor(diffDays / 365)
    const timeAgo = {
      justNow: t('timeAgo.justNow'),
      minute: t('timeAgo.minute'),
      minutes: t('timeAgo.minutes'),
      hour: t('timeAgo.hour'),
      hours: t('timeAgo.hours'),
      day: t('timeAgo.day'),
      days: t('timeAgo.days'),
      week: t('timeAgo.week'),
      weeks: t('timeAgo.weeks'),
      month: t('timeAgo.month'),
      months: t('timeAgo.months'),
      year: t('timeAgo.year'),
      years: t('timeAgo.years'),
      ago: t('timeAgo.ago')
    }

    if (diffYears > 0) {
      const remainingMonths = Math.floor((diffDays % 365) / 30)
      if (remainingMonths > 0) {
        return `${diffYears} ${diffYears > 1 ? timeAgo.years : timeAgo.year} ${remainingMonths} ${remainingMonths > 1 ? timeAgo.months : timeAgo.month} ${timeAgo.ago}`
      }
      return `${diffYears} ${diffYears > 1 ? timeAgo.years : timeAgo.year} ${timeAgo.ago}`
    } else if (diffMonths > 0) {
      const remainingDays = diffDays % 30
      if (remainingDays > 7) {
        const weeks = Math.floor(remainingDays / 7)
        return `${diffMonths} ${diffMonths > 1 ? timeAgo.months : timeAgo.month} ${weeks} ${weeks > 1 ? timeAgo.weeks : timeAgo.week} ${timeAgo.ago}`
      }
      return `${diffMonths} ${diffMonths > 1 ? timeAgo.months : timeAgo.month} ${timeAgo.ago}`
    } else if (diffDays > 0) {
      if (diffDays >= 7) {
        const weeks = Math.floor(diffDays / 7)
        return `${weeks} ${weeks > 1 ? timeAgo.weeks : timeAgo.week} ${timeAgo.ago}`
      }
      return `${diffDays} ${diffDays > 1 ? timeAgo.days : timeAgo.day} ${timeAgo.ago}`
    } else if (diffHours > 0) {
      return `${diffHours} ${diffHours > 1 ? timeAgo.hours : timeAgo.hour} ${timeAgo.ago}`
    } else if (diffMinutes > 0) {
      return `${diffMinutes} ${diffMinutes > 1 ? timeAgo.minutes : timeAgo.minute} ${timeAgo.ago}`
    } else {
      return timeAgo.justNow
    }
  }

  const feedbacksWithDates = computed(() => {
    const now = new Date()
    
    const feedbacks = textFeedbacks.map((feedback, index) => {
      const totalFeedbacks = textFeedbacks.length
      const progress = totalFeedbacks > 1 ? index / (totalFeedbacks - 1) : 0
      const daysAgo = 1095 * (1 - progress) + 7 * progress
      
      const feedbackDate = new Date(now)
      feedbackDate.setDate(feedbackDate.getDate() - Math.round(daysAgo))
      
      return {
        ...feedback,
        date: formatTimeAgo(feedbackDate)
      }
    })
    
    return feedbacks.reverse()
  })

  return {
    feedbackImages,
    feedbackImagesWithTranslations,
    textFeedbacks,
    feedbacksWithDates
  }
}

