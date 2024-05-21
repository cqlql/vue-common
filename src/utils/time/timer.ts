/**
 * 定时器
 *
 * 需求：
 * - 可配置立即
 *
 */
export class Timer {
  private timeId?: ReturnType<typeof setInterval>

  start(fn: () => void, time = 1000) {
    this.stop()
    this.timeId = setInterval(() => {
      fn()
      if (import.meta.env.DEV) {
        console.log('time', this.timeId)
      }
    }, time)
  }
  stop() {
    clearInterval(this.timeId)
  }
}

// 计时
export class Timing {
  stopId?: ReturnType<typeof setInterval>

  // 顺计时，默认0起始
  timeUp(update: (time: number) => false | void, second = 0) {
    this.stop() // 开始前结束，避免开启2次

    this.stopId = setInterval(() => {
      second++
      update(second) === false && this.stop()
    }, 1000)
    update(second) === false && this.stop()
  }
  stop() {
    clearInterval(this.stopId)
  }
  // 倒计时
  timeDown(secondTotal: number, update: (time: number) => void, finish: () => void) {
    this.timeUp((s) => {
      const v = secondTotal - s
      update(v)
      if (!v) {
        this.stop()
        finish()
      }
    })
  }
}
