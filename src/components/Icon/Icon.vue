<script lang="tsx" setup>
import type { ComponentOptions } from 'vue'
import SvgIconVue from './src/SvgIcon.vue'
import Iconify from './src/Iconify.vue'

const props = defineProps<{
  icon: string | ComponentOptions<any> | any
  onlyIcon?: boolean
}>()

const svgNameReg = /^svg-/
const vanIconReg = /^van-/

const isComp = ref(false)
const isSvg = ref(false)
const isVanIcon = ref(false)
const svgName = ref('')
const vanIconName = ref('')

watch(
  () => props.icon,
  () => {
    if (typeof props.icon === 'string') {
      svgName.value = props.icon.replace(svgNameReg, '')
      isSvg.value = svgNameReg.test(props.icon)
      isVanIcon.value = vanIconReg.test(props.icon)
      vanIconName.value = props.icon.replace(vanIconReg, '')
    } else {
      isComp.value = true
    }
  },
  {
    immediate: true,
  },
)

const CurrentIcon = defineComponent({
  render() {
    if (isComp.value) {
      return h(props.icon)
    }

    if (isSvg.value) {
      return <SvgIconVue icon={svgName.value} />
    }

    if (isVanIcon.value) {
      // return <van-icon name={vanIconName.value}></van-icon>
    }

    return <Iconify icon={props.icon as string}></Iconify>
  },
})
</script>
<template>
  <CurrentIcon v-if="onlyIcon || isVanIcon" />
  <i v-else :class="$style.icon">
    <CurrentIcon width="1em" height="1em" />
  </i>
</template>

<style module>
.icon {
  position: relative;
  display: inline-block;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
</style>
