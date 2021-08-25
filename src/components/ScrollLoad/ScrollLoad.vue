<template>
  <div class="scroll-top-load">
    <Loading v-show="status === 'loading'" />
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
import Throttle from '@/utils/throttle.js'
import Loading from '@/components/Loading/Loading.vue'
export default {
  components: {
    Loading
  },
  props: {
    isTop: Boolean,
    scrollContainer: {
      type: Object,
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
      throttle: new Throttle({ time: 300 })
    }
  },
  watch: {
    startPage: {
      immediate: true,
      handler () {
        this.page = this.startPage
      }
    }
  },
  methods: {
    init () {
      this.setScrollTop()
      this.unbind()
      this.bind()
    },
    scroll () {
      this.throttle.exec(() => {
        this.tryLoad()
      })
    },
    async tryLoad () {
      if (this.status === 'loading') return

      // 记录底部位置
      this.setScrollBottom()

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
    setScrollTop () {
      if (this.isTop) {
        const { scrollContainer } = this
        scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight - this.scrollBottom
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

<style scoped>
.scroll-top-load {
  height: 28px;
  padding: 4px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  color: #666;
}

.scroll-top-load__loading {

}
</style>
