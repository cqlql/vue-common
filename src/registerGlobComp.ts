import type { App, Plugin } from 'vue'
// 全局组件
import VNodes from '@/components/VNodes'
import Button from '@/components/Button/Button.vue'
import Icon from '@/components/Icon'
// import JRow from '@/components/Layout/JRow'
// import JCol from '@/components/Layout/JCol.vue'
// import Loading from '@/components/Loading/Loading2.vue'
// import LoadText from '@/components/Loading/LoadText.vue'
// import Empty from '@/components/Empty/Empty.vue'

// // 全局指令
// import loading from '@/components/Loading/loading-directive.js'

export default function registerGlobComp(app: App) {
  app.component('VNodes', VNodes)
  app.component('VButton', Button)
  app.component('VIcon', Icon)
}
