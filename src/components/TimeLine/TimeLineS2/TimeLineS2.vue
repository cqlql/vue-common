<script lang="ts" setup>
import VerticalLine from './src/VerticalLine.vue'

const list = ref<
  {
    id: string
    date: string
    time: string
    tag: string
    status: string
    content: string
  }[]
>([
  {
    id: '1',
    date: '11-27',
    time: '14:20',
    tag: '收',
    status: '已签收',
    content: '亲，您的快递投递成功，有疑问联系【898***】 或致电总部服务热线400******！'
  },
  {
    id: '2',
    date: '11-27',
    time: '14:20',
    tag: '发',
    status: '已签收',
    content: '亲，您的快递投递成功，有疑问联系【898***】 或致电总部服务热线400******！'
  },
  {
    id: '3',
    date: '11-27',
    time: '14:20',
    tag: '收',
    status: '已签收',
    content: '亲，您的快递投递成功，有疑问联系【898***】 或致电总部服务热线400******！'
  }
])
</script>
<template>
  <div class="TimeLineS2">
    <div v-for="(item, index) of list" :key="item.id" class="item">
      <div class="left">
        <div class="date">{{ item.date }}</div>
        <div class="time">{{ item.time }}</div>
      </div>
      <VerticalLine :no-top-line="!index">{{ item.tag }}</VerticalLine>
      <div class="right">
        <div>{{ item.status }}</div>
        <div>{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.TimeLineS2 {
  .item {
    min-height: 100px;
    display: flex;
  }
}
</style>
