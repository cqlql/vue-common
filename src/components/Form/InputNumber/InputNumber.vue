<template>
  <div>
    <InputVue
      :test="test"
      :modelValue="modelValue"
      @update:modelValue="updateValue"
    />
  </div>
</template>

<script lang="ts" setup>
import InputVue from '../Input/InputVue.vue'

const props = defineProps<{
  modelValue: string
  min?: number
  test?(v: string): boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

function updateValue(v: string) {
  emit('update:modelValue', v)
}

let reg = /^-?(\d+\.?\d*)?$/

function test(v: string) {
  let pass

  pass = reg.test(v)

  if (pass) {
    let min = props.min
    if (min !== undefined) {
      pass = Number(v) >= min
      if (!pass) {
        emit('update:modelValue', String(min))
      }
    }
  }

  return pass
}

// function updateValue() {
//   emit('update:modelValue', nowVal)
// }
</script>
<style lang="scss"></style>
