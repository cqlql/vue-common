<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VTurntable',
})
</script>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import Turntable from './turntable'

const props = defineProps<{
  wait: () => Promise<number>
}>()

const ePlate = ref<Element | null>(null)
let turntable = new Turntable()
watch(ePlate, () => {
  if (ePlate.value) {
    turntable.init({
      el: ePlate.value,
      complete() {
        console.log('结束')
      },
    })
  }
})

function start() {
  turntable.start()

  props.wait().then((turntableIndex) => {
    turntable.stop(turntableIndex)
  })
}

function stop() {
  turntable.stop(1)
}
</script>
<template>
  <div class="TurntableView">
    <p>
      <button @click="start">start</button>
      <button @click="stop">stop</button>
    </p>
    <div ref="ePlate" class="TurntableView_turntable">
      <img src="./plate.svg" />
    </div>
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
