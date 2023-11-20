<script lang="ts" setup generic="T=any">
const props = withDefaults(
  defineProps<{
    list: T[];
    k?: string;
  }>(),
  {
    k: 'id',
  },
);

function getKey(item: any, index: number) {
  return props.k ? item[props.k] : index;
}
</script>
<template>
  <div class="TimeLine">
    <div v-for="(item, index) of list" class="item" :key="getKey(item, index)">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$dotTop: 10px;
$dotSize: 10px;
$lineWidth: 3px;
$right: 10px;
$lineColor: #67c23a;

.TimeLine {
  .item {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      right: $right;
      top: 0;
      bottom: 0;
      width: $lineWidth;
      background-color: $lineColor;
    }

    &::after {
      content: '';
      position: absolute;
      top: $dotTop;
      right: $right;
      width: $dotSize;
      height: $dotSize;
      background-color: $lineColor;
      transform: translateX(calc(($dotSize - $lineWidth) / 2));
      border-radius: $dotSize;
      z-index: 1;
    }
  }

  .item:first-child {
    &::before {
      top: calc($dotTop + ($dotSize / 2));
    }
  }

  .item:last-child {
    &::before {
      top: 0;
      bottom: auto;
      height: calc($dotTop + ($dotSize/2));
    }
  }
}
</style>
