/**
 *
 * @param startEl 起始元素
 * @param targetEl 目标上级元素，必须为参照元素
 *
 * @example
 * var xy = relative(initial, target);
 * @returns
 */
export default function getElRelativeXY(startEl: HTMLElement, targetEl: HTMLElement) {
  let x = 0;
  let y = 0;
  let curr: HTMLElement | null = startEl;

  while (curr !== targetEl) {
    x += curr.offsetLeft;
    y += curr.offsetTop;

    curr = curr.offsetParent as HTMLElement | null;
    if (curr === null) {
      break;
    }
    // 加上边框宽
    if (curr !== targetEl) {
      x += curr.clientLeft;
      y += curr.clientTop;
    }
  }

  return { x, y };
}
