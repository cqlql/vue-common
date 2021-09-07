<template>
  <div class="scroll-load-bar">
    <div
      v-if="status === 'loading'"
    >
      <load-text />
    </div>
    <div
      v-if="status === 'finish'"
      class="scroll-load-bar__finish"
    >
      -没有更多了-
    </div>
    <div
      v-else-if="status === 'noData'"
      class="scroll-load-bar__nodata"
    >
      -没有数据-
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.scroll-load-bar {
  height: 28px;
  padding: 4px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  color: #666;
}
</style>
