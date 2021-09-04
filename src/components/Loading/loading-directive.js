// 指令

import { createApp } from 'vue'
import Loading from './Loading2.vue'

export default {
  mounted (el, { value }) {
    const loading = createApp(Loading).mount(document.createElement('div'))
    el.append(loading.$el)
    loading.visible = value
    el.j__loading = loading
  },
  updated (el, { value }) {
    el.j__loading.visible = value
  }
}
