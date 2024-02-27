<script lang="ts" setup>
const props = defineProps<{
  noTopLine?: boolean
}>()
</script>
<template>
  <div class="VerticalLine">
    <div class="VerticalLine-top" :class="{ noTopLine }"></div>
    <div class="m">
      <slot></slot>
    </div>
    <div class="b"></div>
  </div>
</template>

<style lang="scss" scoped>
.VerticalLine {
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  --line-width: 2px;
  --line-color: blue;
  --node-width: 30px;
  --line-left: calc(var(--node-width) / 2 - var(--line-width) / 2);
  // --node-width: 30px;

  .VerticalLine-top {
    height: 30px;
    // width: var(--line-width);
    // background-color: var(--line-color);
    margin-left: var(--line-left);
    border-left: var(--line-width) dashed var(--line-color);
  }

  .VerticalLine-top.noTopLine {
    opacity: 0;
  }

  .m {
    width: var(--node-width);
    height: var(--node-width);
    background-color: #a7a7a7;
    border-radius: var(--node-width);
    text-align: center;
    line-height: var(--node-width);
  }

  .b {
    flex: 1;
    margin-left: var(--line-left);
    border-left: var(--line-width) dashed var(--line-color);
  }
}
</style>
