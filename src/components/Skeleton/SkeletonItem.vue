<template>
  <div class="v-skeleton-item">
    <component :is="'v-' + variant"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import image from './comps/Image.vue'
export default defineComponent({
  components: {
    VImage: image,
  },
})
</script>

<script lang="ts" setup>
// import VImage from './comps/Image.vue'

defineProps<{
  variant?: 'image'
}>()
</script>
<style lang="scss">
.v-skeleton-item {
  background: #f2f2f2;
  // display: inline-block;
  height: 16px;
  border-radius: 4px;
}
</style>
