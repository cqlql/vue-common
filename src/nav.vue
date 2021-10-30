<template>
  <div>
    <h2>demos</h2>
    <p v-for="(route, key) of listSelf" :key="key">
      <router-link :to="route.path">
        {{ (route.meta && route.meta.title) || route.name || route.path }}
      </router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import { defineProps, computed } from 'vue'
const props = defineProps<{
  list: RouteRecordRaw[]
}>()
const listSelf = computed(function () {
  return props.list.slice(0, props.list.length - 1)
})
</script>

<style scoped>
h2 {
  /* padding: 20px 0 0; */
  font-size: 16px;
}

a {
  padding-left: 3px;
  font-size: 12px;
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
