<script lang="ts" setup>
import BoxView from './comp/BoxView.vue'
import Calendar from '@/components/Calendar/Calendar.vue'
import SwipeX from '../SwipeX/SwipeX.vue'
import SliderFast from '@/components/SliderFast/SliderFast.vue'
import TabButtonsDemo from '@/components/TabButtons/TabButtonsDemo.vue'
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlusDemo.vue'
import ButtonVue from '@/components/Button/ButtonVue.vue'
import ButtonGreen from '@/components/Button/ButtonGreen.vue'
</script>
<template>
  <BoxView title="ButtonGreen">
    <ButtonGreen> Button </ButtonGreen>
  </BoxView>
  <BoxView title="Button">
    <ButtonVue> Button </ButtonVue>
  </BoxView>
  <BoxView title="CheckboxPlus">
    <CheckboxPlus> </CheckboxPlus>
  </BoxView>
  <BoxView title="TabButtons">
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
