<!-- <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DemoJSX',
})
</script> -->
<script lang="ts" setup>
import { ref } from 'vue'
import DemoJSX from './DemoJSXChild'
import DemoJSXChildSetup from './DemoJSXChildSetup'
import DemoJSXChildVue from './DemoJSXChildVue.vue'

const name = ref('1')
function onClick() {
  name.value = String(Math.random())
}
</script>
<template>
  <div>
    <p><button @click="onClick">test</button></p>
    <h2>tsx 文件 函数式</h2>
    <DemoJSX :name="name" />

    <h2>tsx 文件 setup</h2>

    <DemoJSXChildSetup :name="name" />

    <h2>tsx vue 文件</h2>
    <DemoJSXChildVue :name="name" />
  </div>
</template>

<style lang="scss"></style>
