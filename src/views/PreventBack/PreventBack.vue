<script lang="ts" setup>
import { ref, onMounted ,onUnmounted } from 'vue'

function beforeunloadFn (event:any) {
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = 'xx';
}

onMounted(() => {
  window.addEventListener('beforeunload', beforeunloadFn)
})

onUnmounted(() => {
  window.removeEventListener('beforeunload', beforeunloadFn)
})
</script>
<template>
  <div>
    PreventReturn
  </div>
</template>

