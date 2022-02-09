import '../common'

type FrameCallback = (progress: number) => void
type complete = () => void

export default class Animation {
  stopId?: number
  /**
   *
   * @param frameCallback 每帧执行
   * @param duration 动画持续时间(毫秒)
   * @param complete 到达目标位置时回调
   */
  start(frameCallback: FrameCallback, duration = 400, complete: complete) {
    let t = 0 // 当前起始次数
    const interval = 20 // 帧间隔
    const count = duration / interval // 总次数
    const position = 0 // 起始位置
    // let endPosition = 1 // 目标位置
    const length = 1 // 要走的总长度

    const run = () => {
      t++
      if (t < count) {
        frameCallback(this.easing(null, t, position, length, count))
        this.stopId = requestAnimationFrame(run)
      } else {
        // 最后一次
        frameCallback(1)

        this.stopId = undefined

        complete()
      }
    }

    run()
  }

  // 终止动画
  stop() {
    if (this.stopId) cancelAnimationFrame(this.stopId)
  }

  // 缓动类型：可进行更换
  // easeOutQuad
  easing(x: null, t: number, b: number, c: number, d: number) {
    return -c * (t /= d) * (t - 2) + b
  }
}

export function animate(
  frameCallback: FrameCallback,
  duration: number,
  complete: complete,
) {
  const animation = new Animation()
  animation.start(frameCallback, duration, complete)
  return animation
}
