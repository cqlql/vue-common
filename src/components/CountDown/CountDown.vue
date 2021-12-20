<template>
  <div :class="{ emergency: isEmergency }"> {{ time }} </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isEmergency = ref(false)
const time = ref('7')

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
  }
}, 400)
</script>
<style lang="scss">
.emergency {
  color: red;
}
</style>
