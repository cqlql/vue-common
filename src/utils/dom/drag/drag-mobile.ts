import passiveIsSupport from './passiveIsSupport'
import type { TouchDragOptions } from './types'

/**
 * 拖动基础-移动端--针对单指
 * 注意：只要触发onStart,即使没有onMove,都会触发onEnd
 * Created by cql on 2017/2/24.
 *
 * @param elem 绑定元素
 * @param onMove 移动时触发
 * @param [onStart] 可选。拖动开始。
 *   onEnd触发前可能会触发多次。只要松开或者接触时，还有其它手指在屏幕，都会触发此时间
 *   本来可集成在onDown中，但考虑到多点，其中某点触摸结束，此时需单独重新计算移动，但不需要判断是否要移动
 * @param [onDown] 可选。retrun false 可使拖动不触发。可在此位置阻止默认动作
 * @param [onEnd] 可选。拖动结束
 *
 * # 关于阻止默认动作
 *  在onDown 中可以阻止，勿在onStart中阻止
 *
 */
export default function dragMobile({
  elem,
  onMove,
  onDown = function () {},
  onStart = function () {},
  onEnd = function () {}
}: TouchDragOptions) {
  let isStart = false

  function touchstart(e: TouchEvent) {
    if (onDown(e) === false) {
      isStart = false
      return
    }
    isStart = true
    onStart(e)
  }
  function touchmove(e: TouchEvent) {
    if (isStart === false) return
    onMove(e)
  }
  function touchend(e: TouchEvent) {
    if (isStart === false) return
    const touches = e.touches
    if (touches.length === 0) {
      onEnd()
    } else {
      onStart(e)
    }
  }
  function touchcancel() {
    onEnd()
  }
  const opt = passiveIsSupport() ? { passive: false } : false
  elem.addEventListener('touchstart', touchstart, opt)
  elem.addEventListener('touchmove', touchmove, opt)

  elem.addEventListener('touchend', touchend)
  elem.addEventListener('touchcancel', touchcancel)
  return function () {
    elem.removeEventListener('touchstart', touchstart)
    elem.removeEventListener('touchmove', touchmove)
    elem.removeEventListener('touchend', touchend)
    elem.removeEventListener('touchcancel', touchcancel)
  }
}
