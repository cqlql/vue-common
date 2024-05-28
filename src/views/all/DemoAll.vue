<script lang="ts" setup>
import Calendar from '@/components/Calendar/Calendar.vue'
import SwipeX from '../SwipeX/SwipeX.vue'
import SliderFast from '@/components/SliderFast/SliderFast.vue'
import TabButtonsDemo from '@/components/TabButtons/TabButtonsDemo.vue'
import CheckboxPlus from '@/components/CheckboxPlus/CheckboxPlusDemo.vue'
import ButtonVue from '@/components/Button/ButtonVue.vue'
import ButtonGreen from '@/components/Button/ButtonGreen.vue'
import LoadingDemo from '../LoadingDemo/LoadingDemo.vue'
import InputNumberDemo from '@/components/Form/InputNumber/InputNumberDemo.vue'
import AddSubtractBar from '@/components/Form/InputNumber/ActionBar.vue'
import DCont from '../demos/DCont.vue'
import DTit from '../demos/DTit.vue'
import PageLoading from './PageLoading.vue'
import BaseSwitch from '@/components/Form/BaseSwitch.vue'
import Icon from '@/components/Icon/Icon.vue'
import AnimationShakeX from './AnimationShakeX.vue'
import ProgressLoading from './ProgressLoading.vue'
</script>
<template>
  <DCont>
    <DTit>动画</DTit>
    可用于未勾选同意框时的动画
    <AnimationShakeX />
    <DTit title="开关" />
    <BaseSwitch />
    <DTit title="AddSubtractBar" />
    <AddSubtractBar>
      <template #minus>
        <Icon icon="ic:baseline-keyboard-arrow-down" />
      </template>
      <template #middle>
        <input type="text" />
      </template>
      <template #add>
        <Icon icon="ic:baseline-keyboard-arrow-up" />
      </template>
    </AddSubtractBar>
    <AddSubtractBar>
      <template #middle>
        <div class="value">123</div>
      </template>
    </AddSubtractBar>

    <DTit title="InputNumber" />
    <p><InputNumberDemo /></p>

    <DTit title="Loading" />
    <LoadingDemo />
    <ProgressLoading />
    <PageLoading />

    <DTit title="ButtonGreen" />
    <ButtonGreen> Button </ButtonGreen>

    <DTit title="Button" />
    <ButtonVue> Button </ButtonVue>

    <DTit title="CheckboxPlus" />
    <CheckboxPlus />

    <DTit title="TabButtons" />
    <TabButtonsDemo />

    <SliderFast />

    <v-button>确认</v-button>

    <Calendar />

    <SwipeX />
  </DCont>
</template>
