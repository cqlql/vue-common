<script setup lang="ts">
import DragBar from './DragBar.vue'
const w = ref(200)

function change() {}
</script>

<template>
  <div class="bd">
    <!-- <h2>窗口宽拖动改变 - 简单、高度可配置</h2> -->
    <div class="box">
      <div class="left-box" :style="{ width: w + 'px' }">
        <div class="type-menu">
          <h3>menu 宽度： {{ w }}</h3>
          <ul>
            <li>窗口宽度拖动改变</li>
            <li>css</li>
            <li>css-modules</li>
            <li>express</li>
            <li>html</li>
            <li>js</li>
            <li>js-dom-webapis</li>
            <li>js-es6等新规范</li>
            <li>linux</li>
            <li>nodejs</li>
          </ul>
        </div>
        <DragBar class="bar" v-model:w="w" :max="400" :min="50" @change="change" />
      </div>
      <div class="right-box" :style="{ left: w + 'px' }">
        <section>内容</section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bd {
  display: flex;
  flex-direction: column;

  .bar {
    background-color: rgba(57, 152, 214, 0.6);
    width: 10px;
    z-index: 1;
  }
}

.box {
  position: relative;
  display: flex;
  height: 100vh;
}

.left-box {
  position: relative;
}

.right-box {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 10px;
}

.type-menu {
  padding: 10px;
}
</style>
