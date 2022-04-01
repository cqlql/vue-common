<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import type { SlideClass } from './typing'

// const list = ref([1, 2, 3])
const slideValue = ref(0)

const props = defineProps<{
  slideClass: SlideClass
}>()

const emits = defineEmits<{
  (e: 'update:slideClass', slideClass: SlideClass): void
  (e: 'end', direction: string): void
}>()

const restoreClass = computed(() => {
  return slideValue.value === 0 ? 'restore' : ''
})

watch(
  () => props.slideClass,
  (value) => {
    if (value === 'slideInRight') {
      slideValue.value += 1
    } else if (value === 'slideInLeft') {
      slideValue.value -= 1
    } else {
      slideValue.value = 0
    }
  },
)

function transitionend() {
  // if (slideValue.value > 0) {
  //   list.value.push(list.value.shift() as number)
  // } else if (slideValue.value < 0) {
  //   list.value.unshift(list.value.pop() as number)
  // }
  let direction = ''
  if (slideValue.value > 0) {
    direction = 'right'
  } else if (slideValue.value < 0) {
    direction = 'left'
  }

  emits('end', direction)
  emits('update:slideClass', '')
}
</script>
<template>
  <div class="SliderOnly">
    <div
      class="SliderOnly_list"
      :class="[slideClass, restoreClass]"
      @transitionend="transitionend"
    >
      <slot></slot>
      <!-- <div class="SliderOnly_item" v-for="v of list" :key="v"
        ><slot :name="'item' + v"></slot
      ></div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
$width: auto;
$height: 100px;
$transition: transform 0.3s ease;

.SliderOnly {
  width: $width;
  height: $height;
  overflow: hidden;
}

.SliderOnly_list {
  width: 100%;
  height: 100%;
  position: relative;

  &.slideInRight {
    transition: $transition;
    transform: translateX(-100%) !important;
  }

  &.slideInLeft {
    transition: $transition;
    transform: translateX(100%) !important;
  }

  &.slideRestore {
    transition: $transition;
    transform: translateX(0) !important;
  }

  &.slideInRight.restore,
  &.slideInLeft.restore {
    transform: translateX(0);
  }
}

.SliderOnly_list > :deep(div) {
  border: 1px solid #ddd;
  position: absolute;
  inset: 0;
  box-sizing: border-box;

  &:first-child {
    transform: translateX(-100%);
  }

  &:last-child {
    transform: translateX(100%);
  }
}
</style>
