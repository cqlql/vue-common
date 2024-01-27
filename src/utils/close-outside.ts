export class CloseOutside {
  private isInside = false
  /**避免初始1次以上 */
  private isInitialized = false
  private close = () => {}

  private windowClick() {}

  initWindowClick() {
    if (this.isInitialized) return
    this.isInitialized = true
    this.windowClick = () => {
      setTimeout(() => {
        if (this.isInside) {
          this.isInside = false
          return
        }
        this.close()
      }, 0)
    }
    window.addEventListener('mousedown', this.windowClick, true)
  }

  unWindowClick() {
    window.removeEventListener('mousedown', this.windowClick, true)
    this.isInitialized = false
  }

  clickInside() {
    if (this.isInitialized) {
      this.isInside = true
    }
  }

  setClose(close: () => void) {
    this.close = close
  }
}

export function useCloseOutside(close: () => void) {
  const closeOutside = new CloseOutside()
  closeOutside.initWindowClick()
  closeOutside.setClose(close)
  onUnmounted(() => {
    closeOutside.unWindowClick()
  })

  return {
    clickInside: () => {
      closeOutside.clickInside()
    }
  }
}
