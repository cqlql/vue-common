<script lang="ts" setup>
import { ref } from 'vue'
import DigitalRandomAnimation from './DigitalRandomAnimation.vue'

const startSwitch = ref(false)

function start() {
  startSwitch.value = true
}
</script>
<template>
  <div>
    <button @click="start">开始</button>
    <DigitalRandomAnimation v-model:startSwitch="startSwitch" />
    <DigitalRandomAnimation v-model:startSwitch="startSwitch" />
    <DigitalRandomAnimation v-model:startSwitch="startSwitch" />
  </div>
</template>

<style lang="scss"></style>
