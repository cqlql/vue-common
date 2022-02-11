<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>
<template>
  <h2>{{ name }}</h2>
  <div class="text-gray-600 px-2">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  background-color: #ededed;
  font-size: 22px;
  padding: 5px 8px;
  margin: 8px 0 5px;
}
</style>
