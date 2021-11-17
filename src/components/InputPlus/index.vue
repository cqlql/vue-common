<template>
  <div>
    <input type="text" @input="onInput" :value="modelValue" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  modelValue: string
  test(v: string): boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

const { /*  val,  */ onInput } = (() => {
  // const val = ref(props.modelValue)

  function onInput(e: Event) {
    let target = (e as InputEvent).target as HTMLInputElement
    let nowVal = target.value
    console.log(nowVal)
    if (props.test(nowVal)) {
      // val.value = nowVal
      emit('update:modelValue', nowVal)
    } else {
      // target.value = val.value
      target.value = props.modelValue
    }
  }
  return {
    // val,
    onInput,
  }
})()
</script>
<style lang="scss"></style>
