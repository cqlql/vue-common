<script lang="ts" setup>
import { computed, ref } from 'vue'
import Icon from '@/components/Icon/src/Icon.vue'
import SliderOnly from './SliderOnly.vue'
import type { SlideClass } from './typing'

const slideClass = ref<SlideClass>('')

let list = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
])
let index = ref(0)

let listLength = computed(() => {
  return list.value.length
})

let listView = computed(() => {
  let indexValue = index.value
  let prevIndex = indexValue - 1
  let nextIndex = indexValue + 1
  let listLengthValue = listLength.value
  let listValue = list.value

  if (prevIndex < 0) {
    prevIndex = listLengthValue - 1
  }

  if (nextIndex >= listLengthValue) {
    nextIndex = 0
  }

  return [listValue[prevIndex], listValue[indexValue], listValue[nextIndex]]
})

function inRight() {
  let indexValue = index.value
  let listLengthValue = listLength.value
  indexValue += 1
  if (indexValue >= listLengthValue) {
    indexValue = 0
  }
  index.value = indexValue
  slideClass.value = 'slideInRight'
}
function inLeft() {
  let indexValue = index.value
  let listLengthValue = listLength.value
  indexValue -= 1
  if (indexValue < 0) {
    indexValue = listLengthValue - 1
  }
  index.value = indexValue
  slideClass.value = 'slideInLeft'
}
</script>
<template>
  {{ listView }}
  <v-button @click="inLeft">
    <Icon icon="ic:twotone-keyboard-arrow-left"></Icon>
  </v-button>
  <v-button @click="inRight"
    ><Icon icon="ic:twotone-keyboard-arrow-right"></Icon
  ></v-button>
  <SliderOnly v-model:slideClass="slideClass">
    <template #item1>
      {{ list[0] }}
    </template>
    <template #item2>
      {{ list[1] }}
    </template>
    <template #item3>
      {{ list[2] }}
    </template>
  </SliderOnly>
</template>

<style lang="scss" scoped>
$width: 100px;
$height: 100px;

.SliderFast {
}

.SliderFast_list {
}
</style>
