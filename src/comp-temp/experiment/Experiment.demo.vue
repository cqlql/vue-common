<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/reactivity'
export default {
  setup () {
    const state = reactive({
      msg: 'hello'
    })
    console.log(state)
    return toRefs(state)
  }
}
</script>
