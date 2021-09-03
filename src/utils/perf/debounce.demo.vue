<template>
  <div>
    <input v-model="value" type="text">
  </div>
</template>

<script>
import { debounceInit } from './debounce'
export default {
  data () {
    return {
      value: '',
      debounce: debounceInit({ immediate: true })
    }
  },

  watch: {
    value (v) {
      this.debounce(() => {
        console.log(v)
      })
    }
  }
}
</script>
