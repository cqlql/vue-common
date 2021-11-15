<template>
  <div>
    <InputPlus keep="\d*\.?\d*" :replace="replace" />
  </div>
</template>

<script lang="ts" setup>
import InputPlus from '../index.vue'

function replace(v: string) {
  return v
}
</script>
<style lang="scss"></style>
