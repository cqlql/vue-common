import { h } from 'vue'
import DemosNav from '@/views/demo/comp/DemosNav.vue'
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
    component: () => import('@/views/demo/Turntable/TurntableView.vue'),
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
  {
    path: '/Resume',
    meta: {
      title: 'Resume',
    },
    component: () => import('@/views/demo/Resume/ResumeIndex.vue'),
  },
  {
    path: '/temp',
    meta: {
      title: '临时实验',
    },
    component: () => import('@/views/demo/Temp/TempIndex.vue'),
  },
  {
    path: '/I18n',
    meta: {
      title: 'I18n',
    },
    component: () => import('@/views/demo/I18n/I18nIndex.vue'),
  },
  {
    path: '/Calendar',
    meta: {
      title: 'Calendar 日历',
    },
    component: () => import('@/components/Calendar/Calendar.demo.vue'),
  },
  {
    path: '/OneWeekPicker',
    meta: {
      title: 'OneWeekPicker 日期选择',
    },
    component: () =>
      import('@/views/demo/OneWeekPickerDemo/OneWeekPickerDemo.vue'),
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
