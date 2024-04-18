<!-- 
  DCont 用在最外层，配合 DTIt 使用

  <DCont>
    <DTIt>InputNumber</DTIt>
    <InputNumber v-model="val" />
    <p>result: {{ val }}</p>

    <DTIt>InputNumber--min</DTIt>
    <InputNumber :min="0" v-model="val" />
  </DCont>
 -->
<script lang="ts" setup></script>
<template>
  <div class="DemoContainer">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.DemoContainer {
  padding: 10px;
}
</style>
