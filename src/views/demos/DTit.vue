<!-- 配合 DCont 使用 -->
<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>
<template>
  <h2 class="DemoTitle">
    <slot v-if="$slots.default"></slot>
    <template v-else>{{ title }}</template>
  </h2>
</template>

<style lang="scss" scoped>
.DemoTitle {
  padding: 10px;
  background-color: #ebf3ff;
  margin: 20px 0;
  margin-left: -10px;
  width: 100%;
  box-sizing: content-box;
}
</style>
