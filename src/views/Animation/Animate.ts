export default class Animate {
  el: HTMLElement | undefined
  height = 0
  activeClass = ''
  init({ el, activeClass }: { el: HTMLElement; activeClass: string }) {
    this.el = el
    this.activeClass = activeClass
  }

  slideUp() {
    const { el } = this
    if (el) {
      el.style.display = 'block'
      this.height = el.offsetHeight
      el.style.display = 'none'
      el.classList.add(this.activeClass)
      setTimeout(() => {
        el.style.height = this.height + 'px'
      }, 1)
    }
  }
  slideDown() {}
  slideToggle() {}
}
