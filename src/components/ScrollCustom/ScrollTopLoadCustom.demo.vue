<template>
  <div class="ScrollLoad-demo">
    <button @click="scrollContainer.scrollTop=100">test</button>
    <div
      ref="container"
      class="container"
    >
      <ScrollLoad
        ref="vScrollLoad"
        is-top
        :scroll-container="scrollContainer"
        :load="load"
        :start-page="2"
      />
      <p
        v-for="(v,i) of list"
        :key="i"
      >
        {{ v }}
        <img
          v-if="v===11"

          :src="imgs[0]"
          alt=""
        >
        <img
          v-if="v===15"
          :src="imgs[1]"
          alt=""
        >
        <img
          v-if="v===1"
          :src="imgs[2]"
          alt=""
        >
      </p>
    </div>
  </div>
</template>

<script>
import ScrollLoad from './ScrollTopLoad.vue'
import { getList } from '../ScrollLoad/get-list.mock.js'
export default {
  components: {
    ScrollLoad
  },
  data () {
    return {
      page: 0,
      scrollBottom: 0,
      scrollContainer: null,
      list: [],
      imgs: [
        '//img20.360buyimg.com/pop/s380x300_jfs/t1/166909/7/17418/87085/6073e5deE5159a884/76a2ff2bc18551bb.jpg.webp',
        '//img13.360buyimg.com/pop/s380x300_jfs/t1/56289/13/5487/99838/5d33f1d4E671cdc59/c341d1a3a0e4593d.png.webp',
        '//img11.360buyimg.com/babel/s380x300_jfs/t1/124193/7/20235/50643/5fc1b453Ede1ff346/4cfd67de0ee4869a.jpg.webp'
      ]
    }
  },
  async mounted () {
    this.scrollContainer = this.$refs.container
    await this.load(1)
    this.$nextTick(() => {
      this.$refs.vScrollLoad.init()
      this.$refs.vScrollLoad.tryLoad()
    })
  },
  methods: {
    async load (page) {
      const { list } = await getList(page)

      let allList
      if (page === 1) { // 刷新
        allList = this.list = list
      } else {
        allList = this.list = list.concat(this.list)
      }
      console.log(list)
      if (!allList.length) {
        return 'noData'
      }
      if (list.length < 10) {
        return 'finish'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.ScrollLoad-demo {
  margin: 15px;

  .container {
    border: 2px solid #aaa;
    width: 300px;
    height: 300px;
    overflow: auto;
  }
}

</style>
