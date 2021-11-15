<template>
  <div>
    <input type="text" @input="onInput" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  keep: string
}>()
const reg = new RegExp(props.keep)
function onInput(e: Event) {
  let target = (e as InputEvent).target as HTMLInputElement
  target.value = target.value.match(reg)?.[0] || ''
}
</script>
<style lang="scss"></style>
