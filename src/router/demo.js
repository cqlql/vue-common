
/**
 * demo
 * name.demo.vue 截取 name, 将作为 router 的 path 和 name
 *
 */

import nav from '../nav.vue'

let routes = []
function importAll (r) {
  r.keys().forEach(key => {
    const name = key.replace(/.*\/|\.\w+/g, '')
    routes = routes.concat({
      path: '/' + name,
      name,
      component: r(key).default
    })
  })
}

importAll(require.context('@/components', true, /.+\.demo\.vue$/))
// importAll(require.context('@/comp-temp', true, /.+\.demo\.vue$/))
// importAll(require.context('@/utils', true, /.+\.demo\.vue$/))

routes.push({
  path: '/:pathMatch(.*)',
  component: {
    components: {
      VNav: nav
    },
    render () {
      return (
        <div><VNav list={routes}/></div>
      )
    }
  }
})

export default routes
