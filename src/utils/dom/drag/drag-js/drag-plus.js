/**
 * 拖动常用封装
 * 此处区别于点点相加。解决点点相加边界限制时可脱离事件原始位置
 *
 */

import drag from './drag.js'

export default function ({ elem, onMove, onDown, onStart = () => {}, onEnd }) {
  const curr = {
    x: 0,
    y: 0
  }
  let startX
  let startY
  let prevX
  let prevY
  const unbind = drag({
    elem,
    onMove (e) {
      const { pageX, pageY } = e.touches ? e.touches[0] : e
      const x = pageX - startX + prevX
      const y = pageY - startY + prevY
      onMove({ lx: x, ly: y, e })
      curr.x = x
      curr.y = y
    },
    onDown,
    onStart (e) {
      onStart(e)
      const { pageX, pageY } = e.touches ? e.touches[0] : e
      startX = pageX
      startY = pageY
      prevX = curr.x
      prevY = curr.y
    },
    onEnd
  })
  return {
    curr,
    unbind
  }
}
