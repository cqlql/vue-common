<script lang="ts" setup>
import Banner from './Banner.vue'
import BannerDeep from './BannerDeep.vue'
const vBannerRef = ref<InstanceType<typeof Banner>>()
const vBannerDeepRef = ref<InstanceType<typeof BannerDeep>>()
</script>
<template>
  <div class="BannerDemo">
    <Banner ref="vBannerRef" />
    <div class="btns">
      <button class="btn prev" @click="vBannerRef?.swipeLeft()">左边</button>
      <button class="btn next" @click="vBannerRef?.swipeRight()">右边</button>
    </div>
    <BannerDeep ref="vBannerDeepRef" />
    <div class="btns">
      <button class="btn prev" @click="vBannerDeepRef?.swipeLeft()">左边</button>
      <button class="btn next" @click="vBannerDeepRef?.swipeRight()">右边</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.BannerDemo {
}
</style>
