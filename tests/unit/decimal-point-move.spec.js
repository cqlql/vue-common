
/**
 * 移动小数点
 * @param {number} num 要处理的数值
 * @param {number} move 移动的位数
 * @returns {number}
 */
function decimalPointMove (num, move) {
  if (move < 0) {
    const len = Math.abs(move)
    // 往左移动
    num = new Array(len + 2).join('0') + num
    const reg = new RegExp(`(\\d+)(\\d{${len}})\\.{0,1}(\\d*)`)
    num = num.replace(reg, '$1.$2$3') * 1
    return num
  } else if (move > 0) {
    // 往右移动
    num = num + new Array(move + 2).join('0')
    const reg = new RegExp(`(\\d*)\\.(\\d{${move}})(\\d+)`)
    num = num.replace(reg, '$1$2.$3') * 1
    return num
  }
  return num
}

test('移动小数点', async () => {
  expect(decimalPointMove(1.1, -2)).toBe(0.011)
  expect(decimalPointMove(1.1, 2)).toBe(110)
})
