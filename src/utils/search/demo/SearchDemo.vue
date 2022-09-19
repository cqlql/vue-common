<template>
  <div class="SearchDemo">
    <input type="text" v-model="keyword" @input="onInput" />
    <div v-if="isEmpty">暂无数据</div>
    <ul v-else>
      <li v-for="item of resultList" v-html="item.label"></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Search from '@/utils/search/search'
const s = new Search()
let contentData = [
  { label: '朋友带我去看一位收藏家的收藏' },
  { label: '据说他收藏的都是顶级的东西' },
  { label: '随便拿一件来都是价逾千万。' },
]

const keyword = ref('收')

const resultList = ref<{ label: string }[] | null>([])
const isEmpty = ref(false)

function onInput() {
  s.to({
    keyword: keyword.value,
    list: contentData,
    getItemText: (item: any) => item.label,
    buildItem({ keyWrodText }) {
      return {
        label: keyWrodText,
      }
    },
    noMarkKeyword: true,
    cb(result: any[]) {
      resultList.value = result
      isEmpty.value = result.length === 0
    },
    time: 300,
  })
}
onInput()
</script>
<style lang="scss" scoped>
.SearchDemo :deep(b) {
  background-color: yellow;
}
</style>
