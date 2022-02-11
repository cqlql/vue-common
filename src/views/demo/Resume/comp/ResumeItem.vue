<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>
<template>
  <h2>{{ name }}</h2>
  <div class="ResumeItem_content">
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

.ResumeItem_content {
  color: #555;
  padding-left: 10px;
  line-height: 1.6;

  &:deep(ul) {
    padding-left: 20px;
    margin: 0;
  }
}
</style>
