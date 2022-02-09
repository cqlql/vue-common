<script lang="ts" setup>
import Animation from '@/utils/animation/animation'
import { ref } from 'vue'

const r1 = ref(0)
const r2 = ref(0)
const z1 = ref(1)

const animation = new Animation()

animation.start((p) => {
  if (p > 0.5) {
    r1.value = 180
    z1.value = 0
    r2.value = 360 * p - 180
  } else {
    r1.value = 360 * p
  }
}, 1000)
</script>
<template>
  <div class="PieChartCss">
    <div class="PieChartCss_cover1"></div>
    <div
      :style="{ transform: `rotate(${r1}deg)`, zIndex: z1 }"
      class="PieChartCss_cover2"
    ></div>
    <div
      :style="{ transform: `rotate(${r2}deg)` }"
      class="PieChartCss_cover3"
    ></div>
  </div>
</template>

<style lang="scss">
.PieChartCss {
  position: relative;
  border-radius: 50px;
  overflow: hidden;
}

.PieChartCss,
.PieChartCss_cover1,
.PieChartCss_cover2,
.PieChartCss_cover3 {
  width: 50px;
  height: 50px;
}

.PieChartCss,
.PieChartCss_cover3 {
  background: #ff6a00;
}

.PieChartCss_cover1,
.PieChartCss_cover2 {
  background: #808080;
}

.PieChartCss_cover2,
.PieChartCss_cover3 {
  position: absolute;
  top: 0;
  clip: rect(0, 50px, 50px, 25px);
}

.PieChartCss_cover1 {
  width: 25px;
}

.PieChartCss_cover2 {
  z-index: 1;
}

.PieChartCss_cover3 {
}
</style>
