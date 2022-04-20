<script lang="ts" setup>
import { useI18n } from '@/hooks/web/useI18n'
import AppLocalePicker from './comp/AppLocalePicker.vue'
const { t } = useI18n()
</script>
<template>
  <div>
    <AppLocalePicker class="border-2 px-2 border-blue-500" />

    <p>
      {{ t('sys.login.loginSuccessDesc') }}
    </p>
  </div>
</template>
