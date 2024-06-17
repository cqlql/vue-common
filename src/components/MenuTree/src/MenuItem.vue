<script lang="ts" setup>
// import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { vAutoAnimate } from '@formkit/auto-animate'
import MenuList from './MenuList.vue'
import type { MenuDataItem } from './type'
const props = defineProps<{
  item: MenuDataItem
}>()

const expanded = ref(false)
const hasChildren = computed(() => !!props.item.children?.length)
</script>
<template>
  <div class="MenuItem" v-auto-animate :class="{ expanded }">
    <div class="title-content" @click="expanded = !expanded">
      <div class="cont">
        <span>{{ item.name }}</span>
        <span v-if="hasChildren" class="arrows"><IconEpArrowDownBold /></span>
      </div>
    </div>
    <MenuList v-if="hasChildren && expanded" class="MenuList" :list="item.children!" />
  </div>
</template>

<style lang="scss" scoped>
.MenuItem {
  $h: 48px;

  .title-content {
    // height: $h;
    // line-height: $h;
    cursor: pointer;
    padding: 0 20px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: $h;
      background-color: #fff;
    }

    &:hover::before {
      background-color: #f8f8f8;
    }

    .cont {
      position: relative;
      display: flex;
      height: $h;
      align-items: center;
      justify-content: space-between;
    }

    .arrows {
      // font-size: 12px;
      color: #8f959e;
      transition: transform 0.4s cubic-bezier(0.34, 0.69, 0.1, 1);
    }
  }

  & > .MenuList {
    // display: none;
    padding-left: 20px;
  }

  &.expanded > .title-content {
    .arrows {
      transform: rotate(180deg);
    }
  }

  // &.expanded > .MenuList {
  //   display: block;
  // }
}
</style>
