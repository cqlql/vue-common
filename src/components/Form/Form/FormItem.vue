<template>
  <div class="FormItem">
    <div class="FormItem_label">
      {{ label }}
    </div>
    <div class="FormItem_value">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineProps<{
  label?: string
}>()
</script>
<style lang="scss" scoped>
.FormItem {
  display: flex;
}
.FormItem_label {
  width: 80px;
  text-align: right;
  padding-right: 6px;
}
.FormItem_value {
}
</style>
