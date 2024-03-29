// 解决新版 chrome 不支持阻止默认窗口滚动事件
// https://www.chromestatus.com/feature/5093566007214080
// https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener
// https://segmentfault.com/a/1190000007913386
let passiveIsSupport: () => boolean = function () {
  passiveIsSupport = () => false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        passiveIsSupport = () => true
      }
    })
    // @ts-ignore
    window.addEventListener('test', null, opts)
    // eslint-disable-next-line no-empty
  } catch (e) {}
  return passiveIsSupport()
}

export default passiveIsSupport
