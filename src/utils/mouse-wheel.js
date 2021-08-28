
let mouseWheel = function (el, cb) {
  if (el.onwheel !== undefined) { // 高版本浏览器
    mouseWheel = function (el, cb) {
      el.addEventListener('wheel', cb)
      return function () {
        el.removeEventListener('wheel', cb)
      }
    }
  } else if (el.onmousewheel !== undefined) { // 旧版 chrome 和 IE
    if (el.addEventListener) { // ie9+、chrome
      mouseWheel = function (el, cb) {
        function wheel (e) {
          if ('deltaY' in e === false) {
            (e).deltaY = -1 / 40 * (e).wheelDelta
          }
          cb(e)
        }
        el.addEventListener('mousewheel', wheel)
        return function () {
          el.removeEventListener('mousewheel', wheel)
        }
      }
    }
    // else { // ie678
    //   mouseWheel = function (el: , cb: (e: WheelEvent) => void) {
    //     function wheel (this, e) {
    //       (e).deltaY = -1 / 40 * (e).wheelDelta
    //       cb.call(this, e as WheelEvent)
    //     }
    //     el.attachEvent('onmousewheel', wheel)
    //     return function () {
    //       el.detachEvent('onmousewheel', wheel)
    //     }
    //   }
    // }
  } else { // 低版本firefox
    mouseWheel = function (el, cb) {
      function wheel (e) {
        if ('deltaY' in e === false) {
          (e).deltaY = (e).detail
        }
        cb(e)
      }
      el.addEventListener('DOMMouseScroll', wheel)
      return function () {
        el.removeEventListener('DOMMouseScroll', wheel)
      }
    }
  }
  return mouseWheel(el, cb)
}

export default mouseWheel
