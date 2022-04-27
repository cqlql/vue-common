<template>
  <div>
    <InputNumber :min="0" v-model="val"></InputNumber>
    <p>result: {{ val }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InputNumber from '../InputNumber.vue'

const val = ref('')
</script>
