<template>
  <div>
    <ScrollLoadBoth
      :load="load"
    >
      <p v-for="item of list" :key="item">{{ item }}</p>
    </ScrollLoadBoth>
  </div>
</template>

<script>
import ScrollLoadBoth from './ScrollLoadBoth.vue'
import { getList } from './get-list.mock.js'
export default {
  components: {
    ScrollLoadBoth
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    load (page) {
      return getList(page)
    }
  }
}
</script>

<style lang="scss">

</style>
