<template>
  <div class="UseSearchDemo">
    <input type="text" v-model="keyword" @input="search" />
    <div v-if="isEmpty">暂无数据</div>
    <ul v-else>
      <li v-for="item of resultList" v-html="item.label"></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import useSearch from '@/utils/search/useSearch'

let searchList = [
  { label: '朋友带我去看一位收藏家的收藏' },
  { label: '据说他收藏的都是顶级的东西' },
  { label: '随便拿一件来都是价逾千万。' },
]

const { keyword, search, resultList, isEmpty } = useSearch({
  list: searchList,
  getItemText: (item: any) => item.label,
  buildItem({ keyWrodText }) {
    return {
      label: keyWrodText,
    }
  },
})

search()
</script>
<style lang="scss" scoped>
.UseSearchDemo :deep(b) {
  background-color: yellow;
}
</style>
