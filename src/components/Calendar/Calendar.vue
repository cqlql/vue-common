<script lang="ts" setup>
import CalendarView from './CalendarView.vue'
import dayjs from 'dayjs'
import { computed, ref, watch } from 'vue'
import type { DateItem } from './typing'
const displayedDate = ref(new Date())
const displayedDatePlus = ref(dayjs(displayedDate.value))
const selectedDate = ref(new Date())

const selectedDateText = computed(() => {
  return dayjs(selectedDate.value).format('YYYY年M月D日')
})

watch(displayedDate, (value) => {
  displayedDatePlus.value = dayjs(value)
})

function onPrevMonth() {
  displayedDate.value = displayedDatePlus.value.subtract(1, 'M').toDate()
}
function onNextMonth() {
  displayedDate.value = displayedDatePlus.value.add(1, 'M').toDate()
}

function onToToday() {
  displayedDate.value = new Date()
}
function dateHandle(dateItem: DateItem) {
  // console.log('🚀 -- dateHandle -- args', params)
}
function onSelect(dateItem: DateItem) {
  console.log('🚀 -- onSelect -- dateItem', dateItem)
}
function onChange(dateItem: DateItem) {
  console.log('🚀 -- onChange -- dateItem', dateItem)
}
</script>
<template>
  <div>
    <v-button @click="onPrevMonth">上月</v-button>
    <v-button @click="onNextMonth">下月</v-button>
    <v-button @click="onToToday">今天</v-button>
    {{ selectedDateText }}
    <CalendarView
      v-model:selectedDate="selectedDate"
      v-model:displayedDate="displayedDate"
      :dateHandle="dateHandle"
      @select="onSelect"
      @change="onChange"
    ></CalendarView>
  </div>
</template>

<!-- <style lang="scss" scoped></style> -->
