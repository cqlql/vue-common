/**
 * demo
 * name.demo.vue 截取 name, 将作为 router 的 path 和 name
 *
 */
import { h } from 'vue'
import nav from '../nav.vue'
import { RouteRecordRaw } from 'vue-router'
let routes: RouteRecordRaw[] = []
function importAll(r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach((key: string) => {
    const name = key.replace(/.*\/|\.\w+/g, '')
    routes = routes.concat({
      path: '/' + name,
      name,
      component: r(key).default,
    })
  })
}

// importAll(require.context('@/components/ScrollLoad', true, /.+\.demo\.vue$/))
// importAll(require.context('@/components/ListSelect', true, /.+\.demo\.vue$/))
importAll(require.context('@/comp-temp/experiment', true, /.+\.demo\.vue$/))
// importAll(require.context('@/utils', true, /.+\.demo\.vue$/))

routes.push({
  path: '/:pathMatch(.*)',
  component: {
    render() {
      return h(
        'div',
        h(nav, {
          list: routes,
        }),
      )
    },
  },
})

export default routes
