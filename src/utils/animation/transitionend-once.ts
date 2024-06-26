/**
 * end 触发后立马删除。保证一次性使用
 * 多个属性的动画也只会触发一次 end。
 * 注册后删除 transition 导致不触发 transitionend ,然后会造成永久性多次注册？答案是不会，下次动画会触发之前所有end(包括没清理的)，然后removeEventListener删除，只是会在这次动画触发多次end而已
 * */
export default function transitionendOnce(elem: HTMLElement, cb: () => void) {
  function transitionend() {
    elem.removeEventListener('transitionend', transitionend)
    elem.removeEventListener('webkitTransitionEnd', transitionend)
    cb()
  }
  elem.addEventListener('transitionend', transitionend)
  elem.addEventListener('webkitTransitionEnd', transitionend)
}
