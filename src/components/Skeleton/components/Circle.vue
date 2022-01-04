<template>
  <div class="v-skeleton-item_circle"> </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VCircle',
})
</script>
<style lang="scss">
.v-skeleton-item.v-skeleton-item_circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
