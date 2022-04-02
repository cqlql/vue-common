<script lang="ts" setup>
type ItemType = {
  label: string
  value: string
}
const props = defineProps<{
  modelValue?: string
  list: ItemType[]
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', v: string): void
  (e: 'change', v: string): void
}>()

function onSelect(index: number) {
  let { list } = props
  let pre = props.modelValue
  let value = list[index].value
  emits('update:modelValue', value)
  if (pre !== value) {
    emits('change', value)
  }
}
</script>

<template>
  <div class="TabButtons">
    <div
      v-for="(item, index) of list"
      :key="index"
      class="item"
      :class="{ active: modelValue === item.value }"
      @click="onSelect(index)"
    >
      {{ item.label }}
      <div class="item_smile"> </div>
    </div>
  </div>
</template>

<style lang="scss">
.TabButtons {
  position: relative;
  // z-index: 1;
  display: flex;
  height: 36px;

  & > .item {
    flex: 1;
    text-align: center;
    line-height: 36px;
    position: relative;

    & > .item_smile {
      transition: width 0.3s ease;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 0;
      height: 0;
      background-color: #ffb21f;
    }
  }

  & > .item.active {
    font-weight: bold;

    & > .item_smile {
      width: 100%;
      height: 4px;
    }
  }
}
</style>
