<script lang="ts" setup>
import MenuList from "./src/MenuList.vue";
import type { MenuDataItem } from "./src/type";
defineProps<{
  list: MenuDataItem[];
}>();
defineEmits<{
  select: [];
}>();
</script>
<template>
  <div class="MenuTree">
    <MenuList :list="list" :level="0" @select="$emit('select')" />
  </div>
</template>
