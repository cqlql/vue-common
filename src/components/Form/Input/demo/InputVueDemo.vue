<template>
  <div>
    <InputVue v-model="val"></InputVue>
    <p>result: {{ val }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InputVue from '../InputVue.vue'

const val = ref('')
</script>
<style lang="scss"></style>
