<template>
  <div>
    <img src="http://placehold.it/36x36" alt="">
    <div>{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>
