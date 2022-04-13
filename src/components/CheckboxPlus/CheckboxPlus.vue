<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  list: any[]
}>()

let selectedIndex = ref(0)
function select(index: number) {
  selectedIndex.value = index
}
</script>
<template>
  <div class="checkbox-plus">
    <div
      v-for="(item, index) of list"
      :key="index"
      class="item"
      :class="{ selected: selectedIndex === index }"
      @click="select(index)"
    >
      <span class="checkbox-plus-tick"></span>
      <slot v-bind="item"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-plus {
  display: flex;

  & > .item {
    background-color: #020220;
    box-shadow: -1px 1px 4px 0 rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    border: solid 2px #333d51;
    position: relative;
    // overflow: hidden;
    padding: 10px 20px;

    & > .checkbox-plus-tick {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 16px;
      height: 16px;
      direction: ltr;
      // background-color: #1890ff;
      // border: 1px solid #d9d9d9;
      border-radius: 0 0 0 6px;
      border-collapse: separate;
      transition: all 0.3s;
      // opacity: 0;

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 21.5%;
        display: table;
        width: 5.71428571px;
        height: 9.14285714px;
        border: 2px solid #27435e;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(0) translate(-50%, -50%);
        opacity: 0;
        // transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
      }
    }

    &.selected {
      background-color: #27435e;
      border-color: #49aaee;

      & > .checkbox-plus-tick {
        background-color: #49aaee;

        &::after {
          transform: rotate(45deg) scale(1) translate(-50%, -50%);
          opacity: 1;
        }
      }
    }
  }
}
</style>
