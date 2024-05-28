<script lang="ts" setup>
const loading = ref(false)
</script>
<template>
  <div class="ProgressLoading" :class="{ active: loading }">
    <div class="bar"></div>
  </div>

  <button @click="loading = !loading">动画切换</button>
</template>

<style lang="scss" scoped>
.ProgressLoading {
  position: relative;
  width: 100px;
  height: 20px;
  background-color: #eee;
  overflow: hidden;

  .bar {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 170, 212);
    transform: translateX(-100%);
  }

  &.active {
    .bar {
      transition: 0.5s;
      transform: translateX(0);
    }
  }
}
</style>
