import Debounce from '@/utils/perf/debounce'
import createSearchRegexp from '@/utils/search/create-search-regexp'
import showKeyWrod from '@/utils/search/show-keyword'

export default class SearchCustom {
  debounce
  constructor() {
    this.debounce = new Debounce()
  }

  /**
   *
   */
  to<T>(
    keyword: string,
    list: T[],
    debounceCallback: (resultList: T[] | null) => void,
    getContent: (item: T) => string,
    setNewItem: (item: T, resultContext: string) => void,
    debounceTime = 300,
  ) {
    this.debounce.exec(() => {
      let resultList: T[] = []
      if (keyword) {
        const reg = createSearchRegexp(keyword)
        list.forEach((item) => {
          const content = getContent(item)
          if (reg.test(content)) {
            setNewItem(item, showKeyWrod(content, keyword))
            resultList.push(item)
          }
        })
      } else {
        resultList = list
      }
      if (resultList.length === 0) {
        debounceCallback(null)
      } else {
        debounceCallback(resultList)
      }
    }, debounceTime)
  }
}
