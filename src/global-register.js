
// 全局组件
import VNodes from '@/components/VNodes'
import JRow from '@/components/Layout/JRow'
import JCol from '@/components/Layout/JCol.vue'
import Loading from '@/components/Loading/Loading2.vue'
import LoadText from '@/components/Loading/LoadText.vue'
import Empty from '@/components/Empty/Empty.vue'

// 全局指令
import loading from '@/components/Loading/loading-directive.js'

export default {
  install: (app) => {
    app.component('VNodes', VNodes)
    app.component('JRow', JRow)
    app.component('JCol', JCol)
    app.component('Loading', Loading)
    app.component('LoadText', LoadText)
    app.component('JEmpty', Empty)

    app.directive('loading', loading)
  }
}
