<script lang="ts" setup>
import { useI18n } from '@/hooks/web/useI18n'
import AppLocalePicker from './comp/AppLocalePicker.vue'
const { t } = useI18n()
</script>
<template>
  <div>
    <AppLocalePicker />

    <p>
      {{ t('sys.login.loginSuccessDesc') }}
    </p>
  </div>
</template>
