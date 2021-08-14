<template>
  <div
    class="j-col"
    :class="{fit}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fit: Boolean
  }
}
</script>

<style lang="scss">
  .j-col.fit {
    flex: 1;
  }
</style>
