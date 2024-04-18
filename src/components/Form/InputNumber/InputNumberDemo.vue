<script lang="ts" setup>
import { ref } from 'vue'
import InputNumber from './InputNumber.vue'
import DCont from '@/views/demos/DCont.vue'
import DTit from '@/views/demos/DTit.vue'
const val = ref('')
</script>

<template>
  <DCont>
    <DTit>一般</DTit>
    <InputNumber v-model="val" />
    <p>result: {{ val }}</p>
    <DTit>min = 0、max = 10</DTit>
    <InputNumber min="0" max="10" v-model="val" />
    <DTit>step = 0.1</DTit>
    <InputNumber step=".1" v-model="val" />

    <DTit>限制2为小数</DTit>
    <InputNumber step=".1" precision="2" v-model="val" />
  </DCont>
</template>
