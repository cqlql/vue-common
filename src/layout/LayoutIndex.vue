<script lang="ts" setup>
import LayoutContent from './LayoutContent.vue';
import LayoutSideBar from './LayoutSideBar.vue';
</script>
<template>
  <div class="LayoutIndex">
    <div class="left">
      <LayoutSideBar />
    </div>
    <div class="main">
      <LayoutContent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.LayoutIndex {
  display: flex;

  .left {
    width: 200px;
  }

  .main {
    flex: 1;
  }
}
</style>
