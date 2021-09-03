<template>
  <div class="loading-demo">
    <button @click="count++">test</button>
    <div class="loading-demo__box">
      <Loading
        text="拼命加载中"
      />
    </div>
    <div
      v-loading:[count]=""
      class="loading-demo__box"
    />
  </div>
</template>

<script>
export default {
  directives: {
    loading: {
      mounted () {

      },
      updated () {
        console.log('updated', arguments)
      }
    }
  },
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.loading-demo__box {
  border: 2px solid #ddd;
  position: relative;
  height: 300px;
  width: 300px;
  margin: 15px;
}
</style>
