import { ref } from 'vue'
import Search from './search'

export default function useSearch({
  list,
  getItemText,
  buildItem,
}: {
  list: any[]
  getItemText: (item: any) => string
  buildItem: (p: { keyWrodText: string; rawItem: any }) => any
}) {
  const s = new Search()
  const keyword = ref('')

  const resultList = ref<any[]>([])
  const isEmpty = ref(false)

  function search() {
    s.to({
      keyword: keyword.value,
      list,
      getItemText,
      buildItem,
      cb(result: any) {
        resultList.value = result
        isEmpty.value = result.length === 0
      },
      time: 300,
    })
  }

  return {
    keyword,
    resultList,
    search,
    isEmpty,
  }
}
