import '../common'

export default class Animation {
  // exec: 反复执行的函数，动画持续时间(毫秒)，到达目标位置时回调
  start(exec, duration = 400, complete = () => {}) {
    let t = 0 // 当前起始次数
    let interval = 20 // 帧间隔
    let count = duration / interval // 总次数
    let position = 0 // 起始位置
    // let endPosition = 1 // 目标位置
    let length = 1 // 要走的总长度

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let that = this

    function run() {
      t++
      if (t < count) {
        exec(that.easing(null, t, position, length, count))
        that.stopId = requestAnimationFrame(run)
      } else {
        // 最后一次
        exec(1)

        that.stopId = undefined

        complete()
      }
    }

    run()
  }

  // 终止动画
  stop() {
    cancelAnimationFrame(this.stopId)
  }

  // 缓动类型：可更换
  // easeOutQuad
  easing(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b
  }
}

export function animate(exec, duration, complete) {
  const animation = new Animation()
  animation.start(exec, duration, complete)
  return animation
}
