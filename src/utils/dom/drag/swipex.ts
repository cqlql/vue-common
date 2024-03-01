import drag from './drag'

interface SwipeOptions {
  elem: HTMLElement
  onDown?(e: TouchEvent | MouseEvent): void | boolean // 可在此处终止滑动开始
  onStart?(e: TouchEvent | MouseEvent): void
  onEnd?(): void
  onMove(xlen: number, e: TouchEvent | MouseEvent): void
  onSwipeLeft(): void // 左滑，显示右边
  onSwipeRight(): void // 右滑，显示左边
  onSwipeNot(): void // 有移动，但没有滑动。 此处可处理超过指定比例，比如 1/3 后进行滑动
}

export default function swipex({
  elem,
  onDown = () => {},
  onStart = () => {},
  onEnd = () => {},
  onMove,
  onSwipeLeft,
  onSwipeRight,
  onSwipeNot,
}: SwipeOptions) {
  let preX: number
  let preY: number
  let preTime: number
  let xData: number[][] = []
  let isStart = false
  let isCancel = false // 触发其他行为情况，比如滚动条

  drag({
    elem,
    onDown(e: TouchEvent | MouseEvent) {
      // 保证滑动动作只激活当前一个实例--弃用，确保灵活性，尽量不在此处控制
      // e.stopPropagation()
      return onDown(e)
    },
    onStart: function (e: TouchEvent | MouseEvent) {
      if (isCancel) return false
      const touch = (e as TouchEvent).touches
        ? (e as TouchEvent).touches[0]
        : (e as MouseEvent)
      const { pageX, pageY } = touch
      preX = pageX
      preY = pageY
      preTime = Date.now()
    },
    onMove: function (e: TouchEvent | MouseEvent) {
      // 保证滑动动作只激活当前一个实例
      e.stopPropagation()
      if (isCancel) return

      const touch = (e as TouchEvent).touches
        ? (e as TouchEvent).touches[0]
        : (e as MouseEvent)
      const { pageX, pageY } = touch
      const currX = pageX
      const currY = pageY
      const xlen = currX - preX
      const ylen = currY - preY
      if (isStart === false) {
        // 手势相对于x轴 小于 45 度情况滑动才开始
        // if (Math.abs(Math.atan(ylen / xlen)) < 1) {
        if (Math.abs(ylen / xlen) < 1) {
          isStart = true
          onStart(e)
        } else {
          isCancel = true
        }
      }

      if (isStart) {
        e.preventDefault()

        const curTime = Date.now()
        const timeLen = curTime - preTime

        xData.push([xlen, timeLen])
        onMove(xlen, e)
        preX = currX
        preY = currY
        preTime = curTime
      }
    },
    onEnd: function () {
      if (isStart) {
        xData.push([0, Date.now() - preTime]) // end
        let x = 0
        let time = 0
        for (let i = xData.length, j = 0; i--; ) {
          const d = xData[i]
          const t = d[1]
          // 时间间隔低于 50ms，保证不能超过 5 个成员叠加
          if (t > 50 || j++ > 5) {
            break
          }
          x += d[0]
          time += t
        }
        const speed = x / time || 0
        const min = 0.15
        if (speed > min) {
          onSwipeRight()
        } else if (speed < -min) {
          onSwipeLeft()
        } else {
          onSwipeNot()
        }
        xData = []
        onEnd()
      }
      isCancel = isStart = false
    },
  })
}
