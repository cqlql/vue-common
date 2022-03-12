<template>
  <div class="demo-box">
    <div class="demo-box_demo">
      <slot></slot>
    </div>
    <div class="demo-box_code">
      <div v-show="codeVisible || showCode">
        <slot name="code"></slot>
      </div>
    </div>
    <div class="demo-box_footer">
      <button v-if="!showCode" @click="toggleCodeShow">
        {{ codeVisible ? '隐藏' : '显示' }}代码
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  defaultShowCode?: boolean
  showCode?: boolean
}>()

const codeVisible = ref(props.defaultShowCode)

function toggleCodeShow() {
  codeVisible.value = !codeVisible.value
}
</script>
<style lang="scss" scoped>
.demo-box {
  // border: 1px solid #3e4c5a5c;
  border: 1px solid var(--c-border);
  border-radius: 2px;
  // padding: 10px;
  display: block;
  margin: 10px 0;
}

.demo-box_demo {
  padding: 10px;
}

.demo-box_code {
  // border-top: 1px solid #3e4c5a5c;
  border-top: 1px solid var(--c-border);
  padding: 10px;
  padding-bottom: 0;
}

.demo-box_footer {
  text-align: center;
  padding-bottom: 15px;
}
</style>
