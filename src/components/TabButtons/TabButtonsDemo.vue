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
    <TabButtons v-model="tabValue" :list="tabList"></TabButtons>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
