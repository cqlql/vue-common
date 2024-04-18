<script lang="ts" setup>
import Icon from '@/components/Icon/Icon.vue'
import { IconEpArrowDown, IconEpArrowUp } from '@/components/Icon/Iconify-data'
import drag from '@/utils/dom/drag/drag'
import type { ObjectDirective } from 'vue'
const emit = defineEmits<{
  (e: 'minus'): void
  (e: 'plus'): void
}>()
function minus() {
  emit('minus')
}
function add() {
  emit('plus')
}
let timeId: any
const vPress: ObjectDirective = {
  mounted: (el, { modifiers }) => {
    const cb = modifiers.plus ? add : minus
    drag({
      elem: el,
      onStart: () => {
        timeId = setInterval(() => {
          cb()
        }, 100)
      },
      onMove() {},
      onEnd() {
        clearInterval(timeId)
      },
    })
  },
  unmounted: () => {
    clearInterval(timeId)
  },
}
</script>
<template>
  <div class="AddSubtractBar">
    <div class="btn" @mousedown.prevent @mousedown="add" v-press.plus>
      <Icon :icon="IconEpArrowUp" />
    </div>
    <div class="btn" @mousedown.prevent @mousedown="minus" v-press.minus>
      <Icon :icon="IconEpArrowDown" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.AddSubtractBar {
  --color: #999;
  --color-hover: #409eff;

  width: 22px;
  text-align: center;
  cursor: pointer;
  border-inline-start: var(--InputNumber-border-color) 1px solid;
  display: flex;
  flex-direction: column;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    // width: 100%;
    // height: 46px;
    height: 40%;
    flex: auto;
    transition: all 0.2s linear;
    font-size: 7px;
    color: var(--color);

    &:hover {
      // background-color: var(--InputNumber-border-color);
      height: 60%;
      color: var(--color-hover);
    }
  }

  .btn + .btn {
    border-top: var(--InputNumber-border-color) 1px solid;
  }
}
</style>
