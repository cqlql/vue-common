<script lang="ts" setup>
import { createPopper } from '@popperjs/core'
import { nextTick, ref } from 'vue'

let msg = ref('')

let isShow = ref(false)
let eTooltip = ref()
defineExpose({
  show(m: string, el: HTMLElement) {
    msg.value = m
    isShow.value = true

    nextTick(() => {
      createPopper(el, eTooltip.value, {
        placement: 'top'
      })
    })
  },
  hide() {
    isShow.value = false
  }
})
</script>
<template>
  <div v-if="isShow" ref="eTooltip" class="ToolTip">
    {{ msg }}
  </div>
</template>

<style lang="scss" scoped>
.ToolTip {
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
}
</style>
