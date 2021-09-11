<template>
  <div class="ScrollLoadBothDemo">
    <div class="ScrollLoadBothDemo__section">
      <button @click="restart">重新加载</button>
      <span class="ScrollLoadBothDemo__value">status:{{ status }}</span>
      <span class="ScrollLoadBothDemo__value">topPage:{{ topPage }}</span>
      <span class="ScrollLoadBothDemo__value">bottomPage: {{ bottomPage }}</span>

      <ScrollLoadBoth
        ref="vScrollLoadBoth"
        :load="load"
        :start-page="4"
      >
        <template #default="{list}">
          <p
            v-for="(v,i) of list"
            :key="v"
          >
            <span v-if="v.toFixed">{{ v }}</span>
            <img
              v-else
              width="100"
              :src="v+'?'+i"
            >
          </p>
        </template>
      </ScrollLoadBoth>
    </div>
    <div class="ScrollLoadBothDemo__section">
      <h3>初始不加载</h3>
      <div>
        <button @click="demo2StartLoad">开始加载/重新加载</button>
        <button @click="demo2Reset">恢复初始状态</button>
      </div>
      <ScrollLoadBoth
        ref="vScrollLoadBothDemo2"
        :load="load"
        :immediate="false"
      >
        <template #default="{list}">
          <p
            v-for="(v,i) of list"
            :key="i"
          >
            {{ v }}
          </p>
        </template>
      </ScrollLoadBoth>
    </div>
  </div>
</template>

<script>
import ScrollLoadBoth from './ScrollLoadBoth.vue'
import { getListScrollBoth } from './get-list.mock.js'
export default {
  components: {
    ScrollLoadBoth
  },
  data () {
    return {
      topPage: '',
      bottomPage: '',
      status: ''
    }
  },
  computed: {
    vScrollLoadBoth () {
      return this.$refs.vScrollLoadBoth
    },
    isTop () {
      const { vScrollLoadBoth } = this.$refs
      if (vScrollLoadBoth) {
        return vScrollLoadBoth.isTop
      }
      return false
    }
  },
  mounted () {
    const { vScrollLoadBoth } = this
    this.$watch(() => {
      return vScrollLoadBoth.topPage
    }, (v) => {
      this.topPage = v
    })
    this.$watch(() => {
      return vScrollLoadBoth.bottomPage
    }, (v) => {
      this.bottomPage = v
    })
    this.$watch(() => {
      return vScrollLoadBoth.status
    }, (v) => {
      this.status = v
    })
  },
  methods: {
    load (page) {
      return getListScrollBoth(page)
    },
    restart () {
      this.vScrollLoadBoth.restart()
    },
    demo2StartLoad () {
      this.$refs.vScrollLoadBothDemo2.restart()
    },
    demo2Reset () {
      this.$refs.vScrollLoadBothDemo2.reset()
    }
  }
}
</script>

<style lang="scss">
.ScrollLoadBothDemo__section {
  .scroll-load-both {
    width: 300px;
    height: 300px;
    border: 2px solid #ddd;
  }
}

.ScrollLoadBothDemo__value {
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 0 3px;
  margin: 0 3px;
}
</style>
