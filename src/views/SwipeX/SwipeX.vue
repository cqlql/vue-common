<script lang="ts" setup>
import swipex from '@/utils/dom/drag/swipex'
import { ref, watch } from 'vue'
const el = ref<HTMLDivElement | null>(null)
watch(el, (elem) => {
  if (elem) {
    swipex({
      elem,
      onMove(xlen, e) {
        console.log('🚀 -- onMove -- e', xlen, e)
      },
      onSwipeLeft() {
        console.log('🚀 -- onSwipeLeft -- onSwipeLeft')
      },
      onSwipeRight() {
        console.log('🚀 -- onSwipeRight -- onSwipeRight')
      },
      onSwipeNot() {
        console.log('🚀 -- onSwipeNot')
      },
    })
  }
})
</script>
<template>
  <div class="SwipeX" ref="el"> SwipeX </div>
</template>

<style lang="scss" scoped>
.SwipeX {
  width: 300px;
  height: 300px;
  background: #ddd;
}
</style>
