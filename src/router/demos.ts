import { h } from 'vue'
import DemosNav from '@/views/DemosNav.vue'
import { RouteRecordRaw } from 'vue-router'

const demos = [
  // {
  //   path: '/Skeleton',
  //   component: import('@/components/Skeleton/SkeletonDemo.vue'),
  // },
  // {
  //   path: '/CountDown',
  //   component: import('@/components/CountDown/CountDown.vue'),
  // },
  {
    path: '/TurntableView',
    component: () => import('@/views/Turntable/TurntableView.vue'),
  },
  {
    path: '/DigitalRandomAnimation',
    component: () =>
      import('@/views/DigitalRandomAnimation/DigitalRandomAnimationDemo.vue'),
  },
  {
    path: '/ClockView',
    component: () =>
      import('@/views/ClockSimulationDemo/ClockSimulationDemo.vue'),
  },
]

const routes: RouteRecordRaw[] = demos

routes.push({
  path: '/:pathMatch(.*)',
  component: {
    render() {
      return h(DemosNav, {
        list: demos,
      })
    },
  },
})

export default routes
