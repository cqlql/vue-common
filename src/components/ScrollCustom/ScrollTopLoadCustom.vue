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
      itemNums: 60,
      scrollTop: 0,
      list: [],
      imgs: [
        '//img20.360buyimg.com/pop/s380x300_jfs/t1/166909/7/17418/87085/6073e5deE5159a884/76a2ff2bc18551bb.jpg.webp',
        '//img13.360buyimg.com/pop/s380x300_jfs/t1/56289/13/5487/99838/5d33f1d4E671cdc59/c341d1a3a0e4593d.png.webp',
        '//img11.360buyimg.com/babel/s380x300_jfs/t1/124193/7/20235/50643/5fc1b453Ede1ff346/4cfd67de0ee4869a.jpg.webp'
      ]
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
