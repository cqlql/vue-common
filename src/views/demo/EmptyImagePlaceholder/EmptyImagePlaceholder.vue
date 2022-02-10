<script lang="ts" setup></script>
<template>
  <div>
    <h1>图片占位</h1>
    <img class="empty-img-bg" width="590" height="470" />
  </div>
</template>

<style lang="scss" scoped>
.empty-img-bg {
  background: url(@/assets/image-empty.svg) no-repeat center;
  background-size: 50% auto;
}
</style>
