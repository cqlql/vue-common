<script lang="ts" setup>
import { useCloseOutside } from './close-outside'

const { clickInside } = useCloseOutside(() => {
  show.value = false
})
const show = ref(false)

function toShow() {
  show.value = !show.value
}
</script>
<template>
  <div>
    <button @mousedown="clickInside" @click="toShow">显示</button>
    <div v-if="show" class="close-outside-demo" @mousedown="clickInside"></div>
  </div>
</template>

<style lang="scss" scoped>
.close-outside-demo {
  // width: ;
  height: 200px;
  background-color: burlywood;
  margin-top: 2px;
}
</style>
