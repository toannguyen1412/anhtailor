export const useContactLinks = () => {
  const { t } = useI18n()

  const contactLinks = [
    {
      icon: 'fa-solid fa-location-dot',
      textKey: 'address',
      href: 'https://g.co/kgs/G3Ya5nd',
      target: '_blank'
    },
    {
      icon: 'fa-solid fa-phone',
      textKey: 'callUs',
      href: 'tel:0345197864'
    },
    {
      icon: 'fa-brands fa-whatsapp',
      textKey: 'whatsapp',
      href: 'https://wa.me/84345197864',
      target: '_blank'
    },
    {
      icon: 'fa-brands fa-facebook',
      textKey: 'facebook',
      href: 'https://www.facebook.com/anhtailorvn/',
      target: '_blank'
    },
    {
      icon: 'fa-brands fa-google',
      textKey: 'reviewUs',
      href: 'https://g.page/r/Ca9pQceWoUdEEBE/review',
      target: '_blank'
    }
  ]

  const contactLinksWithTranslations = computed(() => {
    return contactLinks.map(link => ({
      ...link,
      text: t(`contact.${link.textKey}`)
    }))
  })

  return {
    contactLinks,
    contactLinksWithTranslations
  }
}

