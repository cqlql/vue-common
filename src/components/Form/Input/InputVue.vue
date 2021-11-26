<template>
  <input type="text" @input="onInput" :value="modelValue" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string
  test?(v: string): boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

function onInput(e: Event) {
  let target = (e as InputEvent).target as HTMLInputElement
  let nowVal = target.value
  if (props.test === undefined || props.test(nowVal)) {
    emit('update:modelValue', nowVal)
  } else {
    target.value = props.modelValue
  }
}
</script>
<style lang="scss"></style>
