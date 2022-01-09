<script lang="ts" setup>
import waitTime from '@/utils/timer/wait-time'
import VTurntable from './Turntable.vue'

async function waitResult() {
  await waitTime(1000)
  return 0
}
</script>
<template>
  <div class="TurntableView">
    <VTurntable :wait="waitResult" />
  </div>
</template>

<style lang="scss">
.TurntableView_turntable {
  width: 500px;
  height: 500px;
  background-color: #ddd;
  border-radius: 200%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
