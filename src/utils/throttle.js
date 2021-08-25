
export default class Throttle {
  /**
   *
   * @param {boolean} immediate exec后立即callback
   */
  constructor ({ callback, time = 300, immediate }) {
    this.cb = callback
    this.time = time
    this.immediate = immediate
  }

  exec (cb, time) {
    if (cb) {
      this.cb = cb
    }
    if (time) {
      this.time = time
    }
    if (this.status) return

    this.status = 1

    if (this.immediate) {
      cb()
    }

    setTimeout(() => {
      cb()
      this.status = 0
    }, this.time)
  }
}
