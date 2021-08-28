<template>
  <div
    class="scroll-load-plus"
  >
    <Loading v-show="loading" />
    <div v-if="empty">没有数据</div>
    <ScrollLoad
      v-if="isTop"
      ref="vScrollLoad"

      is-top
      :scroll-container="scrollContainer"
      :load="load"
      :start-page="startPage+1"
    />
    <slot :list="list" />
    <ScrollLoad
      v-if="!isTop"
      ref="vScrollLoad"
      :scroll-container="scrollContainer"
      :load="load"
      :start-page="startPage+1"
    />
    <div v-size="size" class="ScrollCustom-demo__size">
      <div class="ScrollCustom-demo__size-cont" />
      <div class="ScrollCustom-demo__size-cont2" />
    </div>
  </div>
</template>

<script>
import ScrollLoad from './ScrollLoad.vue'
import Loading from '@/components/Loading/Loading.vue'
export default {
  components: {
    ScrollLoad,
    Loading
  },
  directives: {
    size: {
      mounted (el, { value }) {
        el.scrollTop = el.scrollHeight
        el.addEventListener('scroll', () => {
          el.scrollTop = el.scrollHeight
          value()
        }, {
          passive: true
        })
      }
    }
  },
  props: {
    isTop: Boolean,
    getList: {
      type: Function,
      default () {}
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
    }
  },
  async mounted () {
    this.scrollContainer = this.$el
    this.loading = true
    const status = this.status = await this.load(this.startPage).finally(() => {
      this.loading = false
    })
    if (!status) {
      this.$nextTick(() => {
        this.$refs.vScrollLoad.init()
        this.$refs.vScrollLoad.tryLoad()
      })
    }
  },
  methods: {
    async load (page) {
    // pages
    // currentPage: 1
    // totalNumber: 188
    // totalpages: 19
      const { list, pages } = await this.getList(page)

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
      } else if (list.length < 10) {
        return 'finish'
      }
    },
    size () {
      this.$refs.vScrollLoad.setScrollTop()
    }

  }
}
</script>

<style scoped lang="scss">
.scroll-load-plus {
  margin: 15px;
  border: 2px solid #aaa;
  width: 300px;
  height: 300px;
  overflow: auto;
  position: relative;
}

.ScrollCustom-demo__size-cont {
  // transition: all 0s ease 0s;
  // animation: 0s ease 0s 1 normal none running none;
  width: 200%;
  height: 200%;
  background-color: #fff;
}

.ScrollCustom-demo__size-cont2 {
  // transition: all 0s ease 0s;
  // animation: 0s ease 0s 1 normal none running none;

  width: 2.78e+06px;
  height: 2e+06px;
  background-color: #fff;
}
</style>
