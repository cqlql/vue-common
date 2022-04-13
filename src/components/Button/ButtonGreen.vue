<!-- <script lang="ts" setup></script> -->
<template>
  <button class="ButtonGreen"> ButtonGreed </button>
</template>

<style lang="scss" scoped>
.ButtonGreen {
  background-image: linear-gradient(180deg, #399cf1 0%, #4affc0 100%);
  background-blend-mode: normal, normal;
  box-shadow: -1px 1px 4px 0 rgba(0, 0, 0, 0.5),
    2px 2px 11px 0 rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  font-size: 30px;
  color: #fff;
  // text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.2);
  padding: 0 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
}
</style>
