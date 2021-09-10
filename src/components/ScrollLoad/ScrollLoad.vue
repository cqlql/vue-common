<template>
  <div class="scroll-top-load">
    <div
      v-loading="status === 'loading'"
    />
    <div
      v-if="status === 'finish'"
      class="scroll-top-load__finish"
    >
      -没有更多了-
    </div>
    <div
      v-else-if="status === 'noData'"
      class="scroll-top-load__nodata"
    >
      -没有数据-
    </div>
  </div>
</template>

<script>
import { throttleInit } from '@/utils/perf/throttle.js'
export default {
  props: {
    isTop: Boolean,
    scrollContainer: {
      type: HTMLDivElement,
      default: null
    },
    load: {
      type: Function,
      default () {}
    },
    startPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      page: null,
      distance: 10,
      scrollBottom: 0,
      status: '',
      throttle: throttleInit()
    }
  },
  methods: {
    reset () {
      this.page = this.startPage
      this.status = ''
      this.setScrollTop(0)
      this.unbind()
      this.bind()
    },
    scroll () {
      this.setScrollBottom()
      this.throttle(() => {
        this.tryLoad()
      })
    },
    async tryLoad () {
      if (this.status === 'loading') return

      // 记录底部位置
      // let scrollBottom
      // if (this.isTop) {
      //   const { scrollContainer } = this
      //   scrollBottom = scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop
      // }

      if (this.test()) {
        this.status = 'loading'
        const status = this.status = await this.load(this.page++)
        this.$nextTick(() => {
          // dom 更新后将底部位置设置到 scrollTop
          this.setScrollTop()

          this.status = status
          if (['noData', 'finish'].includes(status)) {
            this.unbind()
          } else {
            this.tryLoad()
          }
        })
      }
    },
    setScrollBottom () {
      if (this.isTop) {
        const { scrollContainer } = this
        this.scrollBottom = scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop
      }
    },
    setScrollTop (scrollBottom = this.scrollBottom) {
      if (this.isTop) {
        this.scrollBottom = scrollBottom
        const { scrollContainer } = this
        scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollBottom
      }
    },
    test () {
      const { scrollContainer } = this
      if (this.isTop) return scrollContainer.scrollTop < this.distance
      return scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop < this.distance
    },
    bind () {
      this.scrollContainer.addEventListener('scroll', this.scroll)
    },
    unbind () {
      this.scrollContainer && this.scrollContainer.removeEventListener('scroll', this.scroll)
    }
  }
}
</script>

<style scoped lang="scss">
.scroll-top-load {
  height: 28px;
  padding: 4px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  color: #666;
}

</style>
