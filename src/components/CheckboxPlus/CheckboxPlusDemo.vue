<script lang="ts" setup>
import CheckboxPlus from './CheckboxPlus.vue'
import Icon from '../Icon/src/IconMain.vue'

const list = [
  {
    value: 1,
  },
  {
    value: 2,
  },
]
</script>
<template>
  <div class>
    <CheckboxPlus :list="list">
      <template #default="{}">
        <div class="CheckboxPlusDemo_item">
          <div>100,000</div>
          <div>+20% Bonus</div>
        </div>
      </template>
    </CheckboxPlus>
  </div>
</template>

<style lang="scss" scoped>
.CheckboxPlusDemo_item {
  color: #fff;
}
</style>
