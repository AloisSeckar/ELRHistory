export const useModalStore = defineStore('modal-store', {
  state: () => {
    return {
      show: false,
      modalTitle: '',
      modalText: '',
    }
  },
  actions: {
    showModal(title: string, text: string): void {
      this.modalTitle = title
      this.modalText = text
      this.show = true
    },
    hideModal(): void {
      this.show = false
    },
  },
})
