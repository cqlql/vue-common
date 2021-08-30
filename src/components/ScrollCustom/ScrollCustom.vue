<template>
  <div class="scroll_custom">
    <!-- <div style="position: absolute;">{{ scrollTop }}</div> -->
    <div
      ref="eContainer"
      class="scroll_custom__container"
    >
      <div
        ref="eContent"
        class="scroll_custom__content"
        :style="{bottom:y+'px'}"
      >
        <slot />
        <SizeListener :size="size" />
      </div>
    </div>
    <ScrollBar
      v-show="!noBar"
      ref="vScrollBar"
      :height="barHeight"
      :max-y="barMaxY"
      @move="move"
    />
  </div>
</template>

<script>
import SizeListener from '@/components/SizeListener/SizeListener.vue'
import ScrollBar from './ScrollBar.vue'
import mouseWheel from '@/utils/mouse-wheel'
export default {
  components: {
    SizeListener,
    ScrollBar
  },
  emits: ['scroll', 'scroll-top-change'],
  data () {
    return {
      barHeight: 0,
      barMaxY: 0,
      y: 0,
      ratio: 0,
      scrollTop: 0,
      noBar: true
    }
  },
  watch: {
    scrollTop (top) {
      this.$emit('scroll-top-change', top)
    }
  },
  mounted () {
    const { vScrollBar } = this.$refs
    mouseWheel(this.$el, (e) => {
      if (this.noBar) return
      let direction = 1
      if (e.deltaY > 0) {
        // 往下滚
        direction = -1
      }

      if (vScrollBar.addY(100 / this.ratio * direction)) {
        e.preventDefault()
      }
    })
  },
  methods: {
    size () {
      if (this.wait) return
      this.wait = true
      requestAnimationFrame(() => {
        this.wait = false
        this.updateBarSize()
      })
      // setTimeout(() => {
      //   this.wait = false
      //   console.log('监听元素尺寸变化')
      // }, 20)
    },
    updateBarSize () {
      const { eContainer, eContent } = this.$refs
      const clientHeight = this.clientHeight = eContainer.clientHeight
      const scrollContainerHeight = clientHeight // 滚动条容器目前与内容容器同高
      const contentHeight = this.contentHeight = eContent.clientHeight
      if (contentHeight <= clientHeight) {
        this.noBar = true
        return
      }
      this.noBar = false

      const { ratio } = this.$refs.vScrollBar.update({
        clientHeight,
        contentHeight,
        scrollContainerHeight,
        scrollBottom: this.y
      })

      // 内容/滚动条 滚动距离比
      this.ratio = ratio

      this.updateScrollTop()
    },
    updateScrollTop  () {
      this.scrollTop = this.contentHeight - this.clientHeight + this.y
    },
    move (y) {
      const newY = this.y = -this.ratio * y

      this.updateScrollTop()

      this.$emit('scroll', newY)
    }
  }
}
</script>

<style lang="scss">
.scroll_custom {
  // width: 80%;
  height: 100%;
  // border: 2px solid #ddd;
  // margin: 15px;
  position: relative;
  // overflow: auto;
}

.scroll_custom__container {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.scroll_custom__content {
  position: absolute;
  width: 100%;
}

</style>
