<script lang="ts" setup>
import CountdownBtn from '../CountdownBtn.vue';

function getCode() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}
</script>
<template>
  <div class="CountdownBtnDemo">
    <CountdownBtn text="获取验证码" countText="s 后重发" :get="getCode" />
  </div>
</template>

<style lang="scss" scoped>
.CountdownBtnDemo {
  //
}
</style>
