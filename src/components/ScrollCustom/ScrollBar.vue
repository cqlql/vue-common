<template>
  <div class="scroll-bar__container">
    <div
      class="scroll-bar"
      :class="barClass"
      :style="{height:height+'px', bottom:y+'px'}"
    />
  </div>
</template>

<script>
// import drag from '@/utils/drag/drag.js'
import drag from '@/utils/dom/drag/drag-plus2.js'
export default {
  props: {
    // height: {
    //   type: Number,
    //   default: 0
    // },
    // maxY: {
    //   type: Number,
    //   default: 0
    // }
  },
  emits: ['move'],
  data () {
    return {
      y: 0,
      height: 0,
      maxY: 0,
      barClass: ''
    }
  },
  watch: {
    y (y) {
      this.$emit('move', y)
    }
  },
  mounted () {
    this.drag = drag({
      elem: this.$el.children[0],
      onDown: (e) => {
        e.preventDefault()
        this.barClass = 'active'
      },
      onEnd: () => {
        this.barClass = ''
      },
      onMove: ({ ly }) => {
        this.setY(-ly)
      }
    })
  },
  methods: {
    addY (y) {
      const recordY = this.y
      this.drag.curr.y = -this.setY(recordY + y)
      return recordY !== this.y
    },
    setY (y) {
      if (y < 0) y = 0
      else if (y > this.maxY) y = this.maxY
      this.y = y
      return y
    },
    update ({
      clientHeight,
      contentHeight,
      scrollContainerHeight,
      scrollBottom
    }) {
      const minHeight = 30

      // (容器/内容 比) * 滚动条容器高
      let barHeight = clientHeight / contentHeight * scrollContainerHeight

      if (barHeight < minHeight) {
        barHeight = minHeight
      }
      this.height = barHeight

      const maxY = this.maxY = scrollContainerHeight - barHeight

      // 内容/滚动条 滚动距离比
      const ratio = (contentHeight - clientHeight) / maxY

      // if (barHeight === minHeight) {
      this.drag.curr.y = -(this.y = -scrollBottom / ratio)
      // }

      return {
        maxY,
        ratio
      }
    }
  }
}
</script>

<style scoped>
.scroll-bar__container {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  width: 12px;
}

.scroll-bar {
  width: 100%;
  background: #dcdcdc;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
}

.scroll-bar:hover {
  background-color: #ccc;
}

.scroll-bar.active {
  background-color: #bbb;
}

</style>
