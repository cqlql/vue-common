<template>
  <svg :class="[prefixCls, $attrs.class, type, spin && 'svg-icon-spin']" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { oneOf } from 'vue-types'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    // 图标类型，目前可用类型： line 线性
    type: oneOf(['line']).def(''),
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)

    return { symbolId, prefixCls: 'svg-icon' }
  },
})
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
    stroke: currentColor;
  }
}

.svg-icon-spin {
  animation: loadingCircle 1s infinite linear;
}
</style>
