import type { LocaleCode } from '~/config/site.config'
import { formatPrice } from '~/utils/format'

export function useServices() {
  const services = [
    {
      icon: "fa-solid fa-user-tie",
      nameKey: "suits",
      priceUSD: { min: 380, max: 400 },
      priceVND: { min: "9tr", max: "10tr" },
      images: [
        "https://images.unsplash.com/photo-1515736076039-a3ca66043b27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVzdG9uJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1685606867476-dc5b77a2bf3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVzdG9uJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1529635229076-82fefed713c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZlc3RvbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1647900669139-1a968c4091e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlc3RvbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1592878956815-2feeac767f7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZlc3RvbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmVzdG9uJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      icon: "fa-solid fa-shirt",
      nameKey: "shirts",
      priceUSD: { min: 40, max: 60 },
      priceVND: { min: "1tr500k", max: "2tr" },
      images: [
        "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1656453260437-4f4da3ef81dc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      icon: "fa-solid fa-shirt",
      nameKey: "waistcoat",
      priceUSD: { min: 150, max: 180 },
      priceVND: { min: "4tr", max: "5tr" },
      images: [
        "https://images.unsplash.com/photo-1593032288331-711b99d4fa74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVzdHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1593029762624-0c28669f2056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVzdHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1662833595899-07c57d617f56?q=80&w=769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1504791635568-fa4993808e0a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1632226390535-2f02c1a93541?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  ];

  const { t, locale } = useI18n()

  const servicesWithTranslations = computed(() =>
    services.map((service) => ({
      ...service,
      name: t(`services.${service.nameKey}.name`),
      description: t(`services.${service.nameKey}.description`),
      detailDescription: t(`services.${service.nameKey}.detailDescription`),
      price: formatPrice(service.priceUSD, service.priceVND, locale.value as LocaleCode),
    }))
  )

  return {
    services,
    servicesWithTranslations,
  }
}
