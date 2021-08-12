<template>
  <div class="big-circle-btn-demo">
    <vBtn />
  </div>
</template>

<script>
import btn from './BigCircleBtn.vue'
export default {
  components: {
    vBtn: btn
  }
}
</script>

<style lang="scss" scoped>
.big-circle-btn-demo {
  padding: 10px;
}

</style>
