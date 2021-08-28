<template>
  <div class="scroll_custom">
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
  data () {
    return {
      barHeight: 0,
      barMaxY: 0,
      y: 0,
      ratio: 0
    }
  },
  mounted () {
    const { vScrollBar } = this.$refs
    mouseWheel(this.$el, (e) => {
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
        console.log('元素尺寸有变化')
      })
      // setTimeout(() => {
      //   this.wait = false
      //   console.log('监听元素尺寸变化')
      // }, 20)
    },
    updateBarSize () {
      const { eContainer, eContent } = this.$refs
      const clientHeight = eContainer.clientHeight
      const scrollContainerHeight = clientHeight // 滚动条容器目前与内容容器同高
      const contentHeight = eContent.clientHeight
      // (容器/内容 比) * 滚动条容器高
      let barHeight = clientHeight / contentHeight * scrollContainerHeight
      if (barHeight < 50) {
        barHeight = 50
      }
      this.barHeight = barHeight

      const barMaxY = this.barMaxY = scrollContainerHeight - barHeight

      // 内容/滚动条 滚动距离比
      this.ratio = (contentHeight - clientHeight) / barMaxY
    },
    move (y) {
      this.y = -this.ratio * y
    }
  }
}
</script>

<style lang="scss">
.scroll_custom {
  width: 80%;
  height: 500px;
  border: 2px solid #ddd;
  margin: 15px;
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
