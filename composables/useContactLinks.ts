import { BUSINESS } from "~/config/business.config";

export function useContactLinks() {
  const { t } = useI18n();

  const contactLinks = [
    {
      icon: "fa-solid fa-location-dot",
      textKey: "address",
      href: BUSINESS.googleMapsPlaceUrl,
      target: "_blank",
    },
    {
      icon: "fa-solid fa-phone",
      textKey: "callUs",
      href: `tel:${BUSINESS.phoneDisplay}`,
    },
    {
      icon: "fa-brands fa-whatsapp",
      textKey: "whatsapp",
      href: BUSINESS.whatsappUrl,
      target: "_blank",
    },
    {
      icon: "fa-brands fa-facebook",
      textKey: "facebook",
      href: "https://www.facebook.com/anhtailorvn/",
      target: "_blank",
    },
    {
      icon: "fa-brands fa-google",
      textKey: "reviewUs",
      href: BUSINESS.googleMapsReviewUrl,
      target: "_blank",
    },
    {
      icon: "fa-solid fa-location-dot",
      textKey: "address2",
      href: BUSINESS.googleMapsSearchUrl2,
      target: "_blank",
    },
  ];

  const contactLinksWithTranslations = computed(() => {
    return contactLinks.map((link) => ({
      ...link,
      text: t(`contact.${link.textKey}`),
    }));
  });

  return {
    contactLinks,
    contactLinksWithTranslations,
  };
}
