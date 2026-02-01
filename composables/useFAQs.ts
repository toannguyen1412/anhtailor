export function useFAQs() {
  const { t } = useI18n()

  const faqs = [
    {
      questionKey: 'question1',
      answerKey: 'answer1'
    },
    {
      questionKey: 'question2',
      answerKey: 'answer2'
    },
    {
      questionKey: 'question3',
      answerKey: 'answer3'
    },
    {
      questionKey: 'question4',
      answerKey: 'answer4'
    },
    {
      questionKey: 'question5',
      answerKey: 'answer5'
    },
    {
      questionKey: 'question6',
      answerKey: 'answer6'
    }
  ]

  const faqsWithTranslations = computed(() => {
    return faqs.map((faq, index) => ({
      ...faq,
      question: t(`faq.${faq.questionKey}`),
      answer: t(`faq.${faq.answerKey}`) || '',
      isOpen: false
    }))
  })

  return {
    faqs,
    faqsWithTranslations,
  }
}

