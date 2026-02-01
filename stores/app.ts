import { defineStore } from 'pinia'

/** Store cho trạng thái UI dùng chung */
export const useAppStore = defineStore('app', {
  state: () => ({
    showWhatsAppQR: false,
    showLightbox: false,
    openFaqIndex: null as number | null
  }),
  actions: {
    toggleWhatsAppQR() {
      this.showWhatsAppQR = !this.showWhatsAppQR
    },
    setWhatsAppQR(show: boolean) {
      this.showWhatsAppQR = show
    },
    toggleLightbox() {
      this.showLightbox = !this.showLightbox
    },
    setLightbox(show: boolean) {
      this.showLightbox = show
    },
    setFaqIndex(index: number | null) {
      this.openFaqIndex = index
    },
    toggleFaq(index: number) {
      this.openFaqIndex = this.openFaqIndex === index ? null : index
    }
  }
})
