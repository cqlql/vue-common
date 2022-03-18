<script lang="ts" setup>
import CalendarView from './CalendarView.vue'
import dayjs from 'dayjs'
import { computed, ref } from 'vue'
const currentDate = ref(dayjs())

const currentDateText = computed(() => {
  return currentDate.value.format('YYYY年M月D日')
})

const displayedYearMonth = computed(() => {
  let d = currentDate.value
  return {
    year: d.get('y'),
    month: d.get('M'),
  }
})

const selectedDate = ref('')

function onPrevMonth() {
  currentDate.value = currentDate.value.subtract(1, 'M')
}
function onNextMonth() {
  currentDate.value = currentDate.value.add(1, 'M')
}
</script>
<template>
  <div>
    <v-button @click="onPrevMonth">上月</v-button>
    <v-button @click="onNextMonth">下月</v-button>
    {{ currentDateText }}
    <CalendarView
      :displayedDate="displayedYearMonth"
      :selectedDate="selectedDate"
      :displayedYear="displayedYearMonth.year"
      :displayedMonth="displayedYearMonth.year"
      :year="displayedYearMonth.year"
      :month="displayedYearMonth.month"
    ></CalendarView>
  </div>
</template>

<style lang="scss" scoped></style>
