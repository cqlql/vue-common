/**
 * 关于点外面关闭实现思路
 * 1. 给window绑定click，不关闭的元素阻止冒泡
 *    问题：但如何还有其他元素也阻止冒泡也将无法关闭
 */

/**
 * 使用 setTimeout 避免被阻止冒泡，比 Node.contains 性能更好
 * @param {Element, Array} el 不触发关闭的元素。可以是数组指定多个元素，非包含关系时有用
 * @param {Function} outside 点外面触发
 */
export default function outsideClose ({ el: els, outside }) {
  if (!els.forEach) {
    els = [els]
  }
  let isOutside = true

  function inside () {
    isOutside = false
  }
  function clickWindow () {
    setTimeout(function () {
      if (isOutside) {
        outside()
      }
      isOutside = true
    }, 1)
  }

  els.forEach(el => {
    el.addEventListener('click', inside)
  })

  window.addEventListener('click', clickWindow, true)
  return function () {
    window.removeEventListener('click', clickWindow, true)
  }
}

/**
 * 更灵活的实现方式
 *
 * 遇到的问题（已解决）
 * 问题：如果有元素的 click 被阻止冒泡将无法关闭
 * 解决：使用 useCapture ，如 window.addEventListener('click', this.windowClick, true)，然后 配合 setTimeout 让window的事件总是后触发
 * 提示：useCapture 特性，跟元素层级有关系,跟注册先后没关系，越顶层越先触发。比如body和子元素div，useCapture 为 true 情况，body先触发
 */
export class CloseOutside {
  constructor (close) {
    this.close = close
    this.init()
  }

  init () {
    this.windowClick = () => {
      setTimeout(() => {
        if (this.isInside) {
          this.isInside = false
          return
        }
        this.close()
      }, 1)
    }
    window.addEventListener('click', this.windowClick, true)
  }

  clickInside () {
    this.isInside = true
  }

  destroy () {
    window.removeEventListener('click', this.windowClick, true)
  }
}

/* Node.contains 实现，更简单，但性能差些 */
// function outsideClose ({ el: els, onOutside }) {
//   if (!els.forEach) {
//     els = [els]
//   }

//   function outside (e) {
//     const { target } = e
//     let isOutside = true
//     els.forEach(el => {
//       if (el.contains(target)) {
//         isOutside = false
//       }
//     })
//     if (isOutside) {
//       onOutside()
//     }
//   }

//   window.addEventListener('click', outside, true)

//   return function () {
//     window.removeEventListener('click', outside, true)
//   }
// }
