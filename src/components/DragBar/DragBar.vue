<script lang="ts" setup>
import drag from '@/utils/dom/drag/drag'
import { isDef } from '@/utils/is'
import type { ObjectDirective } from 'vue'

const props = defineProps<{
  w?: number
  h?: number
  minW?: number
  maxW?: number
  minH?: number
  maxH?: number
  change?: Function
}>()

const emit = defineEmits<{
  (e: 'update:w', v: number): void
  (e: 'update:h', v: number): void
  // (e: 'change'): void
  // (e: 'start'): void
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

        let w = prevWidth + moveLenX
        let h = prevHeight + moveLenY

        if (isDef(props.minW) && w < props.minW) {
          w = props.minW
        } else if (isDef(props.maxW) && w > props.maxW) {
          w = props.maxW
        }

        if (isDef(props.minH) && h < props.minH) {
          h = props.minH
        } else if (isDef(props.maxH) && h > props.maxH) {
          h = props.maxH
        }

        emit('update:w', w)
        emit('update:h', h)
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
