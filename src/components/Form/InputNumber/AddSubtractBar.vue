<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
const emit = defineEmits<{
  (e: 'minus'): void
  (e: 'add'): void
}>()
function minus() {
  emit('minus')
}
function add() {
  emit('add')
}
</script>
<template>
  <div class="AddSubtractBar">
    <div class="action left" @mousedown.prevent @click="minus">
      <slot v-if="$slots.minus" name="minus"></slot>
      <Icon v-else icon="ic:baseline-minus"></Icon>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="action right" @mousedown.prevent @click="add">
      <slot v-if="$slots.add" name="add"></slot>
      <Icon v-else icon="ic:baseline-add"></Icon>
    </div>
  </div>
</template>

<style lang="less" scoped>
.AddSubtractBar {
  display: flex;
  border: 1px solid #424b60;
  border-radius: 4px;

  .action {
    width: 46px;
    height: 46px;
    line-height: 46px;
    font-size: 22px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #2f3a52;
    }
  }

  .left {
  }

  .right {
  }

  .middle {
    flex: 1;
    border: 1px solid #414a60;
    border-top: none;
    border-bottom: none;
    text-align: center;

    // .value {
    //   line-height: 46px;
    // }

    // input {
    //   width: 100%;
    //   height: 46px;
    //   text-align: center;
    //   background: transparent;
    //   border-radius: 0;

    //   &:focus {
    //     outline: 1px solid #40a9ff;
    //   }
    // }
  }
}
</style>
