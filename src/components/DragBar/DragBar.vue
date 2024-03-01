<script lang="ts" setup>
import drag from '@/utils/dom/drag/drag'
import type { ObjectDirective } from 'vue'

const props = defineProps<{
  w?: number
  h?: number
  min?: number
  max?: number
  change?: Function
}>()

const emit = defineEmits<{
  (e: 'update:w', v: number): void
  (e: 'update:h', v: number): void
  (e: 'change'): void
  (e: 'start'): void
  (e: 'end'): void
}>()

const vDrag: ObjectDirective = {
  mounted: (elem) => {
    let prevWidth = 0
    let prevHeight = 0
    let prevX = 0
    let prevY = 0
    drag({
      elem,
      onStart: (e, { pageX, pageY }) => {
        e.preventDefault()
        prevWidth = props.w || 0
        prevHeight = props.h || 0
        prevX = pageX
        prevY = pageY
      },
      onMove: (e, { pageX, pageY }) => {
        const moveLenX = pageX - prevX
        const moveLenY = pageY - prevY
        emit('update:w', prevWidth + moveLenX)
        emit('update:h', prevHeight + moveLenY)
      },
      onEnd: () => {
        emit('end')
      }
    })
  }
  // updated: (el, binding) => {
  //   el.style.cursor = 'ew-resize'
  // }
}
</script>

<template>
  <div v-Drag :class="$style.bar"></div>
</template>

<style module>
.bar {
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 100%;
  transform: translateX(50%);
  cursor: e-resize;
}
</style>
