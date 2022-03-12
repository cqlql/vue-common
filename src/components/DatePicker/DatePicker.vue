<template>
  <div class="calendar-week-contain">
    <div class="c-head c-row">
      <div v-for="(v, key) of head" :key="key" class="c-cell">
        {{ v }}
      </div>
    </div>
    <div v-for="(row, key) of rows" :key="key" class="c-row">
      <div v-for="(item, i) of row" :key="key + i" class="c-cell">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useOneWeek from './hooks/useOneWeek'

const { head, rows } = useOneWeek()
</script>

<style lang="scss" scoped>
.calendar-week-contain {
  border: 1px solid #ddd;

  .c-row {
    display: flex;
  }

  .c-cell {
    flex: 1;
    height: 40px;
    // border: 1px solid red;
    // box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    // 灰色
    // &.other {
    //   color: #aaa;
    // }
  }
}
</style>
