import { defineComponent } from 'vue'
// 传入组件对象，用模板使用
export default defineComponent({
  render() {
    return this.$attrs.vnodes
  },
})
