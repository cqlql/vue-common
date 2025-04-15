<script lang="ts" setup>
import type { ObjectDirective } from 'vue';
import { swipe } from './swipe';

const vDom: ObjectDirective<HTMLElement> = {
  mounted(elem) {
    swipe({
      elem,
      onMove(xlen, e) {
        console.log('🚀 -- onMove -- e', xlen, e);
      },
      onSwipeTop() {
        console.log('🚀 -- onSwipeLeft -- onSwipeLeft');
      },
      onSwipeBottom() {
        console.log('🚀 -- onSwipeRight -- onSwipeRight');
      },
      onSwipeNot() {
        console.log('🚀 -- onSwipeNot');
      },
    });
  },
};
</script>
<template>
  <div class="SwipeDemo" v-dom>swipe.demo</div>
</template>

<style lang="scss" scoped>
.SwipeDemo {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  width: 100%;
  height: 600px;
  height: 100%;
  background: #ddd;
}
</style>
