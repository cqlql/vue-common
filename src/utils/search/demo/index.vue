<template>
  <div class="SearchDemo">
    <input type="text" v-model="keyword" />
    <div class="SearchDemo_result" v-html="result"> </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import showKeyWrod from '@/utils/search/show-key-word'

const keyword = ref('你 世')
const result = computed(() => {
  return showKeyWrod('你好，世界', keyword.value)
})
</script>
<style lang="scss" scoped>
.SearchDemo {
  padding: 10px;
}
.SearchDemo_result {
  padding: 10px 0;
}
.SearchDemo::v-deep b {
  background-color: yellow;
}
</style>
