<template>
  <div
    v-loading="loading"
    class="scroll-load-both"
  >
    <div ref="eContainer" class="scroll-load-both__container">
      <div v-if="empty" class="scroll-load-both__empty">
        <j-empty />
      </div>
      <div v-else-if="isInitial" class="scroll-load-both__empty">
        <!-- 初始 initial 状态 -->
        <template v-if="$slots.initial">
          <slot name="initial" />
        </template>
        <a-empty v-else description="" />
      </div>
      <div v-else class="scroll-load-both__content">
        <ScrollLoadBar :status="topStatus" />
        <slot :list="list" />
        <ScrollLoadBar :status="bottomStatus" />
        <SizeListener v-if="topNoFinish" :size="size" />
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

    immediate: {
      type: Boolean,
      default: true
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
      topPage: 1,
      bottomPage: 1,
      list: [],
      loading: false,
      barLoading: false,
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
    },
    isInitial () {
      return this.status === ''
    },
    topIsFinish () {
      return this.topStatus === 'finish'
    },
    topNoFinish () {
      return !this.topIsFinish
    }
  },
  async mounted () {
    this.scrollContainer = this.$refs.eContainer
    if (this.immediate) {
      this.restart()
    }
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
        this.loading = false
      })

      this.$nextTick(() => {
        this.scrollContainer.scrollTop = this.distance
        this.bind()
        this.tryLoad()
      })
    },
    recordScrollBottom () {
      const { scrollContainer } = this
      this.scrollBottom = scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop
    },
    scroll () {
      let isTop = false
      if (this.topNoFinish) {
        const prev = this.scrollTop
        const current = this.scrollTop = this.scrollContainer.scrollTop
        isTop = current < prev
        this.recordScrollBottom()
      }

      this.throttle(() => {
        this.tryLoad(isTop)
      })
    },

    // 滚动尝试加载
    // 先检测底部，再检测顶部
    async tryLoad (isTop) {
      if (isTop) {
        this.tryLoadTop()
      } else {
        /*
        底部检测完成后，检测顶部：
        1. 未满足底部加载的距离
        2. 底部 finish

        不再检测顶部：
        1.顶部 finish
        */
        this.tryLoadBottom()
      }
    },

    async tryLoadTop () {
      if (this.barLoading || this.topIsFinish) return
      const isTop = true
      if (this.test(isTop)) {
        this.topStatus === 'loading'
        this.barLoading = true

        const status = await this.loadSelf(--this.topPage, isTop)
          .finally(() => { this.barLoading = false })
        this.isTop = true
        this.$nextTick(() => {
          // dom 更新后将底部位置设置到 scrollTop
          this.setScrollTop()

          this.topStatus = status
          if (status === 'finish') {
            this.isBothFinish()
          } else {
            this.tryLoadTop()
          }
        })
      }
    },
    async tryLoadBottom () {
      if (this.barLoading || this.bottomStatus === 'finish') return

      if (this.test()) {
        this.bottomStatus = 'loading'
        this.barLoading = true
        const status = await this.loadSelf(++this.bottomPage)
          .finally(() => { this.barLoading = false })
        this.isTop = false
        this.$nextTick(() => {
          this.bottomStatus = status
          if (status === 'finish') {
            if (!this.isBothFinish()) {
              this.tryLoadTop()
            }
          } else {
            this.tryLoadBottom()
          }
        })
      } else { // 底部检测完了再检测顶部
        this.tryLoadTop()
      }
    },
    isBothFinish () {
      if (this.topStatus + this.bottomStatus === 'finishfinish') {
        // 都完成了
        this.unbind() // 解绑事件
        this.status = 'finish'
        return true
      }
    },
    test (isTop) {
      const { scrollContainer } = this
      if (isTop) return scrollContainer.scrollTop < this.distance
      return scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop < this.distance
    },

    bind () {
      const scrollContainer = this.scrollContainer

      // 避免重复注册
      this.unbind(scrollContainer)

      scrollContainer.addEventListener('scroll', this.scroll)
    },
    unbind (scrollContainer = this.scrollContainer) {
      scrollContainer && scrollContainer.removeEventListener('scroll', this.scroll)
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
      const { scrollContainer } = this
      scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollBottom
    },
    size () {
      if (this.isTop) this.setScrollTop()
    },
    // 恢复初始状态
    reset () {
      this.unbind()
      this.status = ''
      this.topPage = this.bottomPage = this.startPage
      // this.topStatus = this.bottomStatus = ''
      // this.list = []
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
    height: 100%;
    display: flex;
    align-items: center; /* 垂直 */
    justify-content: center; /* 左右 */
  }
}
</style>
