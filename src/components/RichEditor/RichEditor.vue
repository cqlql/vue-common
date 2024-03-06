<script lang="ts" setup>
import type { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import { editorLoadOnce } from './editorLoadOnce'
const modelValue = defineModel<string>({
  default: ''
})
const emit = defineEmits<{
  change: [v: any]
  input: [v: any]
}>()

const vEditor = ref<HTMLElement>()

let editor: ClassicEditor | null = null
let currentEditorValue = ''

onUnmounted(() => {
  editor?.destroy()
})

watch(modelValue, (v) => {
  if (currentEditorValue === v) return
  // isAutoSet = true
  editor?.setData(v)
})

function onLoadedSuccess(thisEditor: ClassicEditor) {
  editor = thisEditor

  currentEditorValue = modelValue.value
  thisEditor.setData(currentEditorValue)

  thisEditor.model.document.on('change:data', () => {
    currentEditorValue = modelValue.value = thisEditor.getData()
    emit('change', currentEditorValue)
    // 实现改变 modelValue 情况 不触发 inputValue
    // if (isAutoSet) {
    //   isAutoSet = false
    //   return
    // }
    // emit('input', currentEditorValue)
  })
}

watch(vEditor, (el) => {
  if (el) editorLoadOnce(el, onLoadedSuccess)
})
</script>
<template>
  <div class="RichEditor">
    <div ref="vEditor"></div>
  </div>
</template>

<style lang="scss" scoped>
.RichEditor {
  :deep(.ck.ck-editor__main > .ck-editor__editable) {
    min-height: 300px;
    max-height: 500px;
    overflow-y: scroll;
  }
}
</style>
