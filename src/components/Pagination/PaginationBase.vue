<script lang="ts" setup>
import { paginationCalculate } from './paginationCalculate';
import IconSiMoreHorizFill from '~icons/si/more-horiz-fill';
import IconMaterialSymbolsKeyboardDoubleArrowLeftRounded from '~icons/material-symbols/keyboard-double-arrow-left-rounded';
import IconMaterialSymbolsKeyboardDoubleArrowRightRounded from '~icons/material-symbols/keyboard-double-arrow-right-rounded';
// 0 起始
// const currentPageIndex = ref(8);
const currentPageIndex = defineModel<number>('currentPageIndex', {
  required: true,
});

const { pageSize, total } = defineProps<{
  pageSize: number;
  total: number;
}>();

const emit = defineEmits<{
  (e: 'current-change', val: number): void;
}>();

const sideNum = 2;

const pageCount = computed(() => {
  return Math.ceil(total / pageSize);
});

const btns = ref<(number | null)[]>([]);

watchEffect(() => {
  btns.value = paginationCalculate({
    pageIndex: currentPageIndex.value,
    pageCount: pageCount.value,
    sideNum,
  });
});

function changePage(pageIndex: number | null, index: number) {
  if (pageIndex === currentPageIndex.value) return;
  if (pageIndex === null) {
    if (index === 1) {
      let page = currentPageIndex.value - 5;
      if (page < 0) {
        page = 0;
      }
      pageIndex = page;
    } else {
      let page = currentPageIndex.value + 5;
      if (page > pageSize - 1) {
        page = pageSize - 1;
      }
      pageIndex = page;
    }
  }
  currentPageIndex.value = pageIndex;
  emit('current-change', pageIndex);

  btns.value = paginationCalculate({ pageIndex: pageIndex, pageCount: pageSize, sideNum });
}
</script>
<template>
  <div class="Pagination">
    <a
      v-for="(btn, index) in btns"
      :key="index"
      :class="{ more: btn === null, active: btn === currentPageIndex }"
      @click="changePage(btn, index)"
    >
      <template v-if="btn === null">
        <IconSiMoreHorizFill class="more-icon" />
        <IconMaterialSymbolsKeyboardDoubleArrowLeftRounded
          class="to-icon"
          v-if="index === 1"
        ></IconMaterialSymbolsKeyboardDoubleArrowLeftRounded>
        <IconMaterialSymbolsKeyboardDoubleArrowRightRounded
          class="to-icon"
          v-else
        ></IconMaterialSymbolsKeyboardDoubleArrowRightRounded>
      </template>
      <template v-else>{{ btn + 1 }}</template>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.Pagination {
  display: flex;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    // padding: 3px 6px;
    margin: 0 4px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-color-regular);
    // color: #303133;
    cursor: pointer;
    user-select: none;
    background-color: var(--color-info-light-9);
    border-radius: 2px;

    &:hover {
      color: var(--color-primary);
    }
    &.active {
      color: #fff;
      cursor: default;
      background-color: var(--color-primary);
    }
  }

  .to-icon {
    display: none;
  }
  .more:hover {
    .more-icon {
      display: none;
    }
    .to-icon {
      display: block;
    }
  }
}
</style>
