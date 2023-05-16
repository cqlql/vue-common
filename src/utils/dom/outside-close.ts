/**
 * 关于点外面关闭实现思路
 * 给window绑定click，不关闭的元素阻止冒泡
 *
 * 遇到的问题（已解决）
 * 问题：如果有元素的 click 被阻止冒泡将无法关闭
 * 解决：使用 useCapture ，如 window.addEventListener('click', this.windowClick, true)，然后 配合 setTimeout 让window的事件总是后触发
 * 提示：useCapture 特性，跟元素层级有关系,跟注册先后没关系，越顶层越先触发。比如body和子元素div，useCapture 为 true 情况，body先触发
 */

/**
 * 使用 setTimeout 避免被阻止冒泡，比 Node.contains 性能更好
 *
 */
export default class CloseOutside {
  close: () => void = () => {};
  isInside?: boolean;
  private windowClick?: () => void;
  /**避免初始1次以上 */
  private isInit?: boolean;

  init(close: () => void) {
    if (this.isInit) return;
    this.isInit = true;

    this.close = close;

    this.windowClick = () => {
      setTimeout(() => {
        if (this.isInside) {
          this.isInside = false;
          return;
        }
        this.close();
      }, 1);
    };
    window.addEventListener('click', this.windowClick, true);
  }

  clickInside() {
    this.isInside = true;
  }

  destroy() {
    this.isInit = false;
    if (this.windowClick) {
      window.removeEventListener('click', this.windowClick, true);
    }
  }
}

/**
 * 函数方式封装
 * @param {Element, Array} el 不触发关闭的元素。可以是数组指定多个元素，非包含关系时有用
 * @param {Function} outside 点外面触发
 */
export function outsideClose({
  el: els,
  outside,
}: {
  el: HTMLElement | HTMLElement[];
  outside: () => void;
}) {
  if (!Array.isArray(els)) {
    els = [els];
  }

  const closeOutside = new CloseOutside();

  closeOutside.init(outside);

  function inside() {
    closeOutside.clickInside();
  }

  els.forEach((el) => {
    el.addEventListener('click', inside);
  });

  return closeOutside;
}

// 纯函数方式
// export default function outsideClose({
//   el: els,
//   outside,
// }: {
//   el: HTMLElement | HTMLElement[];
//   outside: () => void;
// }) {
//   if (!Array.isArray(els)) {
//     els = [els];
//   }

//   let isOutside = true;

//   function inside() {
//     isOutside = false;
//   }
//   function clickWindow() {
//     setTimeout(function () {
//       if (isOutside) {
//         outside();
//       }
//       isOutside = true;
//     }, 1);
//   }

//   els.forEach((el) => {
//     el.addEventListener('click', inside);
//   });

//   window.addEventListener('click', clickWindow, true);
//   return function () {
//     window.removeEventListener('click', clickWindow, true);
//   };
// }

/**
 * Node.contains 实现，更简单，就是循环多一些，不过对性能影响忽略不计
 */
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
