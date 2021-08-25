<template>
  <div class="ScrollLoadPlus-demo">
    <div class="ScrollLoadPlus-demo__box">
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
    </div>

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
      <h3>没有数据</h3>
      <ScrollLoadPlus
        :get-list="getNoDate"
      />
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
  methods: {
    getList,
    getHasPagesList,
    getNoDate
  }
}
</script>

<style scoped lang="scss">
.ScrollLoadPlus-demo {}

.ScrollLoadPlus-demo__box {
  margin: 15px;
}
</style>
