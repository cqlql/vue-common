<template>
  <div>
    <InputNumber v-model="val" />
    <p>result: {{ val }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InputNumber from '../InputNumber.vue'
const val = ref('')
</script>
