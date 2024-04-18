<script lang="ts" setup>
const props = defineProps<{
  icon: string;
}>();

const symbolId = computed(() => `#icon-${props.icon}`);
</script>
<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<!-- <style lang="scss">
.SvgIcon {}
</style> -->
