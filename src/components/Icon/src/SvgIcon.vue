<template>
  <svg
    :class="[prefixCls, $attrs.class, type, spin && 'svg-icon-spin']"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    name: string

    // icon size
    // size: {
    //   type: [String, Number] as PropType<string | number>,
    //   default: 16,
    // },

    spin: boolean
    prefix: string
    // 图标类型，用于 SvgIcon 组件，目前可用类型： line 线性
    type: '' | 'line'
  }>(),
  {
    prefix: 'icon',
    spin: false,
    type: '',
  },
)

const prefixCls = 'svg-icon'
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style lang="scss" scoped>
$prefix-cls: svg-icon;

.#{$prefix-cls} {
  display: inline-block;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentcolor;
  width: 1em;
  height: 1em;

  &.line {
    stroke: currentcolor;
  }
}

.svg-icon-spin {
  animation: loadingCircle 1s infinite linear;
}
</style>
