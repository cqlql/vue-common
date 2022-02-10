import { h } from 'vue'
import DemosNav from '@/views/DemosNav.vue'
import type { RouteRecordRaw } from 'vue-router'

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
    meta: {
      title: 'TurntableView - 转盘抽奖',
    },
    component: () => import('@/views/Turntable/TurntableView.vue'),
  },
  {
    path: '/DigitalRandomAnimation',
    meta: {
      title: 'DigitalRandomAnimation - 随机数抽奖',
    },
    component: () =>
      import('@/views/demo/DigitalRandomAnimation/DigitalRandomAnimation.vue'),
  },
  {
    path: '/ClockView',
    meta: {
      title: 'ClockView - 可拖动时钟',
    },
    component: () => import('@/views/demo/ClockSimulation/ClockSimulation.vue'),
  },
  {
    path: '/DemoJSX',
    meta: {
      title: 'DemoJSX - JSX 语法实验',
    },
    component: () => import('@/views/demo/DemoJSX/DemoJSX.vue'),
  },
  {
    path: '/PieChartCss',
    meta: {
      title: 'PieChartCss - css饼图',
    },
    component: () => import('@/views/demo/PieChartCss/PieChartCss.vue'),
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
