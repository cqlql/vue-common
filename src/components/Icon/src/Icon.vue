<template>
  <span>
    <SvgIcon
      :name="getSvgIcon"
      v-if="isSvgIcon"
      :class="[$attrs.class, type, 'anticon']"
      :spin="spin"
      :type="type"
    />
    <span
      v-else
      ref="elRef"
      :class="[$attrs.class, 'app-iconify anticon', spin && 'app-iconify-spin']"
    ></span>
  </span>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick, unref, computed } from 'vue'
import SvgIcon from './SvgIcon.vue'
import Iconify from '@purge-icons/generated'

const props = withDefaults(
  defineProps<{
    icon: string
    // icon color
    // color: string;

    // icon size
    // size: {
    //   type: [String, Number] as PropType<string | number>,
    //   default: 16,
    // },

    spin?: boolean
    prefix?: string
    // 图标类型，用于 SvgIcon 组件，目前可用类型： line 线性
    type?: '' | 'line'
  }>(),
  {
    prefix: '',
    spin: false,
    type: '',
  },
)

const SVG_END_WITH_FLAG = '|svg'
const elRef = ref<ElRef>(null)

const isSvgIcon = computed(() => props.icon?.endsWith(SVG_END_WITH_FLAG))
const getSvgIcon = computed(() => props.icon.replace(SVG_END_WITH_FLAG, ''))
const getIconRef = computed(
  () => `${props.prefix ? props.prefix + ':' : ''}${props.icon}`,
)

const update = async () => {
  if (unref(isSvgIcon)) return

  const el = unref(elRef)
  if (!el) return

  await nextTick()
  const icon = unref(getIconRef)
  if (!icon) return

  const svg = Iconify.renderSVG(icon, {})
  if (svg) {
    el.textContent = ''
    el.appendChild(svg)
  } else {
    const span = document.createElement('span')
    span.className = 'iconify'
    span.dataset.icon = icon
    el.textContent = ''
    el.appendChild(span)
  }
}

watch(() => props.icon, update, { flush: 'post' })

onMounted(update)
</script>

<style lang="scss">
.app-iconify {
  display: inline-block;
  // vertical-align: middle;

  &-spin {
    svg {
      animation: loadingCircle 1s infinite linear;
    }
  }
}

span.iconify {
  display: block;
  min-width: 1em;
  min-height: 1em;
  // background-color: @iconify-bg-color;
  border-radius: 100%;
}
</style>
