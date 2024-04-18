<script lang="tsx" setup>
import * as icons from '../Iconify-data'
const props = defineProps<{
  icon: string
}>()

// function getFileName(modulePath: string) {
//   const reg = new RegExp(/icons\/([^/]+)\.vue$/);
//   const match = reg.exec(modulePath);

//   if (match) {
//     return match[1];
//   }
//   return null;
// }

// const modules = import.meta.glob<any>('../icons/**/*.vue');
// const icons: Record<string, any> = {};
// Object.keys(modules).forEach((key) => {
//   const iconName = getFileName(key);
//   if (iconName) {
//     icons[iconName] = modules[key];
//   }
// });

// const CurrentIcon = defineAsyncComponent(
//   icons[props.icon] ||
//     (() =>
//       new Promise<any>((resolve) => resolve({ render: () => <i class="el-icon-question"></i> }))),
// );

const Icon = computed(() => {
  return (icons as any)[props.icon]
})
</script>
<template>
  <Icon v-if="Icon" v-bind="$attrs" width="1em" height="1em" style="display: block" />
  <!-- <van-icon v-else name="question" v-bind="$attrs" /> -->
</template>
