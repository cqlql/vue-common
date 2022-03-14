<script lang="ts">
export default {
  name: 'ButtonVue',
}
</script>
<template>
  <button
    class="border-1 border-gray-500 px-2 hover:border-sky-500 hover:text-sky-500 active:border-sky-900 active:text-sky-900 children:align-middle"
    ><slot></slot
  ></button>
</template>

<!-- <style lang="scss"></style> -->
