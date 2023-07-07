// export default function search (keyword:string, list:string[], debounceTime:number) {
//   return null
// }

import Debounce from '../perf/debounce'
import { createRegexp, keywordHighlight } from './keyword-search'

interface SearchParams {
  keyword: string
  list: any[]
  getItemText: (item: any) => string
  buildItem: (p: { keyWrodText: string; rawItem: any }) => any
  cb: (resultList: any[]) => void
  time: number
  noMarkKeyword?: boolean
}

export default class Search {
  debounce
  constructor() {
    this.debounce = new Debounce()
  }

  /**
   *
   * @param keyword
   * @param list
   * @returns {null} 没找到
   * @returns {string[]} 找到并且有标记，或者空字符串输出所有
   */
  to(params: SearchParams) {
    let { keyword, list, getItemText, buildItem, time, cb, noMarkKeyword } =
      params
    this.debounce.exec(() => {
      let resultList: any[] = []
      keyword = keyword.trim()
      if (keyword) {
        const reg = createRegexp(keyword)
        const handleText = noMarkKeyword ? (text: string) => text : keywordHighlight

        list.forEach((item) => {
          let content = getItemText(item)
          if (reg.test(content)) {
            resultList.push(
              buildItem({
                keyWrodText: handleText(content, keyword),
                rawItem: item,
              }),
            )
          }
        })
      } else {
        resultList = list
      }
      cb(resultList)
    }, time)
  }
}
