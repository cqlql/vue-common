<template>
  <div>
    <p>
      <input type="text" @input="onInput" />
    </p>
    <p v-for="v of values" :key="v">{{ v }}</p>
  </div>
</template>

<script>
import { debounceInit } from '@/utils/perf/debounce'
import TimeRecord from './TimeRecord'
export default {
  data() {
    return {
      timeRecord: new TimeRecord(),
      values: [],
      debounce: debounceInit(),
    }
  },
  methods: {
    onInput({ target }) {
      this.timeRecord.start()
      this.debounce(() => {
        this.value = target.value

        this.values.push(this.value + '-' + this.timeRecord.end())
      })
    },
  },
}
</script>
