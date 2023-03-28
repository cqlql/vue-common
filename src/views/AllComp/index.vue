<script lang="ts" setup>
import BoxView from './comp/BoxView.vue'
import Calendar from '@/components/Calendar/Calendar.vue'
import SwipeX from '../SwipeX/SwipeX.vue'
import SliderFast from '@/components/SliderFast/SliderFast.vue'
import TabButtonsDemo from '@/components/TabButtons/TabButtonsDemo.vue'
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlusDemo.vue'
import ButtonVue from '@/components/Button/ButtonVue.vue'
import ButtonGreen from '@/components/Button/ButtonGreen.vue'
import LoadingDemo from '../LoadingDemo/LoadingDemo.vue'
import InputNumberDemo from '@/components/Form/InputNumber/demo/InputNumberDemo.vue'
import InputNumberMinDemo from '@/components/Form/InputNumber/demo/InputNumberMinDemo.vue'
import AddSubtractBar from '@/components/Form/InputNumber/AddSubtractBar.vue'
import Icon from '@/components/Icon/src/IconMain.vue'
</script>
<template>
  <BoxView title="AddSubtractBar">
    <AddSubtractBar>
      <template #minus>
        <Icon icon="ic:baseline-keyboard-arrow-down"></Icon>
      </template>
      <template #middle>
        <input type="text" />
      </template>
      <template #add>
        <Icon icon="ic:baseline-keyboard-arrow-up"></Icon>
      </template>
    </AddSubtractBar>
    <AddSubtractBar>
      <template #middle>
        <div class="value">123</div>
      </template>
    </AddSubtractBar>
  </BoxView>
  <BoxView title="InputNumber">
    <p><InputNumberDemo></InputNumberDemo></p>
    <p><InputNumberMinDemo></InputNumberMinDemo></p>
  </BoxView>
  <BoxView title="Loading">
    <LoadingDemo></LoadingDemo>
  </BoxView>
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
