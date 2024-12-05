/**分页计算 */
export function paginationCalculate({
  pageIndex,
  pageCount,
  // aroundNum,
  sideNum,
}: {
  pageIndex: number;
  /**总页数 */
  pageCount: number;
  /**头尾按钮数 */
  // aroundNum: number;
  /**当前按钮旁边显示的个数，不包括省略按钮 */
  sideNum: number;
}) {
  /**头尾按钮数，固定为1 */
  const aroundNum = 1;
  // 当前页按钮左边总数，等于当前右边，1表示省略按钮
  const currLeftTotal = aroundNum + sideNum + 1;

  const btnTotal = currLeftTotal * 2 + 1; // 总按钮数
  const btns: (number | null)[] = [];

  // 总页数小于等于按钮总数，即都没有省略按钮
  if (pageCount <= btnTotal) {
    for (let i = 0; i < pageCount; i++) {
      btns.push(i);
    }
  } else {
    // 左边没有省略，右边有
    if (pageIndex <= currLeftTotal) {
      for (let i = 0; i < pageIndex; i++) {
        btns.push(i);
      }

      btns.push(pageIndex);

      for (let i = pageIndex + 1, len = btnTotal - aroundNum - 1; i < len; i++) {
        btns.push(i);
      }

      // 省略按钮
      btns.push(null);
      // 尾页--目前固定为1
      btns.push(pageCount - 1);
    }
    // 左边有省略，右边没有
    else if (pageIndex >= pageCount - currLeftTotal - 1) {
      // 头页--目前固定为1
      btns.push(0);
      // 省略按钮
      btns.push(null);

      for (let i = 0, len = btnTotal - 2; i < len; i++) {
        btns.push(pageCount - len + i);
      }
    }
    // 左右都有省略
    else {
      // 头页--目前固定为1
      btns.push(0);
      // 省略按钮
      btns.push(null);
      for (let i = 0; i < sideNum; i++) {
        btns.push(pageIndex + i - sideNum);
      }

      btns.push(pageIndex);

      for (let i = 0; i < sideNum; i++) {
        btns.push(pageIndex + i + 1);
      }

      // 省略按钮
      btns.push(null);
      // 尾页--目前固定为1
      btns.push(pageCount - 1);
    }
  }

  return btns;
}
