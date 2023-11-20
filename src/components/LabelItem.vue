<script lang="ts" setup>
defineProps<{
  title: string
}>();
</script>
<template>
  <div class="LabelItem">
    <div class="head">
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.LabelItem {
  background-color: #fff;

  .head {
    height: 50px;
    border: 1px solid #f2f2f2;
    line-height: 50px;
    padding-left: 10px;
  }
}
</style>
