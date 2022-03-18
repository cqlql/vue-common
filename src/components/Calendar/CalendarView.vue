<template>
  <div class="calendar-contain">
    <div class="c-head c-row">
      <div v-for="(v, key) of head" :key="key" class="c-cell">
        {{ v }}
      </div>
    </div>
    <div v-for="(row, key) of rows" :key="key" class="c-row">
      <div
        v-for="item of row"
        :key="item.value"
        class="c-cell"
        :class="item.class"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
let todayDate = new Date()
export default {
  name: 'CalendarVue',
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    year?: number
    month?: number //  月份 (一月 0， 十二月 11)
    sundayFirst?: boolean
  }>(),

  {
    year: (() => todayDate.getFullYear())(),
    month: (() => todayDate.getMonth() + 1)(),
  },
)

function getDateInstanceLast(year: number, month: number) {
  return new Date(year, month, 0)
}

// 上月天要显示总数
const lastMonthDayTotal = computed(() => {
  return 7 - firstWeekDay.value + (props.sundayFirst ? 1 : 0)
})
// 上月天总数
const lastMonthDayTotalFull = computed(() => {
  return lastMonthDateLast.value.getDate()
})
// 剩下的要显示的下月天数
const nextMonthDayTotal = computed(() => {
  return 42 - lastMonthDayTotal.value - dayTotal.value
})
// 当月天数
const dayTotal = computed(() => {
  return dateLast.value.getDate()
})
// 当月1号星期几
const firstWeekDay = computed(() => {
  return dateFirst.value.getDay()
})
// 当前date，第一天
const dateFirst = computed(() => {
  return new Date(props.year, props.month, 1)
})
// 当月 date，最后一天
const dateLast = computed(() => {
  return getDateInstanceLast(props.year, props.month + 1)
})
// 上月 date，最后一天
const lastMonthDateLast = computed(() => {
  return getDateInstanceLast(props.year, props.month)
})
const head = computed(() => {
  const head = ['一', '二', '三', '四', '五', '六']
  if (props.sundayFirst) {
    head.unshift('日')
  } else {
    head.push('日')
  }
  return head
})
// 日期格子数据
const rows = computed(() => {
  let wholeIndex = 0

  const body: any[] = [[], [], [], [], [], []]

  let lastMonthDayTotalValue = lastMonthDayTotal.value
  let lastMonthDayTotalFullValue = lastMonthDayTotalFull.value
  let dayTotalValue = dayTotal.value
  let nextMonthDayTotalValue = nextMonthDayTotal.value

  for (let index = 0; index < lastMonthDayTotalValue; index++) {
    body[0].push({
      class: 'other',
      value: lastMonthDayTotalFullValue - lastMonthDayTotalValue + index + 1,
    })
    wholeIndex++
  }

  for (let index = 0; index < dayTotalValue; index++) {
    body[~~(wholeIndex / 7)].push({
      class: '',
      value: index + 1,
    })
    wholeIndex++
  }

  for (let index = 0; index < nextMonthDayTotalValue; index++) {
    body[~~(wholeIndex / 7)].push({
      class: 'other',
      value: index + 1,
    })
    wholeIndex++
  }

  return body
})
</script>

<style lang="scss">
.calendar-contain {
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

    &.other {
      color: #aaa;
    }
  }
}
</style>
