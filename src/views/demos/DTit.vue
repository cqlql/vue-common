<!-- 配合 DCont 使用 -->
<script lang="ts" setup></script>
<template>
  <h2 class="DemoTitle"><slot></slot></h2>
</template>

<style lang="scss" scoped>
.DemoTitle {
  padding: 10px;
  background-color: #ebf3ff;
  margin: 20px 0;
  margin-left: -10px;
  width: 100%;
  box-sizing: content-box;
}
</style>
