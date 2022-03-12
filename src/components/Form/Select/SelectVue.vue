<template>
  <div class="cell" @click="popCampus">
    <div v-if="icon" class="icon">
      <IconFont name="location" />
    </div>
    <div class="cont">
      <span v-if="id">
        {{ name }}
      </span>
      <span class="login-page_placeholder" v-else> 请选择学校 </span>
    </div>
    <div class="arrows">
      <!-- <nut-icon name="right" size="12" /> -->
      <IconFont name="arrow-right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import IconFont from '@/components/IconFont/IconFont.vue'

defineProps<{
  icon?: string
}>()

function popCampus() {}
const id = ref('')
const name = ref('')
</script>
<style lang="scss">
.cell {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  .icon {
    width: 30px;
    display: inline-flex;
    align-items: center;
    color: #8ab7fd;
    // border: 1px solid red;
  }

  .cont {
    flex: 1;
    // border: 1px solid red;
    line-height: 1.4;
  }

  .arrows {
    display: inline-flex;
    align-items: center;
    color: #ddd;
    // border: 1px solid red;
  }
}
</style>
