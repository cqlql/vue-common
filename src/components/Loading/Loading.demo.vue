<template>
  <div class="loading-demo">
    <div class="loading-demo__wrap">
      <div class="loading-demo__box">
        <Loading
          text="拼命加载中"
        />
      </div>
    </div>
    <div class="loading-demo__wrap">
      <div class="loading-demo__box">
        <Loading />
      </div>
    </div>
    <div class="loading-demo__wrap">
      <h2>指令方式</h2>
      <button @click="visible=!visible">显示/隐藏</button> {{ visible }}
      <div
        v-loading="visible"
        class="loading-demo__box"
      />
    </div>
    <div class="loading-demo__wrap">
      <h2>文本</h2>
      <div class="loading-demo__box">
        <p style="text-align: center;">
          <load-text />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import loading from './loading-directive'
export default {
  directives: {
    loading
  },
  data () {
    return {
      count: 0,
      visible: true
    }
  }
}
</script>

<style scoped>
.loading-demo__box {
  border: 2px solid #ddd;

  /* position: relative; */
  height: 150px;
  width: 300px;
  margin: 15px;
}
</style>
