/**
 *
 * @param list
 * @param prizeIndex
 * @param prizeNewIndex
 * @example
 * console.log('result', randomList([1, 2, 3, 4, 5], 1, 2));
 */
export function randomList(list: number[], prizeIndex: number, prizeNewIndex: number) {
  const cloneList = list.slice()
  const newList: number[] = []
  newList.push(cloneList.splice(prizeIndex, 1)[0])
  function loopGet() {
    const len = cloneList.length
    if (len) {
      const index = Math.floor(len * Math.random())
      newList.push(cloneList.splice(index, 1)[0])
      loopGet()
    }
  }

  loopGet()

  // 交换。大奖放到指定位置
  const prizeValue = newList[0]
  newList[0] = newList[prizeNewIndex]
  newList[prizeNewIndex] = prizeValue

  return newList
}

export function randomNumber(num: number) {
  return Math.floor(Math.random() * Math.pow(10, num))
}

export function randomString(num: number) {
  return Math.random().toString(36).substring(2, num)
}
