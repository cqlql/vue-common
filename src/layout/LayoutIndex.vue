<script lang="ts" setup>
import LayoutContent from './LayoutContent.vue'
import LayoutSideBar from './LayoutSideBar.vue'
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
  height: 100vh;

  .left {
    width: 200px;
    border-right: 1px solid var(--el-border-color);
    padding: 10px;
  }

  .main {
    flex: 1;
  }
}
</style>
