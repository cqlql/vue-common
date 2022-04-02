<script lang="ts" setup>
import BoxView from './comp/BoxView.vue'
import Calendar from '@/components/Calendar/Calendar.vue'
import SwipeX from '../SwipeX/SwipeX.vue'
import SliderFast from '@/components/SliderFast/SliderFast.vue'
import TabButtonsDemo from '@/components/TabButtons/TabButtonsDemo.vue'
</script>
<template>
  <BoxView>
    <TabButtonsDemo></TabButtonsDemo>
  </BoxView>
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
