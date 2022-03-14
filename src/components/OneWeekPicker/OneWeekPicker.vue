<template>
  <div class="calendar-week-contain">
    <div class="c-head c-row">
      <div v-for="(v, key) of head" :key="key" class="c-cell">
        {{ v }}
      </div>
    </div>
    <div v-for="(row, key) of rows" :key="key" class="c-row">
      <div v-for="(item, i) of row" :key="key + i" class="c-cell">
        <div
          v-if="item.value"
          class="c-cell-content"
          :class="{
            today: item.isToday,
            selected: item.value === selectedItem.value,
          }"
          @click="handleSelect(item)"
        >
          <div>{{ item.value }}</div>
          <div v-if="item.info" class="c-cell-info">{{ item.info }}</div>
          <div v-else class="c-cell-info no">无</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useOneWeek from './hooks/useOneWeek'
import type { DateItem } from './typing'

const { head, rows, selectedItem } = useOneWeek()

function handleSelect(item: DateItem) {
  selectedItem.value = item
}
</script>

<style lang="scss" scoped>
.calendar-week-contain {
  border: 1px solid #ddd;
  text-align: center;

  .c-row {
    display: flex;
  }

  .c-cell {
    flex: 1;
  }

  .c-cell-content {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    padding: 4px;
    box-sizing: content-box;
    cursor: pointer;

    &:active {
      background-color: #f5f5f5;
    }

    &.today {
      outline: 1px solid #4baaff;
    }

    &.selected {
      background-color: #4baaff;
      color: #fff;

      .c-cell-info {
        color: #fff;
      }
    }

    &.toselectedday:active {
      background-color: rgba(75, 171, 255, 0.8);
    }
  }

  .c-head .c-cell {
    height: 40px;
    line-height: 40px;
  }

  .c-cell-info {
    color: #4baaff;
    font-size: 12px;

    .no {
      color: #a8a8a8;
    }
  }
}
</style>
