<script lang="ts" setup>
import BoxView from './comp/BoxView.vue'
import Calendar from '../../../components/Calendar/Calendar.vue'
import SwipeX from '../SwipeX/SwipeX.vue'
import SliderFast from '../SliderFast/SliderFast.vue'
</script>
<template>
  <BoxView>
    <SliderFast></SliderFast>
  </BoxView>
  <BoxView>
    <v-button>确认</v-button>
  </BoxView>
  <BoxView>
    <Calendar></Calendar>
  </BoxView>
  <BoxView>
    <SwipeX></SwipeX>
  </BoxView>
</template>

<style lang="scss"></style>
