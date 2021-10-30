<template>
  <div>
    {{ count }}
    {{ msg }}
    <p><button @click="test">test</button></p>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from '@vue/reactivity'
const count = ref(0)
const state = reactive({
  msg: 'hello',
})
const { msg } = toRefs(state)
console.log(state)
function test() {
  count.value += 1
  state.msg += ~~(Math.random() * 10)
}
</script>
