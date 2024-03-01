<script lang="ts" setup>
import BaseSwitch from '@/components/Form/BaseSwitch.vue'
const isCurrent = ref(false)
</script>
<template>
  <div class="DemoIndex">
    <div v-if="isCurrent"></div>
    <div v-else>
      <BaseSwitch />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.DemoIndex {
  padding: var(--page-padding);
}
</style>
