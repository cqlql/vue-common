<template>
  <div class="ScrollTopLoad-demo">
    <button @click="scrollContainer.scrollTop=100">test</button>
    <div
      ref="container"
      class="container"
    >
      <ScrollTopLoad
        ref="vScrollTopLoad"
        :scroll-container="scrollContainer"
        :load="load"
        :start-page="2"
      />
      <p
        v-for="(v,i) of list"
        :key="i"
      >
        {{ v }}
      </p>
    </div>
  </div>
</template>

<script>
import ScrollTopLoad from './ScrollTopLoad.vue'
import { getList } from './get-list.mock.js'
export default {
  components: {
    ScrollTopLoad
  },
  data () {
    return {
      page: 0,
      scrollBottom: 0,
      scrollContainer: null,
      list: []
    }
  },
  async mounted () {
    this.scrollContainer = this.$refs.container
    await this.load(1)
    this.$nextTick(() => {
      this.$refs.vScrollTopLoad.init()
      this.$refs.vScrollTopLoad.tryLoad()
    })
  },
  methods: {
    async load (page) {
      const list = await getList(page)
      console.log(list)
      const status = list.length < 10 ? 'finish' : ''
      let allList
      if (page === 1) { // 刷新
        allList = this.list = list
      } else {
        allList = this.list = list.concat(this.list)
      }
      if (!allList.length) {
        return 'noData'
      }
      return status
    }
  }
}
</script>

<style scoped lang="scss">
.ScrollTopLoad-demo {
  margin: 15px;

  .container {
    border: 2px solid #aaa;
    width: 300px;
    height: 300px;
    overflow: auto;
  }
}

</style>
