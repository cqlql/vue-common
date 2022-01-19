import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

require('./demos.ts')

const router = createRouter({
  history: createWebHashHistory(),
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  routes: routes.concat(require('./demos.ts').default),
})

export default router
