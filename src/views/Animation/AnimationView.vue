<script lang="ts" setup>
import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance, ref, watch } from 'vue'
import Animate from './Animate'
const currentInstance = getCurrentInstance()

const elUlRef = ref<HTMLDivElement | null>(null)
const animate = new Animate()
watch(elUlRef, (elUl) => {
  animate.init({
    el: elUl as HTMLElement,
    activeClass: (currentInstance as any).$style.transition,
  })
})

function expand() {
  let elUl = elUlRef.value
  if (elUl) {
    animate.slideToggle()
  }
}
</script>
<template>
  <div>
    <div @click="expand">引流获客</div>
    <ul ref="elUlRef">
      <li> 引流链接 </li>
      <li> 渠道活码 </li>
      <li> 锁客二维码 </li>
    </ul>
  </div>
</template>
<style lang="scss" module>
.transition {
  transition: all 0.3s ease;
}
</style>
