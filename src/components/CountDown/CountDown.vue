<template>
  <div :class="{ emergency: isEmergency }"> {{ time }} </div>
  <div :class="['CountDown_box', boxClass]">1</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isEmergency = ref(false)
const time = ref('7')
const boxClass = ref('')

let timeValue = Number(time.value)

const timeId = setInterval(() => {
  timeValue = Number((timeValue - 0.1).toFixed(1))

  if (timeValue > 5) {
    time.value = String(Math.ceil(timeValue))
    isEmergency.value = false
  } else {
    time.value = timeValue.toFixed(1)
    isEmergency.value = true
  }

  if (timeValue <= 0) {
    clearInterval(timeId)
    console.log('停止了')
    boxClass.value = 'zoom'
  }
}, 100)
</script>
<style lang="scss">
.emergency {
  color: red;
}

.CountDown_box {
  height: 50px;
  width: 50px;
  background-color: #aaa;
}

.zoom {
  animation: zoom 1s ease-out;
}
@keyframes zoom {
  0% {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}
</style>
