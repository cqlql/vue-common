<template>
  <div class="DemosNav">
    <h2>demos</h2>
    <p v-for="(route, key) of listSelf" :key="key">
      <router-link :to="route.path">
        {{ (route.meta && route.meta.title) || route.name || route.path }}
      </router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { computed } from 'vue'
const props = defineProps<{
  list: RouteRecordRaw[]
}>()
const listSelf = computed(function () {
  return props.list.slice(0, props.list.length - 1)
})
</script>

<style lang="scss" scoped>
.DemosNav {
  h2 {
    font-size: 20px;
    padding-bottom: 6px;
  }

  a {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    color: #2c3e50;
    display: block;

    &:hover {
      color: #1890ff;
      background: #f3f3f3;
    }
  }
}
</style>
