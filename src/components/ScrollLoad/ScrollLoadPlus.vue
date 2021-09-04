<template>
  <div
    v-loading="loading"
    class="scroll-load-plus"
  >
    <div ref="eContainer" class="scroll-load-plus__container">
      <div v-if="empty" class="scroll-load-plus__empty">
        <j-empty />
      </div>
      <div class="scroll-load-plus__content">
        <ScrollLoad
          v-if="isTop"
          ref="vScrollLoad"
          is-top
          :scroll-container="scrollContainer"
          :load="load"
          :start-page="scrollStartPage"
        />
        <slot :list="list" />
        <ScrollLoad
          v-if="!isTop"
          ref="vScrollLoad"
          :scroll-container="scrollContainer"
          :load="load"
          :start-page="scrollStartPage"
        />
        <SizeListener v-if="isTop" :size="size" />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollLoad from './ScrollLoad.vue'
import SizeListener from '@/components/SizeListener/SizeListener.vue'
export default {
  components: {
    ScrollLoad,
    SizeListener
  },
  props: {
    isTop: Boolean,
    immediate: {
      type: Boolean,
      default: true
    },
    getList: {
      type: Function,
      default () {}
    },
    pagesNum: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      startPage: 1,
      scrollContainer: null,
      list: [],
      loading: false,
      status: ''
    }
  },
  computed: {
    empty () {
      return this.status === 'noData'
    },
    scrollStartPage () {
      return this.startPage + 1
    }
  },
  async mounted () {
    this.scrollContainer = this.$refs.eContainer
    if (this.immediate) {
      this.restart()
    }
  },
  methods: {
    async load (page) {
      // pages
      // currentPage: 1
      // totalNumber: 188
      // totalpages: 19
      const { list, pages, status } = await this.getList(page)

      let allList
      if (page === this.startPage) { // 刷新
        allList = this.list = list
      } else {
        allList = this.list = this.isTop ? list.concat(this.list) : this.list.concat(list)
      }

      if (!allList.length) {
        return 'noData'
      }

      if (pages) {
        if (page >= pages.totalpages) {
          return 'finish'
        }
      } else if (list.length < this.pagesNum) {
        return 'finish'
      }
      return status
    },
    async restart () {
      this.loading = true
      const status = this.status = await this.load(this.startPage).finally(() => {
        this.loading = false
      })
      const { vScrollLoad } = this.$refs
      vScrollLoad.unbind()
      this.$nextTick(() => {
        if (status) {
          if (this.isTop) {
            vScrollLoad.setScrollTop(0)
          }
        } else {
          vScrollLoad.init()
          vScrollLoad.tryLoad()
        }
      })
    },
    size () {
      const { vScrollLoad } = this.$refs
      if (vScrollLoad) {
        vScrollLoad.setScrollTop()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.scroll-load-plus {
  height: 100%;

  .scroll-load-plus__container {
    overflow: auto;
    height: 100%;
  }

  .scroll-load-plus__content {
    position: relative;
  }

  .scroll-load-plus__empty {
    height: calc(100% - 28px);
    display: flex;
    align-items: center; /* 垂直 */
    justify-content: center; /* 左右 */
  }
}
</style>
