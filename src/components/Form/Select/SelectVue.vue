<template>
  <div class="cell" @click="popCampus">
    <div class="icon">
      <nut-icon
        font-class-name="iconfont"
        class-prefix="icon"
        name="building"
      />
    </div>
    <div class="cont">
      <span v-if="id">
        {{ name }}
      </span>
      <span class="login-page_placeholder" v-else> 请选择学校 </span>
    </div>
    <div class="arrows">
      <nut-icon name="right" size="12" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

function popCampus() {}
const id = ref('')
const name = ref('')
</script>
<style lang="scss">
.cell {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  input {
    // border: 1px solid #ddd;
    // height: 24px;
    // line-height: 24px;
  }

  .icon {
    width: 30px;
    // border: 1px solid red;
    display: inline-flex;
    align-items: center;
    color: #8ab7fd;
  }

  .cont {
    flex: 1;
    // display: inline-flex;
    // align-items: center;
    // border: 1px solid red;
    // height: 24px;
    // line-height: 24px;
  }

  .arrows {
    // border: 1px solid red;
    display: inline-flex;
    align-items: center;
    color: #ddd;
    // font-size: 12px;
  }
}
</style>
