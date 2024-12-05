<script lang="ts" setup>
import PaginationBase from './PaginationBase.vue';
const {
  currentPage,
  pageSize = 10,
  total,
} = defineProps<{
  currentPage: number;
  pageSize?: number;
  total: number;
}>();

const emit = defineEmits<{
  (e: 'update:currentPage', val: number): void;
  (e: 'current-change', val: number): void;
}>();

const currentPageIndex = computed({
  get: () => currentPage - 1,
  set: (val) => emit('update:currentPage', val + 1),
});

const hasPagination = computed(() => {
  return total > pageSize;
});
</script>
<template>
  <PaginationBase
    v-if="hasPagination"
    v-model:currentPageIndex="currentPageIndex"
    :pageSize="pageSize"
    :total="total"
    @current-change="emit('current-change', $event + 1)"
  ></PaginationBase>
</template>
