// 计时
export default class Timing {
  stopId: number | undefined

  // 顺计时，默认0起始
  start(update: (time: number) => false | void, second = 0) {
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
  timeDown(
    secondTotal: number,
    update: (time: number) => void,
    finish: () => void,
  ) {
    this.start((s) => {
      let v = secondTotal - s
      update(v)
      if (!v) {
        this.stop()
        finish()
      }
    })
  }
}
