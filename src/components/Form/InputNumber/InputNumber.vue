<script lang="ts" setup>
let reg = /^-?(\d+\.?\d*)?$/
// const min = 0
// const max = 1000
// const step = 5
const props = defineProps<{
  min?: number
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

// function minus() {
//   let v = Number(props.modelValue) - step
//   if (v < min) {
//     v = min
//   }
//   emit('update:modelValue', String(v))
// }
// function add() {
//   let v = Number(props.modelValue) + step
//   if (v > max) {
//     v = max
//   }
//   emit('update:modelValue', String(v))
// }

function input(e: Event) {
  let target = e.target as HTMLInputElement
  let v = target.value

  let pass = reg.test(v)

  if (pass) {
    let min = props.min
    if (min !== undefined) {
      if (Number(v) < min) {
        v = String(min)
      }
    }
  } else {
    v = props.modelValue
  }

  emit('update:modelValue', v)

  // 同步
  if (v !== target.value) {
    target.value = v
  }
}
</script>
<template>
  <input type="text" :value="modelValue" @input="input" />
</template>

<style lang="less" scoped>
input {
  // width: 100%;
  // height: 46px;
  // text-align: center;
  // background: transparent;
  // border-radius: 0;
  border: 1px solid #ddd;

  // &:focus {
  //   outline: 1px solid #40a9ff;
  // }
}
</style>
