<script lang="ts" setup>
import demos from '@/router/demos';
import DemosNav from '@/views/comp/DemosNav.vue';
</script>
<template>
  <div class="LayoutSideBar">
    <DemosNav :list="demos[0]?.children" />
  </div>
</template>

<!-- <style lang="scss" scoped>
.LayoutSideBar {
  //
}
</style> -->
