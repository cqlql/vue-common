
/**
 * 防抖
 * 指定时间内触发发将重新开始计时
 * 优化性能，高频触发情况只触发最后一次
 *
 * @param {number|object} options
 * @param {number} options.time
 * @param {number} options.time
 */

export default class Debounce {
  constructor ({ callback, time = 300, immediate } = {}) {
    this.cb = callback
    this.time = time
    // this.immediate = immediate
    this.isStart = false
  }

  exec (cb = this.cb, time = this.time) {
    // immediate 立即执行暂时弃用，感觉没必要
    // if (this.immediate && this.isStart === false) {
    //   cb()
    // }
    this.isStart = true

    clearTimeout(this.timeId)

    this.timeId = setTimeout(() => {
      cb()
      this.isStart = false
    }, time)
  }
}

export function debounceInit (options) {
  if (typeof options === 'number') {
    options = {
      time: options
      // immediate: false
    }
  }

  const debounce = new Debounce(options)
  return function (cb, time) {
    debounce.exec(cb, time)
  }
}
