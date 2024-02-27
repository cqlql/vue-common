<script lang="ts" setup>
import { ref } from 'vue'
import TimeLine from './TimeLine.vue'
import DemoBlock from '@/views/demos/DemoBlock.vue'
import VerticalLine from './TimeLineS2/src/VerticalLine.vue'
import TimeLineS2 from './TimeLineS2/TimeLineS2.vue'

const finishNodes = ref([
  {
    id: '1',
    name: '提交申请'
  },
  {
    id: '2',
    name: '审批人'
  },
  {
    id: '3',
    name: '节点3'
  }
])
</script>
<template>
  <div class="TimeLineDemo">
    <div style="display: flex">
      <TimeLine :list="finishNodes">
        <template #default="{ item }">
          <div style="padding: 30px"><input type="radio" /> {{ item.name }}</div>
        </template>
      </TimeLine>
    </div>

    <DemoBlock title="TimeLine 风格2">
      <div style="height: 100px; display: flex">
        <VerticalLine>收</VerticalLine>
      </div>
      <div style="height: 100px; display: flex">
        <VerticalLine />
      </div>
      <div style="height: 100px; display: flex">
        <VerticalLine no-top-line />
      </div>

      <div style="border: 1px solid red">
        <TimeLineS2 />
      </div>
    </DemoBlock>
  </div>
</template>

<style lang="scss" scoped>
.TimeLineDemo {
  // display: flex;

  :deep(.VerticalLine-top) {
    height: 10px;
  }
}
</style>
