<template>
  <div class="SkeletonDemo">
    <label> loading 切换 <input type="checkbox" v-model="loading" /> </label>

    <VSkeleton :loading="loading" :animated="true">
      <template #template>
        <VSkeletonItem variant="image" style="width: 240px; height: 240px" />
        <VSkeletonItem />
        <VSkeletonItem style="width: 30%" />
        <VSkeletonItem />
      </template>
      <p
        >天色有点阴暗，看着挺舒服的。有一点微风，树梢微微摇起。天上应该布满了云，不然怎么会一点蓝也看不见。</p
      >
      <p>哈哈哈……</p>
      <p
        >学校早说要翻新，一两年过去，翻新个屁，墙皮改掉的还是掉，操场已经被人巴拉的差不多了。</p
      >
    </VSkeleton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VSkeleton from './Skeleton.vue'
import VSkeletonItem from './SkeletonItem.vue'

const loading = ref(true)
</script>
<style lang="scss">
.SkeletonDemo {
  margin: 10px;
  .v-skeleton-item {
    margin-top: 16px;
  }
  // .v-skeleton-item + .v-skeleton-item {
  //   margin-top: 16px;
  // }
}
</style>
