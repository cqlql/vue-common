<script lang="ts" setup>
import { ref } from 'vue';
import TimeLine from './TimeLine.vue';



const finishNodes = ref([
  {
    id: '1',
    name: '提交申请',
  },
  {
    id: '2',
    name: '审批人',
  },
  {
    id: '3',
    name: '节点3',
  },
]);
</script>
<template>
  <div class="TimeLineDemo">
    <TimeLine :list="finishNodes">
      <template #default="{item}">
      <div style="padding-right:30px ;"> <input type="radio" /> {{item.name}}</div>
      </template>
    </TimeLine>
  </div>
</template>

<style lang="scss" scoped>
.TimeLineDemo {
  display: flex;
}
</style>
