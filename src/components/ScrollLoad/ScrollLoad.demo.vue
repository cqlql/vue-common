<template>
  <div class="ScrollLoad-demo">
    <button @click="scrollContainer.scrollTop=100">test</button>
    <div
      ref="container"
      class="container"
    >
      <ScrollLoad
        ref="vScrollLoad"
        is-top
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
import ScrollLoad from './ScrollLoad.vue'
import { getList } from './get-list.mock.js'
export default {
  components: {
    ScrollLoad
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
      this.$refs.vScrollLoad.init()
      this.$refs.vScrollLoad.tryLoad()
    })
  },
  methods: {
    async load (page) {
      const { list } = await getList(page)

      let allList
      if (page === 1) { // 刷新
        allList = this.list = list
      } else {
        allList = this.list = list.concat(this.list)
      }
      console.log(list)
      if (!allList.length) {
        return 'noData'
      }
      if (list.length < 10) {
        return 'finish'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.ScrollLoad-demo {
  margin: 15px;

  .container {
    border: 2px solid #aaa;
    width: 300px;
    height: 300px;
    overflow: auto;
  }
}

</style>
