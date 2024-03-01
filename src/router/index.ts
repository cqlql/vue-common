import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import demos from './demos'

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

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  routes: routes.concat(demos)
})

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}
