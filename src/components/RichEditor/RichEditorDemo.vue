<script lang="ts" setup>
import imgUrl from '@/assets/logo.png'
import RichEditor from './RichEditor.vue'
function onChange() {
  console.log('change')
}
function onInput() {
  console.log('input')
}

const value = ref(`
<h2>CKEditor 5</h2>
<img src="${imgUrl}" />
`)
</script>
<template>
  <div class="RichEditorDemo">
    <RichEditor v-model="value" @change="onChange" @input="onInput" />

    <button @click="value = Math.random() + ''">直接改变值，input 不应该触发</button>
  </div>
</template>

<style lang="scss" scoped>
.RichEditorDemo {
  padding: var(--page-padding);
}
</style>
