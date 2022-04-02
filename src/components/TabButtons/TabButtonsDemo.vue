<script lang="ts" setup>
import { ref } from 'vue'
import TabButtons from './TabButtons.vue'
const tabValue = ref('all')
const tabList = ref([
  {
    label: '首页',
    value: 'all',
  },
  {
    label: '线路',
    value: 'line',
  },
  {
    label: '商品',
    value: 'general',
  },
  {
    label: '卡',
    value: 'card',
  },
])
</script>
<template>
  <div>
    <TabButtons
      style="margin-bottom: 10px"
      v-model="tabValue"
      :list="tabList"
    ></TabButtons>

    <TabButtons
      class="vertical"
      v-model="tabValue"
      :list="tabList"
    ></TabButtons>
  </div>
</template>

<style lang="scss" scoped>
.TabButtons.vertical {
  display: block;
  height: auto;
  width: 80px;
  // 滚动条
  // max-height: 80px;
  // overflow: auto;
}
</style>
