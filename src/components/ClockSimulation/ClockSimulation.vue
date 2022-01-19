<script lang="ts">
import drag from '@/utils/drag/drag'
import { defineComponent, reactive, watch } from 'vue'
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

const props = withDefaults(
  defineProps<{
    hour?: number
    minute?: number
  }>(),
  {
    hour: 0,
    minute: 0,
  },
)

watch([() => props.hour, () => props.minute], () => {
  setClock(props.hour, props.minute)
})

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
@use 'sass:math';

$size: 320px;
$handWidth: 12px;
$hourHandWidth: 16px;

$centerSize: 30px;

.ClockSimulation {
  // border: 1px solid #ddd;
  width: $size;
  height: $size;
  position: relative;
  background: url(@/assets/ClockDial.png) no-repeat;
  background-size: 100% auto;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: $centerSize;
    height: $centerSize;
    margin-top: math.div(-$centerSize, 2);
    margin-left: math.div(-$centerSize, 2);
    background-color: #445157;
    border-radius: 100%;
    box-sizing: border-box;
    border: 8px solid #5f6c72;
  }
}

.ClockSimulation_hand {
  width: $handWidth;
  height: 80%;
  margin-left: math.div(-$handWidth, 2);
  // background-color: #ddd;
  position: absolute;
  left: 50%;
  top: 10%;
  pointer-events: none;

  .hand {
    width: 100%;
    height: 38%;
    background-color: #000;
    position: relative;
    margin-top: 30px;
    border-radius: 50px;
    z-index: 1;
    pointer-events: all;

    // &::after {
    //   content: '';
    //   border-style: solid;
    //   border-width: 0 $handWidth $handWidth * 2 $handWidth;
    //   border-color: transparent transparent #d66c62 transparent;
    //   position: absolute;
    //   top: -$handWidth;
    //   left: math.div($handWidth, -2);
    // }
  }
}

.ClockSimulation_hour {
  width: $hourHandWidth;
  margin-left: math.div(-$hourHandWidth, 2);

  .hand {
    background-color: #d66c62;
    margin-top: 60px;
    height: 28%;
  }
}

.ClockSimulation_minute {
  transform: rotate(45deg);

  .hand {
    background-color: #4ab2bf;

    &::after {
      border-color: transparent transparent #4ab2bf transparent;
    }
  }
}
</style>
