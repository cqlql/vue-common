<template>
  <div>
    <p>
      <input
        type="text"
        @input="onInput"
      >
    </p>

    <p v-for=" v of values" :key="v">{{ v }}</p>
  </div>
</template>

<script>
import { createThrottle } from '../throttle'
import TimeRecord from './TimeRecord'
export default {
  data () {
    return {
      timeRecord: new TimeRecord(),
      values: [],
      throttle: createThrottle()
    }
  },
  methods: {
    onInput ({ target }) {
      this.timeRecord.start()
      this.throttle(() => {
        this.value = target.value

        this.values.push(this.value + '-' + this.timeRecord.end())
      })
    }
  }
}
</script>
