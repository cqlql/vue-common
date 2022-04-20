<!--
 * @Author: Cql
 * @Description: Multi-language switching component
-->
<template>
  <button class="border-dark-100" @click="clickEvent">
    <Icon icon="ion:language" />
    <span>{{ getLocaleText }}</span>
  </button>
</template>
<script lang="ts" setup>
import { ref, watchEffect, unref, computed } from 'vue'

import { Icon } from '@/components/Icon'
import { useLocale } from '@/locales/useLocale'
import { localeList } from '@/settings/localeSetting'
import type { LocaleType } from '#/config'

const props = defineProps({
  /**
   * Whether to display text
   */
  // showText: { type: Boolean, default: true },
  /**
   * Whether to refresh the interface when changing
   */
  reload: { type: Boolean },
})

const selectedKeys = ref<string[]>([])

const { changeLocale, getLocale } = useLocale()

const getLocaleText = computed(() => {
  const key = selectedKeys.value[0]
  if (!key) {
    return ''
  }
  return localeList.find((item) => item.event !== key)?.text
})

watchEffect(() => {
  selectedKeys.value = [unref(getLocale)]
})

async function toggleLocale(lang: LocaleType) {
  await changeLocale(lang as LocaleType)
  selectedKeys.value = [lang as string]
  props.reload && location.reload()
}

function clickEvent() {
  toggleLocale(getLocale.value === 'en' ? 'zh_CN' : 'en')
}
</script>
