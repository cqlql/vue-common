<template>
  <div>
    <input v-model="value" type="text">
  </div>
</template>

<script>
import { throttleInit } from './throttle'
export default {
  data () {
    return {
      value: '',
      throttle: throttleInit()
    }
  },

  watch: {
    value (v) {
      this.throttle(() => {
        console.log(v)
      })
    }
  }
}
</script>
