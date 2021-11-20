<template>
  <div class="demo-box">
    <slot></slot>
    <button @click="toggleCodeShow">
      {{ codeVisible ? '隐藏' : '显示' }}代码
    </button>
    <div v-show="codeVisible">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const codeVisible = ref(false)

function toggleCodeShow() {
  codeVisible.value = !codeVisible.value
}
</script>
<style lang="scss" scoped>
.demo-box {
  border: 1px solid #3e4c5a5c;
  border-radius: 2px;
  padding: 10px;
  display: block;
  margin: 10px 0;
}
</style>
