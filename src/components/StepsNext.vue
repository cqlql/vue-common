<script lang="ts" setup>
// defineProps<{
//   propName: any
// }>();

</script>
<template>
  <div class="StepsNext">
    <div class="item completed">
      <div class="icon">1</div>
      <div class="title">实名认证</div>
    </div>
    <div class="line completed"></div>
    <div class="item completed">
      <div class="icon"></div>
      <div class="title"></div>
    </div>
    <div class="line"></div>
    <div class="item">
      <div class="icon"></div>
      <div class="title"></div>
    </div>
    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
$itemSize:50px;
$itemBorderWidth:1px;
$lineSpace:10px;
$activeColor:blue;
$activeTextColor:$activeColor;
$activeBorderColor:$activeColor;

.StepsNext {
  display: flex;
  align-items: center;

  .item {
    width: $itemSize;
    height: $itemSize;
    border-radius: $itemSize;
    border:$itemBorderWidth solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .line {
    flex:1;
    height: 2px;
    background-color: #ddd;
    margin: 0 $lineSpace;

    &:last-child {
      display: none;
    }
  }

  .icon {
    width: $itemSize;
    height: $itemSize;
    line-height: $itemSize;
    text-align: center;
  }

  .title {
    white-space: nowrap;
  }

  .item.completed {
    color: $activeTextColor;
    border-color: $activeTextColor;
  }

  .line.completed {
    background-color: $activeColor;
  }
}
</style>
