export default class HeightAnimate {
  el: HTMLElement
  activeClass = ''
  isShow
  isBind = false
  transitionend = () => {}
  constructor({
    el,
    activeClass = '',
    isShow = false,
  }: {
    el: HTMLElement
    activeClass: string
    isShow?: boolean
  }) {
    this.el = el
    this.activeClass = activeClass
    this.isShow = isShow
  }

  slideDown() {
    if (this.isShow) return

    const { el } = this
    el.style.display = 'block'

    el.style.height = ''
    const height = el.offsetHeight

    if (height === 0) {
      return
    }

    el.style.height = '0'
    el.classList.add(this.activeClass)

    this.bindTransitionend(() => {
      el.style.display = 'block'
      this.recovery()
    })
    setTimeout(() => {
      el.style.height = height + 'px'
      this.isShow = true
    }, 1)
  }
  slideUp() {
    if (this.isShow === false) return

    const { el } = this
    const height = el.offsetHeight

    if (height === 0) {
      return
    }

    el.style.height = height + 'px'
    el.classList.add(this.activeClass)
    this.bindTransitionend(() => {
      el.style.display = 'none'
      this.recovery()
    })
    setTimeout(() => {
      el.style.height = '0'
      this.isShow = false
    }, 1)
  }

  recovery() {
    this.isBind = false
    this.el.style.height = ''
    this.el.classList.remove(this.activeClass)
    this.unbindTransitionend()
  }

  bindTransitionend(cb: () => void) {
    this.transitionend = cb
    if (this.isBind) return
    this.isBind = true

    const eventTransitionen = () => {
      this.transitionend()
    }

    this.el.addEventListener('transitionend', eventTransitionen)
    this.el.addEventListener('webkitTransitionEnd', eventTransitionen)
    this.unbindTransitionend = () => {
      this.el.removeEventListener('transitionend', eventTransitionen)
      this.el.removeEventListener('webkitTransitionEnd', eventTransitionen)
    }
  }
  unbindTransitionend() {}
  slideToggle() {
    if (this.isShow) {
      this.slideUp()
    } else {
      this.slideDown()
    }
  }
}
