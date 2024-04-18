<script lang="ts" setup>
import Big from 'big.js'
import { isDef } from '@/utils/is'
import ActionBar from './ActionBar.vue'
const modelValue = defineModel<string>()
// const reg = /^[+-]?(\d+\.?\d*)?$/
const props = defineProps<{
  min?: string
  max?: string
  step?: string
  precision?: string
}>()

console.log(Big('0.1').toFixed(2, 0))

function plus() {
  const big = new Big(modelValue.value || '0').plus(props.step || '1')
  modelValue.value = toValue(fixMax(big) || big)
}

function minus() {
  const big = new Big(modelValue.value || '0').minus(props.step || '1')
  modelValue.value = toValue(fixMin(big) || big)
}

function fixMax(big: Big) {
  const max = props.max
  if (isDef(max)) {
    if (big.gt(max)) {
      return new Big(max)
    }
  }
}

function fixMin(big: Big) {
  const min = props.min
  if (isDef(min)) {
    if (big.lt(min)) {
      return new Big(min)
    }
  }
}

function toValue(big: Big) {
  const precision = props.precision
  if (isDef(precision)) {
    return big.toFixed(Number(precision), 0)
  }

  return big.toString()
}

function change(e: Event) {
  const target = e.target as HTMLInputElement

  let v = target.value
  try {
    if (v) {
      const big = new Big(v)
      v = toValue(fixMax(big) || fixMin(big) || big)
    }
  } catch (e) {
    v = modelValue.value || ''
  }

  modelValue.value = v

  // 同步
  if (v !== target.value) {
    target.value = v
  }
}
</script>
<template>
  <div class="InputNumber">
    <input
      type="text"
      :value="modelValue"
      @change="change"
      @keydown.up.prevent="plus"
      @keydown.down.prevent="minus"
    />
    <ActionBar class="ActionBar" @plus="plus" @minus="minus" />
  </div>
</template>

<style lang="scss" scoped>
.InputNumber {
  --InputNumber-color: #fff;
  --InputNumber-border-color: #dcdfe6;

  display: flex;
  border: 1px solid var(--InputNumber-border-color);
  border-radius: 4px;

  input {
    border-radius: 4px;
    border: none;
    flex: 1;
    outline: none;
    padding: 4px 10px;
    font-size: inherit;
    line-height: 22px;
  }

  .ActionBar {
    // opacity: 0;
    transition: opacity 0.2s linear 0.2s;
  }

  &:hover {
    .ActionBar {
      opacity: 1;
    }
  }
}
</style>
