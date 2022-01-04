<template>
  <component class="v-skeleton-item" :is="'v-' + variant"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VImage from './components/Image.vue'
import VText from './components/Text.vue'
import VCircle from './components/Circle.vue'
export default defineComponent({
  components: {
    VImage,
    VText,
    VCircle,
  },
})
</script>

<script lang="ts" setup>
// import VImage from './comps/Image.vue'

withDefaults(
  defineProps<{
    variant?: 'text' | 'image' | 'circle'
  }>(),
  {
    variant: 'text',
  },
)
</script>
<style lang="scss">
.v-skeleton-item {
  background: #f2f2f2;
  // display: inline-block;
  height: 16px;
  border-radius: 4px;
}
</style>
