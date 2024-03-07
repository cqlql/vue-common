/**
 * 拖动常用封装
 * 此处区别于点点相加。解决点点相加边界限制时可脱离事件原始位置
 */

import drag from './drag'
import type { DragOptions } from './types'

interface DragPlusOptions extends Omit<DragOptions, 'onMove'> {
  onMove(params: {
    lx: number
    ly: number
    mx: number
    my: number
    e: TouchEvent | MouseEvent
  }): void
  getCurrentXY(): { x: number; y: number }
}

export default function dragPlus({
  elem,
  onMove,
  onDown,
  onStart = () => {},
  onEnd,
  getCurrentXY
}: DragPlusOptions) {
  const curr = {
    x: 0,
    y: 0
  }
  let startX = 0
  let startY = 0
  let prevX = 0
  let prevY = 0
  const unbind = drag({
    elem,
    onDown,
    onStart(e, { pageX, pageY }) {
      onStart(e, { pageX, pageY })
      startX = pageX
      startY = pageY
      const curr = getCurrentXY()
      prevX = curr.x
      prevY = curr.y
    },
    onMove(e, { pageX, pageY }) {
      const mx = pageX - startX
      const my = pageY - startY
      const x = mx + prevX
      const y = my + prevY
      onMove({ lx: x, ly: y, mx, my, e })
      curr.x = x
      curr.y = y
    },

    onEnd
  })
  return {
    curr,
    unbind
  }
}
