<template>
  <div
    v-loading="loading"
    class="scroll-load-both"
  >
    <div ref="eContainer" class="scroll-load-both__container">
      <div v-if="empty" class="scroll-load-both__empty">
        <j-empty />
      </div>
      <div class="scroll-load-both__content">
        <ScrollLoadBar :status="topStatus" />
        <slot :list="list" />
        <ScrollLoadBar :status="bottomStatus" />
        <SizeListener :size="size" />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollLoadBar from './ScrollLoadBar.vue'
import SizeListener from '@/components/SizeListener/SizeListener.vue'
import { throttleInit } from '@/utils/perf/throttle.js'
export default {
  components: {
    ScrollLoadBar,
    SizeListener
  },
  props: {
    // 起始页
    startPage: {
      type: Number,
      default: 1
    },

    load: {
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
      page: 1,
      topPage: 1,
      bottomPage: 1,
      list: [],
      loading: false,
      status: '',
      topStatus: '',
      bottomStatus: '',
      distance: 10, // 触发加载的距离阈值
      scrollTop: 0,
      scrollBottom: 0,
      throttle: throttleInit()
    }
  },
  computed: {
    empty () {
      return this.status === 'noData'
    }
  },
  async mounted () {
    this.restart()
  },
  methods: {
    async loadSelf (page, isTop) {
      // pages
      // currentPage: 1
      // totalNumber: 188
      // totalpages: 19
      const { list, pages, status } = await this.load(page)

      let allList
      if (page === this.startPage) { // 刷新
        allList = this.list = list
      } else {
        allList = this.list = isTop ? list.concat(this.list) : this.list.concat(list)
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
      this.topStatus = this.bottomStatus = ''
      this.topPage = this.bottomPage = this.startPage

      this.loading = true
      this.status = await this.loadSelf(this.bottomPage).finally(() => {
        this.$refs.eContainer.scrollTop = this.distance
        this.loading = false
      })
      this.recordScrollBottom()
      this.bind()
      this.tryLoad()
    },
    recordScrollBottom () {
      const { eContainer } = this.$refs
      this.scrollBottom = eContainer.scrollHeight - eContainer.clientHeight - eContainer.scrollTop
    },
    scroll () {
      const prev = this.scrollTop
      const current = this.scrollTop = this.$refs.eContainer.scrollTop
      const isTop = current < prev
      // console.log('isTop', isTop)
      this.recordScrollBottom()
      this.throttle(() => {
        this.tryLoad(isTop)
      })
    },

    // 滚动尝试加载
    // 先检测底部，再检测顶部
    async tryLoad (isTop) {
      if (this.topStatus === 'finish' && this.topStatus === this.bottomStatus) {
        // 都完成了，解绑事件
        this.unbind()
        return
      }
      if (['loading', 'finish'].includes(this.getScrollBarStatus(isTop))) return
      if (this.test(isTop)) {
        this.setScrollBarStatus(isTop, 'loading')

        const status = await this.loadSelf(isTop ? --this.topPage : ++this.bottomPage, isTop)
        this.isTop = false
        this.$nextTick(() => {
          // dom 更新后将底部位置设置到 scrollTop
          if (isTop) this.setScrollTop()
          this.isTop = isTop

          this.setScrollBarStatus(isTop, status)
          if (status === 'noData') {
            this.unbind()
          } else if (status === 'finish') {
            if (!isTop) { // 如果是底部完成了，就开始检测顶部
              this.tryLoad(true)
            }
          } else {
            this.tryLoad(isTop)
          }
        })
      } else if (!isTop) { // 底部检测完了再检测顶部
        this.tryLoad(true)
      }
    },

    test (isTop) {
      const { eContainer } = this.$refs
      if (isTop) return eContainer.scrollTop < this.distance
      return eContainer.scrollHeight - eContainer.clientHeight - eContainer.scrollTop < this.distance
    },

    bind () {
      const eContainer = this.$refs.eContainer

      // 避免重复注册
      this.unbind(eContainer)

      eContainer.addEventListener('scroll', this.scroll)
    },
    unbind (eContainer = this.$refs.eContainer) {
      eContainer && eContainer.removeEventListener('scroll', this.scroll)
    },
    setScrollBarStatus (isTop, status) {
      if (isTop) {
        this.topStatus = status
      } else {
        this.bottomStatus = status
      }
    },
    getScrollBarStatus (isTop) {
      if (isTop) {
        return this.topStatus
      }
      return this.bottomStatus
    },
    setScrollTop (scrollBottom = this.scrollBottom) {
      this.scrollBottom = scrollBottom
      const { eContainer } = this.$refs
      eContainer.scrollTop = eContainer.scrollHeight - eContainer.clientHeight - scrollBottom
    },
    size () {
      if (this.isTop) this.setScrollTop()
    }
  }
}
</script>

<style lang="scss">
.scroll-load-both {
  height: 100%;

  .scroll-load-both__container {
    overflow: auto;
    height: 100%;
  }

  .scroll-load-both__content {
    position: relative;
  }

  .scroll-load-both__empty {
    height: calc(100% - 28px);
    display: flex;
    align-items: center; /* 垂直 */
    justify-content: center; /* 左右 */
  }
}
</style>
