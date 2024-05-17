<script lang="ts" setup>
import { ref } from 'vue'
import SliderOnly from './SliderOnly.vue'
import useSliderFast from './hooks/useSliderFast'
import useSwipex from './hooks/useSwipex'

const vSliderOnly = ref<{ $el: HTMLDivElement } | null>(null)

const list = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }])

const { listView, inLeft, inRight, slideRestore, slideClass, transitionend } = useSliderFast(list)

const { transitionend: endSwipe } = useSwipex({
  vSliderOnly,
  inLeft,
  inRight,
  slideRestore,
})

function handleTransitionend(direction: string) {
  transitionend(direction)
  endSwipe()
}
</script>
<template>
  <button @click="inLeft">
    <Icon icon="ic:twotone-keyboard-arrow-left" />
  </button>
  <button @click="inRight"><Icon icon="ic:twotone-keyboard-arrow-right" /></button>
  <SliderOnly ref="vSliderOnly" v-model:slideClass="slideClass" @end="handleTransitionend">
    <div class="SliderOnly_item" v-for="item of listView" :key="item.id">
      {{ item.id }}
    </div>
  </SliderOnly>
</template>

<style lang="scss" scoped>
$width: 100px;
$height: 100px;

.SliderFast {
}

.SliderFast_list {
}

// .SliderOnly_item {
//   border: 1px solid #ddd;
//   position: absolute;
//   inset: 0;
//   box-sizing: border-box;

//   &:first-child {
//     transform: translateX(-100%);
//   }

//   &:last-child {
//     transform: translateX(100%);
//   }
// }
</style>
