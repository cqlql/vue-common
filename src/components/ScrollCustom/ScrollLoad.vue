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
// import Throttle from '@/utils/throttle.js'
import { throttleInit } from '@/utils/perf/throttle.js'
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
    },
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      page: null,
      distance: 10,
      // scrollBottom: 0,
      status: '',
      throttle: throttleInit()
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
    scroll () {
      this.throttle(() => {
        this.tryLoad()
      })
    },
    async tryLoad () {
      if (['noData', 'finish', 'loading'].includes(status)) return

      if (this.test()) {
        this.status = 'loading'
        this.status = await this.load(this.page++)
      }
    },
    test () {
      return this.scrollTop < this.distance
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
