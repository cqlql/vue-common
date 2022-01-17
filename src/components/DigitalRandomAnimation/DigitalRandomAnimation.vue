<script lang="ts" setup>
import Animation from '@/utils/animation/animation'
import { ref, watch } from 'vue'

const animation = new Animation()

const props = defineProps<{
  startSwitch: boolean
}>()

const emits = defineEmits<{
  (e: 'update:startSwitch', isStart: boolean): void
}>()

const number = ref(0)

watch(
  () => props.startSwitch,
  (startSwitch) => {
    if (startSwitch) {
      // 可以在此设置圈数
      const length = 10 * 2 + 9

      const d = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

      animation.start(
        function (v) {
          v = ~~(v * length)

          v = v % 10

          number.value = d[v]
        },
        2000,
        () => {
          emits('update:startSwitch', false)
        },
      )
    }
  },
)

// 洗牌
function shuffle<T = any>(array: T[]) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
</script>
<template>
  <div>
    <div class="DigitalRandomAnimation">
      {{ number }}
    </div>
  </div>
</template>

<style lang="scss">
.DigitalRandomAnimation {
  border: 2px solid #333;
  height: 50px;
  width: 50px;
  overflow: hidden;

  margin-left: 6px;

  height: 50px;
  width: 50px;
  font-size: 50px;
  line-height: 1;
  text-align: center;
}
</style>
