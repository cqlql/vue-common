<script lang="ts" setup>
import MenuItem from './MenuItem.vue'
import type { MenuDataItem } from './type'

defineProps<{
  list: MenuDataItem[]
}>()
</script>
<template>
  <div class="MenuList">
    <MenuItem v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>
