<script lang="ts" setup>
const _props = defineProps<{
  title?: string
}>()
</script>
<template>
  <div class="DemoBlock">
    <div class="tit">
      <slot name="tit" v-if="$slots.tit"></slot>
      <template v-else>{{ title }}</template>
    </div>
    <div class="block">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.DemoBlock {
  .tit {
    // color: var(--van-gray-6);
    padding: 10px;
    background-color: #ebf3ff;
    margin: 20px 0;
  }

  .block {
    // background-color: #fff;
    padding: 0 10px;
  }
}
</style>
