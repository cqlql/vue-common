/**
 * 拖动基础-pc
 * 针对pc鼠标事件实现
 * 注意：只要触发onStart,即使没有onMove,都会触发onEnd
 *
 * 兼容性：ie9+
 *
 * @param onDown 可通过 return false 阻止拖动发送
 */
export default function drag({
  elem,
  onMove,
  onDown = function () {},
  onStart = function () {},
  onEnd = function () {},
}) {
  // 避免没阻止浏览器默认动作，重复注册
  // 比如拖动拖蓝情况会触发 mousedown 但不触发 mouseup
  let isDarg = false

  let unbindOther = function () {}

  function down(e) {
    if (isDarg || onDown(e) === false) return
    isDarg = true

    onStart(e)

    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)

    unbindOther = function () {
      // 解除所有事件
      document.removeEventListener('mousemove', mousemove)
      document.removeEventListener('mouseup', mouseup)
      unbindOther = function () {}
      isDarg = false
    }

    function mousemove(e) {
      onMove(e)
    }

    function mouseup() {
      onEnd()
      unbindOther()
    }
  }

  elem.addEventListener('mousedown', down)
  return function () {
    elem.removeEventListener('mousedown', down)
    unbindOther()
  }
}
