<script lang="ts" setup>
import MenuList from './MenuList.vue'
import type { MenuDataItem } from './type'
const props = defineProps<{
  item: MenuDataItem
}>()

const expanded = ref(false)
const hasChildren = computed(() => !!props.item.children?.length)
const vMenuListRef = ref<InstanceType<typeof MenuList>>()
const eMenuList = computed(() => {
  return vMenuListRef.value?.$el
})

async function onClickItem() {
  if (!hasChildren.value) return
  expanded.value = !expanded.value

  const eMenuListStyle = eMenuList.value!.style
  const eMenuListClassList = eMenuList.value!.classList

  if (expanded.value) {
    eMenuListStyle.height = 'auto'
    eMenuListStyle.display = 'block'
    const h = eMenuList.value.clientHeight
    eMenuListStyle.height = '0'
    eMenuListClassList.add('animated')
    await new Promise((resolve) => setTimeout(resolve, 0))
    eMenuListStyle.height = `${h}px`
  } else {
    const h = eMenuList.value.clientHeight
    eMenuListStyle.height = `${h}px`
    eMenuListClassList.add('animated')
    await new Promise((resolve) => setTimeout(resolve, 0))
    eMenuListStyle.height = '0'
  }

  eMenuList.value.addEventListener('transitionend', () => {
    eMenuListClassList.remove('animated')
    if (expanded.value) {
      eMenuListStyle.height = 'auto'
    } else {
      eMenuListStyle.display = 'none'
    }
  })
}
</script>
<template>
  <div class="MenuItem" :class="{ expanded }">
    <div class="title-content" @click="onClickItem">
      <div class="cont">
        <span>{{ item.name }}</span>
        <span v-if="hasChildren" class="arrows"><IconEpArrowDownBold class="icon" /></span>
      </div>
    </div>
    <MenuList v-if="hasChildren" ref="vMenuListRef" class="MenuList" :list="item.children!" />
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

    .icon {
      display: block;
    }
  }

  & > .MenuList {
    display: none;
    padding-left: 20px;

    // overflow: hidden;

    &.animated {
      overflow: hidden;
      transition:
        height 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
        opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
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
