<script lang="ts" setup>
import { Timing } from '@/utils/time/Timer';

const props = defineProps<{
  get: () => Promise<any>;
}>();

const totalSeconds = 60;
const isBeginning = ref(false);
const restSecond = ref(0);
const timing = new Timing();
const loading = ref(false);

const codeBtnText = computed(() => {
  if (isBeginning.value) {
    return restSecond.value + 's 后重发';
  }
  return '获取验证码';
});

function timeDown(second: number) {
  isBeginning.value = true;
  timing.timeDown(
    second,
    (t) => {
      restSecond.value = t;
    },
    () => {
      isBeginning.value = false;
    },
  );
}

async function getCode() {
  if (loading.value) return;
  loading.value = true;
  await props.get().finally(() => {
    loading.value = false;
  });
  timeDown(totalSeconds);
}
</script>
<template>
  <AButton class="get-code-btn" @click="getCode" :loading="loading" :disabled="isBeginning">{{
    codeBtnText
  }}</AButton>
</template>
