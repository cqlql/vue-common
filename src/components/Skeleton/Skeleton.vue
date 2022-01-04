<template>
  <div class="v-skeleton" :class="{ animated }">
    <slot v-if="loading" name="template"></slot>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VSkSkeleton',
})
</script>

<script lang="ts" setup>
defineProps<{
  loading: boolean
  animated?: boolean
}>()
</script>
<style lang="scss">
.v-skeleton {
  &.animated .v-skeleton-item {
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    animation: v-skeleton-loading 1.4s ease infinite;
  }
}

@keyframes v-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }

  to {
    background-position: 0 50%;
  }
}
</style>
