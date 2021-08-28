<template>
  <div class="ScrollCustom-demo">
    <button @click="itemNums+=10">增加项</button>
    <ScrollCustom>
      <p v-for="i of itemNums" :key="i">{{ itemNums-i }}</p>
    </ScrollCustom>
    <div style="height: 2000px;" />
  </div>
</template>

<script>

import ScrollCustom from './ScrollCustom.vue'
export default {
  components: {
    ScrollCustom
  },
  data () {
    return {
      itemNums: 60
    }
  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style lang="scss">
.ScrollCustom-demo {

}

</style>
