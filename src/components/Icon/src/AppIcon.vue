<script lang="ts" setup>
import ImgIcon from './ImgIcon.vue';

defineProps<{
  icon?: string;
}>();
</script>
<template>
  <ImgIcon class="app-icon" :icon="icon || 'el-icon-s-grid'" />
</template>

<style lang="scss">
.app-icon {
  width: 1em;
  height: 1em;
  background-color: var(--el-color-primary-light-3);
  border-radius: 6px;
  color: #fff;
  overflow: hidden;

  & > * {
    font-size: 0.8em;
  }
}
</style>
