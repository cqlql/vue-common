<script lang="ts" setup>
import CalendarView from './CalendarView.vue'
import dayjs from 'dayjs'
import { computed, ref } from 'vue'
import type { DateItem } from './typing'
const displayedDate = ref(dayjs())

const displayedDateText = computed(() => {
  return displayedDate.value.format('YYYY年M月D日')
})

const displayedDateNative = computed(() => {
  console.log(
    '🚀 -- displayedDateNative -- displayedDateNative',
    displayedDateNative,
  )
  return displayedDate.value.toDate()
})

const selectedDate = ref(new Date())

function onPrevMonth() {
  displayedDate.value = displayedDate.value.subtract(1, 'M')
}
function onNextMonth() {
  displayedDate.value = displayedDate.value.add(1, 'M')
}

function onToToday() {
  displayedDate.value = dayjs()
}
function dateHandle(dateItem: DateItem) {
  // console.log('🚀 -- dateHandle -- args', params)
}
function onSelect(dateItem: DateItem) {
  selectedDate.value = dateItem.date
  if (dateItem.notCurrentMonth) {
    displayedDate.value = dayjs(dateItem.date)
  }
}
</script>
<template>
  <div>
    <v-button @click="onPrevMonth">上月</v-button>
    <v-button @click="onNextMonth">下月</v-button>
    <v-button @click="onToToday">今天</v-button>
    {{ displayedDateText }}
    <CalendarView
      :selectedDate="selectedDate"
      :displayedDate="displayedDateNative"
      :dateHandle="dateHandle"
      @select="onSelect"
    ></CalendarView>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
