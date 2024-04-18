<script lang="ts" setup>
import Icon from '../Icon.vue';
import IconFluentMultiselectLtr16Filled from '~icons/fluent/multiselect-ltr16-filled';
import AppIconSelect from '../src/AppIconSelect.vue';
import Iconify from '../src/Iconify.vue';
import ImgIcon from '../src/ImgIcon.vue';
import iconsData from '@/components/Icon/Iconify-data';
</script>
<template>
  <div class="app-container">
    <div class="IconDemo">
      <Icon v-for="iconName of iconsData" :key="iconName" :icon="iconName" />
    </div>
    <h2>如果找不到</h2>
    <Icon icon="" />

    <h2>icon onlyIcon</h2>
    <p style="font-size: 12px">注意，依然可以设置class，之前的实现方式不行</p>
    <Icon icon="IconCarbonUserAvatarFilled" class="i-class" only-icon />

    <h2>值可以是组件</h2>
    <Icon :icon="IconFluentMultiselectLtr16Filled" class="i-class" only-icon />

    <h2>MyIcon 组件</h2>
    <Iconify icon="EpCloseBold" />

    <!-- <h2>SvgIcon 组件</h2> -->
    <!-- <SvgIcon icon="tree" /> -->

    <!-- <h2>AppIcon</h2> -->
    <!-- <AppIcon /> -->
    <h2>ImgIcon</h2>
    <ImgIcon icon="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
    <h2>应用图标选择</h2>
    <AppIconSelect />
  </div>
</template>

<style lang="scss">
.app-container {
  font-size: 30px;

  h2 {
    background-color: #cfe7ff;
    margin-left: -15px;
    padding: 6px 15px;
    width: 100%;
    box-sizing: content-box;
    font-size: 16px;
  }
}

.IconDemo {
  display: flex;
  gap: 10px;
}
</style>
