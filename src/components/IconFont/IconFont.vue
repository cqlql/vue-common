<template>
  <span :class="className"> </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import './iconfont.css'
const props = withDefaults(
  defineProps<{
    fontClassName?: string
    classPrefix?: string
    name: string
  }>(),
  {
    fontClassName: 'iconfont',
    classPrefix: 'icon',
    name: '',
  },
)

const className = computed(() => {
  return `${props.fontClassName} ${props.classPrefix}-${props.name}`
})
</script>
<style lang="scss"></style>
