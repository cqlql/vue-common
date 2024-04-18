<script lang="ts" setup>
const iconList = [
  'el-icon-notebook-1',
  'el-icon-discover',
  'el-icon-user',
  'el-icon-phone-outline',
  'el-icon-star-off',
  'el-icon-goods',

  'el-icon-date',
  'el-icon-help',
  'el-icon-paperclip',
  'el-icon-monitor',
  'el-icon-data-analysis',
  'el-icon-receiving',

  'el-icon-office-building',
  'el-icon-present',
  'el-icon-trophy',
  'el-icon-orange',
  'el-icon-cherry',
  'el-icon-files',

  'el-icon-bank-card',
  'el-icon-message',
  'el-icon-collection-tag',
  'el-icon-document',
  'el-icon-suitcase-1',
  'el-icon-collection',
];
</script>
<template>
  <div class="AppIconSelect">
    <div v-for="icon in iconList" :key="icon" class="item">
      <Icon :icon="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.AppIconSelect {
  display: flex;
  font-size: 28px;
  flex-wrap: wrap;
  width: 328px;

  .item {
    width: 48px;
    border-radius: var(--el-border-radius-base);
    background-color: var(--el-fill-color-light);
  }
}
</style>
