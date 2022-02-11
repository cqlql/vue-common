<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>
<template>
  <h2
    class="text-xl bg-true-gray-200 px-2 py-1 mt-2 mb-1"
    style="background-color: #ededed"
    >{{ name }}</h2
  >
  <div class="text-true-gray-600 px-2">
    <slot></slot>
  </div>
</template>
