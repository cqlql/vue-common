<template>
  <div class="ScrollTopLoadCustom">
    <ScrollCustom
      @scroll-top-change="scrollTopChange"
    >
      <ScrollLoad
        ref="vScrollLoad"
        :scroll-top="scrollTop"
        :load="load"
      />
      <slot :list="list" />
    </ScrollCustom>
    <div style="height: 2000px;" />
  </div>
</template>

<script>

import ScrollCustom from './ScrollCustom.vue'
import ScrollLoad from './ScrollLoad.vue'
export default {
  components: {
    ScrollCustom,
    ScrollLoad
  },
  props: {
    getList: {
      type: Function,
      default () {}
    }
  },
  data () {
    return {
      scrollTop: 0,
      list: []
    }
  },
  methods: {
    scrollTopChange (scrollTop) {
      this.scrollTop = scrollTop
      this.$refs.vScrollLoad.scroll()
    },
    async load (page) {
      // pages
    // currentPage: 1
    // totalNumber: 188
    // totalpages: 19
      const { list, pages } = await this.getList(page)

      let allList
      if (page === this.startPage) { // 刷新
        allList = this.list = list
      } else {
        // allList = this.list = this.isTop ? list.concat(this.list) : this.list.concat(list)
        allList = this.list = list.concat(this.list)
      }

      if (!allList.length) {
        return 'noData'
      }

      if (pages) {
        if (page >= pages.totalpages) {
          return 'finish'
        }
      } else if (list.length < 10) {
        return 'finish'
      }
    }
  }
}
</script>

<style lang="scss">
.ScrollTopLoadCustom {

}

</style>
