const adapt = (function () {
  // 解决部分安卓手机屏幕宽度值问题
  let getWidth = function () {
    return window.innerWidth
  }
  if (window.innerWidth > window.screen.width) {
    getWidth = function () {
      return window.screen.width
    }
  }

  var style = document.documentElement.style
  return function () {
    // 视口宽度
    var w = getWidth()
    if (!w) return
    if (w > 750) w = 750
    else if (w < 320) w = 320
    // 公式：基础html字体宽度 / 基础屏幕宽度(编码时使用的宽度) / 当前宽度
    style.fontSize = (100 / 375) * w + 'px'
  }
})()

// 防抖
const debounce = (function () {
  let timeId
  return function (callBack, time) {
    clearTimeout(timeId)
    timeId = setTimeout(callBack, time)
  }
})()

addEventListener('resize', () => {
  debounce(adapt, 400)
})

adapt()
