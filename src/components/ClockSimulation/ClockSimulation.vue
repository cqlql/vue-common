<script lang="ts">
import drag from '@/utils/drag/drag'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'ClockSimulation',
  directives: {
    drag: {
      // 指令的定义
      mounted(el: HTMLElement, binding) {
        binding.value(el, binding.arg)
      },
    },
  },
})
</script>
<script lang="ts" setup>
let angle = reactive({
  hour: 0,
  minute: 0,
})

setClock(11.5, 55)

/**
 * 设置时钟
 * @param hour 小时
 * @param minute 分钟
 */
function setClock(hour: number, minute: number) {
  angle.hour = ((hour % 12) / 12) * 360
  angle.minute = ((minute % 60) / 60) * 360
}

function getAngle(radian: number) {
  return (radian * 180) / Math.PI
}
function dragInit(el: HTMLElement, type: 'hour' | 'minute') {
  let eBox = (el.parentElement as HTMLElement).parentElement as Element

  let startX = 0
  let startY = 0
  let centerX = 0
  let centerY = 0

  drag({
    elem: el,
    onDown() {},
    onStart(e) {
      let domRect = eBox.getBoundingClientRect()
      centerX = domRect.width / 2 + domRect.left
      centerY = domRect.height / 2 + domRect.top

      const { pageX, pageY } = (
        (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : e
      ) as Touch | MouseEvent
      startX = pageX
      startY = pageY
    },
    onMove(e) {
      e.preventDefault()
      const { pageX, pageY } = (
        (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : e
      ) as Touch | MouseEvent

      const x = centerX - pageX
      const y = centerY - pageY

      let angleVal = getAngle(-Math.atan(x / y))
      if (y < 0) {
        angleVal += 180
      }

      angle[type] = angleVal
    },
    onEnd() {},
  })
}
</script>
<template>
  <div class="ClockSimulation">
    <div
      class="ClockSimulation_hand ClockSimulation_hour"
      :style="{ transform: `rotate(${angle.hour}deg)` }"
    >
      <div v-drag:hour="dragInit" class="hand"></div>
    </div>
    <div
      class="ClockSimulation_hand ClockSimulation_minute"
      :style="{ transform: `rotate(${angle.minute}deg)` }"
    >
      <div v-drag:minute="dragInit" class="hand"></div>
    </div>
  </div>
</template>

<style lang="scss">
.ClockSimulation {
  border: 1px solid #ddd;

  width: 300px;
  height: 300px;
  position: relative;
}

$handWidth: 20px;

.ClockSimulation_hand {
  width: $handWidth;
  height: 100%;

  margin-left: -$handWidth/2;
  background-color: #ddd;
  position: absolute;
  left: 50%;
  .hand {
    width: 100%;
    height: 50%;
    background-color: #000;
  }
}

.ClockSimulation_hour {
  // transform: rotate(45deg);
  .hand {
    background-color: #000;
  }
}
.ClockSimulation_minute {
  transform: rotate(45deg);
  .hand {
    background-color: red;
  }
}
</style>
