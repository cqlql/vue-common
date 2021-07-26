<template>
  <div class="cell-warp">
    <VCell />
  </div>
</template>

<script>
import VCell from './cell.vue'
export default {
  components: {
    VCell
  }
}
</script>
<style>
.cell-warp {
  background: #f7f8fa;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
