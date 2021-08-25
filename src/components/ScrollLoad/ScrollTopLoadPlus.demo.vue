<template>
  <div class="ScrollTopLoadPlus-demo">
    <!-- <div class="ScrollTopLoadPlus-demo__box">
      <ScrollTopLoadPlus
        :get-list="getList"
        :status-handle="statusHandle"
        :result-handle="resultHandle"
      >
        <template #default="{list}">
          <p
            v-for="(v,i) of list"
            :key="i"
          >
            {{ v }}
          </p>
        </template>
      </ScrollTopLoadPlus>
    </div>

    <div class="ScrollTopLoadPlus-demo__box">
          <h3>有 pages </h3>
      <ScrollTopLoadPlus
        :get-list="getHasPagesList"
        :status-handle="statusHandle"
        :result-handle="resultHandle"
      >
        <template #default="{list}">
          <p
            v-for="(v,i) of list"
            :key="i"
          >
            {{ v }}
          </p>
        </template>
      </ScrollTopLoadPlus>
    </div> -->
    <div class="ScrollTopLoadPlus-demo__box">
      <h3>没有数据</h3>
      <ScrollTopLoadPlus
        :get-list="getNoDate"
        :status-handle="statusHandle"
        :result-handle="resultHandle"
      />
    </div>
  </div>
</template>

<script>
import ScrollTopLoadPlus from './ScrollTopLoadPlus.vue'
import { getList, getHasPagesList, getNoDate } from './get-list.mock.js'
export default {
  components: {
    ScrollTopLoadPlus
  },
  methods: {
    getList,
    getHasPagesList,
    getNoDate,
    resultHandle (list) {
      return list
    },
    statusHandle ({ list, allList, pages }) {

    }
  }
}
</script>

<style scoped lang="scss">
.ScrollTopLoadPlus-demo {}

.ScrollTopLoadPlus-demo__box {
  margin: 15px;
}
</style>
