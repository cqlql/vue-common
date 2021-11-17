<template>
  <div>
    <InputPlus :test="test" v-model="val" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InputPlus from '../index.vue'

let val = ref('')

let reg = /^\d+\.?\d*$/
function test(v: string) {
  let pass

  pass = reg.test(v)

  if (pass) {
    pass = Number(v) >= 100
    if (!pass) {
      val.value = '100'
    }
  }

  return pass
}
</script>
<style lang="scss"></style>
