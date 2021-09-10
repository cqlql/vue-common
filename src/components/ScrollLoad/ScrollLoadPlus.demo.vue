<template>
  <div class="ScrollLoadPlus-demo">
    <!-- <div class="ScrollLoadPlus-demo__box">
      <ScrollLoadPlus
        :get-list="getList"
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
    </div> -->

    <div class="ScrollLoadPlus-demo__box">
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
      <h3>初始不加载</h3>
      <div>
        <button @click="demo2StartLoad">开始加载/重新加载</button>
        <button @click="demo2Reset">恢复初始状态</button>
      </div>
      <ScrollLoadPlus
        ref="vScrollLoadPlusDemo2"
        :get-list="getHasPagesList"
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
      </ScrollLoadPlus>
    </div>
    <div class="ScrollLoadPlus-demo__box">
      <h3>没有数据</h3>
      <ScrollLoadPlus
        :get-list="getNoDate"
      />
    </div>

    <div class="ScrollLoadPlus-demo__box">
      <h3>更换初始图标</h3>
      <ScrollLoadPlus :immediate="false">
        <template #initial>
          <svg-icon icon-class="star" style="font-size: 100px;" />
        </template>
      </ScrollLoadPlus>
    </div>
  </div>
</template>

<script>
import ScrollLoadPlus from './ScrollLoadPlus.vue'
import { getList, getHasPagesList, getNoDate } from './get-list.mock.js'
export default {
  components: {
    ScrollLoadPlus
  },
  data () {
    return {
      demo2: {

      }
    }
  },
  methods: {
    getList,
    getHasPagesList,
    getNoDate,

    demo2StartLoad () {
      this.$refs.vScrollLoadPlusDemo2.restart()
    },
    demo2Reset () {
      this.$refs.vScrollLoadPlusDemo2.reset()
    }
  }
}
</script>

<style scoped lang="scss">
.ScrollLoadPlus-demo {}

.ScrollLoadPlus-demo__box {
  margin: 15px;

  .scroll-load-plus {
    width: 300px;
    height: 300px;
    border: 2px solid #ddd;
  }
}
</style>
