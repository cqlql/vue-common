// 注册全局组件

import VNodes from '@/components/VNodes'
import JRow from '@/components/Layout/JRow'
import JCol from '@/components/Layout/JCol.vue'

export default {
  install: (app) => {
    app.component('VNodes', VNodes)
    app.component('JRow', JRow)
    app.component('JCol', JCol)
  }
}
