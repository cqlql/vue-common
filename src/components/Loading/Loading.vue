<template>
  <div
    class="loading"
  >
    <LoadIcon /><span class="loading__text">加载中</span>
  </div>
</template>

<script>
import LoadIcon from './LoadIcon.vue'
export default {
  components: {
    LoadIcon
  }
}
</script>

<style scoped>
.loading > * {
  vertical-align: middle;
}

.loading__text {
  padding-left: 4px;
}
</style>
