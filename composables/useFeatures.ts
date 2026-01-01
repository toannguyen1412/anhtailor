export const useFeatures = () => {
  const { t } = useI18n()

  const features = [
    {
      key: 'customDesign',
      icon: 'fa-solid fa-laptop',
      nameKey: 'customDesign'
    },
    {
      key: 'madeToOrder',
      icon: 'fa-solid fa-ruler-combined',
      nameKey: 'madeToOrder'
    },
    {
      key: 'premiumFabric',
      icon: 'fa-solid fa-th',
      nameKey: 'premiumFabric'
    },
    {
      key: 'onlineOrStore',
      icon: 'fa-solid fa-bag-shopping',
      nameKey: 'onlineOrStore'
    }
  ]

  const featuresWithTranslations = computed(() => {
    return features.map(feature => ({
      ...feature,
      name: t(`features.${feature.nameKey}`)
    }))
  })

  return {
    features,
    featuresWithTranslations
  }
}

