<script lang="ts" setup>
import { isHttpUrl } from '@/utils/is';

const props = defineProps<{
  icon?: string;
}>();

const iconIsUrl = computed(() => {
  return props.icon && isHttpUrl(props.icon);
});
</script>
<template>
  <i class="van-icon img-icon" v-if="iconIsUrl">
    <img :src="icon" />
  </i>
  <Icon v-else :icon="icon || ''" />
</template>
<style lang="scss">
.img-icon {
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
