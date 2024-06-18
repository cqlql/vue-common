<script lang="ts" setup>
import MenuItem from "./MenuItem.vue";
import type { MenuDataItem } from "./type";
defineProps<{
  list: MenuDataItem[];
  level: number;
}>();
defineEmits<{
  select: [];
}>();
</script>
<template>
  <div class="MenuList" style="position: relative">
    <MenuItem
      v-for="item in list"
      :key="item.id"
      :item="item"
      :level="level"
      @select="$emit('select')"
    />
  </div>
</template>
