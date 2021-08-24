<template>
  <div class="scroll-top-load">
    <div
      v-show="status === 'loading'"
      class="scroll-top-load__loading"
    >
      <LoadIcon /><span class="scroll-top-load__loading-text">加载中</span>
    </div>
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
import LoadIcon from './LoadIcon.vue'
export default {
  components: {
    LoadIcon
  },
  props: {
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
      scrollBottom: 0,
      status: ''
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
  mounted () {

  },
  unmounted () {
    this.unbind()
  },
  methods: {
    init () {
      this.setScrollTop()
      this.unbind()
      this.scrollContainer.addEventListener('scroll', this.tryLoad)
    },
    async tryLoad () {
      if (this.status === 'loading') return
      const { scrollContainer } = this
      this.scrollBottom = scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop
      if (scrollContainer.scrollTop < 10) {
        this.status = 'loading'
        const status = this.status = await this.load(this.page++)
        this.$nextTick(() => {
          this.setScrollTop()
          if (['noData', 'finish'].includes(status)) {
            this.unbind()
          } else {
            this.tryLoad()
          }
        })
      }
    },
    setScrollTop () {
      const { scrollContainer } = this
      scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight - this.scrollBottom
    },
    unbind () {
      this.scrollContainer && this.scrollContainer.removeEventListener('scroll', this.tryLoad)
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

.scroll-top-load__loading > * {
  vertical-align: middle;
}

.scroll-top-load__loading-text {
  padding-left: 4px;
}
</style>
