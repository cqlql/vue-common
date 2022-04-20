<script lang="ts" setup>
import { ref, watch } from 'vue'
import Animate from './HeightAnimate'
import $style from './AnimationView.module.scss'

const elRef = ref<HTMLDivElement | null>(null)
let animate: Animate
watch(elRef, (el) => {
  animate = new Animate({
    el: el as HTMLElement,
    activeClass: $style.transition,
  })
})

function expand() {
  let el = elRef.value
  if (el) {
    animate.slideToggle()
  }
}
const list = ref(0)
function add() {
  list.value += 1
}
</script>
<template>
  <div>
    <button @click="add">加一项</button>
    <button @click="expand">展开/收起</button>
    <div class="list" ref="elRef">
      <ul>
        <li> 引流链接 </li>
        <li> 渠道活码 </li>
        <li> 锁客二维码 </li>
        <li v-for="v of list" :key="v">
          {{ v }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.list {
  overflow: hidden;
  display: none;
}

ul {
  border: 2px solid #ddd;
  width: 300px;
}
</style>
