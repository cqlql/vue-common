<template>
  <div class="ScrollLoadPlus-demo">
    <div class="ScrollLoadPlus-demo__box">
      <ScrollLoadPlus
        :get-list="getList"
        is-top
      >
        <template #default="{list}">
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
        </template>
      </ScrollLoadPlus>
    </div>

    <!-- <div class="ScrollLoadPlus-demo__box">
      <h3>有 pages </h3>
      <ScrollLoadPlus
        :get-list="getHasPagesList"
      >
        <template #default="{list}">
          <p
            v-for="(v,i) of list"
            :key="i"
          >
            {{ v }}
          </p>
        </template>
      </ScrollLoadPlus>
    </div>
    <div class="ScrollLoadPlus-demo__box">
      <h3>没有数据</h3>
      <ScrollLoadPlus
        :get-list="getNoDate"
      />
    </div> -->
  </div>
</template>

<script>
import ScrollLoadPlus from './ScrollTopLoadCustom.vue'
import { getList, getHasPagesList, getNoDate } from '../ScrollLoad/get-list.mock.js'
export default {
  components: {
    ScrollLoadPlus
  },
  data () {
    return {
      imgs: [
        '//img20.360buyimg.com/pop/s380x300_jfs/t1/166909/7/17418/87085/6073e5deE5159a884/76a2ff2bc18551bb.jpg.webp',
        '//img13.360buyimg.com/pop/s380x300_jfs/t1/56289/13/5487/99838/5d33f1d4E671cdc59/c341d1a3a0e4593d.png.webp',
        '//img11.360buyimg.com/babel/s380x300_jfs/t1/124193/7/20235/50643/5fc1b453Ede1ff346/4cfd67de0ee4869a.jpg.webp'
      ]
    }
  },
  methods: {
    async getList (page) {
      const { list } = await getList(page)
      return { list: list }
    },
    getHasPagesList,
    getNoDate
  }
}
</script>

<style scoped lang="scss">
.ScrollLoadPlus-demo {
  height: 300px;
  overflow: hidden;
  border: 2px solid #ddd;
}

.ScrollLoadPlus-demo__box {
  margin: 15px;
}
</style>
