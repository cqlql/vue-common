/**
 * 拖动常用封装
 * 此处区别于点点相加。解决点点相加边界限制时可脱离事件原始位置
 *
 */

import drag from './drag'

export default function ({ elem, onMove, onDown, onStart = () => {}, onEnd, getCurrentXY }) {
  let startX
  let startY
  let prevX
  let prevY
  const unbind = drag({
    elem,
    onMove(e) {
      const { pageX, pageY } = e.touches ? e.touches[0] : e
      const mx = pageX - startX
      const my = pageY - startY
      const x = mx + prevX
      const y = my + prevY
      onMove({ lx: x, ly: y, mx, my, e })
    },
    onDown,
    onStart(e) {
      onStart(e)
      const { pageX, pageY } = e.touches ? e.touches[0] : e
      startX = pageX
      startY = pageY
      const curr = getCurrentXY()
      prevX = curr.x
      prevY = curr.y
    },
    onEnd
  })
  return unbind
}
