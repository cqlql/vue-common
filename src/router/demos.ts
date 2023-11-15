import type { RouteRecordRaw } from 'vue-router';
import LayoutIndexVue from '@/layout/LayoutIndex.vue';

const demos = [
  // {
  //   path: '/all',
  //   meta: {
  //     title: '所有常用组件',
  //   },
  //   component: () => import('@/views/AllComp/index.vue'),
  // },
  // {
  //   path: '/animation',
  //   meta: {
  //     title: 'animation - 动画',
  //   },
  //   component: () => import('@/views/Animation/AnimationView.vue'),
  // },
  // // {
  // //   path: '/Skeleton',
  // //   component: import('@/components/Skeleton/SkeletonDemo.vue'),
  // // },
  // // {
  // //   path: '/CountDown',
  // //   component: import('@/components/CountDown/CountDown.vue'),
  // // },
  {
    path: 'CountdownBtn',
    name: 'CountdownBtn',
    meta: {
      title: 'CountdownBtn - 倒计时按钮',
    },
    component: () => import('@/components/CountDown/demos/CountdownBtnDemo.vue'),
  },
  {
    path: 'TurntableView',
    name: 'TurntableView',
    meta: {
      title: 'TurntableView - 转盘抽奖',
    },
    component: () => import('@/views/Turntable/TurntableView.vue'),
  },
  // {
  //   path: '/DigitalRandomAnimation',
  //   meta: {
  //     title: 'DigitalRandomAnimation - 随机数抽奖',
  //   },
  //   component: () =>
  //     import('@/views/DigitalRandomAnimation/DigitalRandomAnimation.vue'),
  // },
  // {
  //   path: '/ClockView',
  //   meta: {
  //     title: 'ClockView - 可拖动时钟',
  //   },
  //   component: () => import('@/views/ClockSimulation/ClockSimulation.vue'),
  // },
  // {
  //   path: '/DemoJSX',
  //   meta: {
  //     title: 'DemoJSX - JSX 语法实验',
  //   },
  //   component: () => import('@/views/DemoJSX/DemoJSX.vue'),
  // },
  // {
  //   path: '/PieChartCss',
  //   meta: {
  //     title: 'PieChartCss - css饼图',
  //   },
  //   component: () => import('@/views/PieChartCss/PieChartCss.vue'),
  // },
  // {
  //   path: '/Resume',
  //   meta: {
  //     title: 'Resume',
  //   },
  //   component: () => import('@/views/Resume/ResumeIndex.vue'),
  // },
  // {
  //   path: '/temp',
  //   meta: {
  //     title: '临时实验',
  //   },
  //   component: () => import('@/views/Temp/TempIndex.vue'),
  // },
  // {
  //   path: '/I18n',
  //   meta: {
  //     title: 'I18n',
  //   },
  //   component: () => import('@/views/I18n/I18nIndex.vue'),
  // },
  // {
  //   path: '/Calendar',
  //   meta: {
  //     title: 'Calendar 日历',
  //   },
  //   component: () => import('@/components/Calendar/Calendar.demo.vue'),
  // },
  // {
  //   path: '/OneWeekPicker',
  //   meta: {
  //     title: 'OneWeekPicker 日期选择',
  //   },
  //   component: () => import('@/views/OneWeekPickerDemo/OneWeekPickerDemo.vue'),
  // },
  // {
  //   path: '/VideoAdd',
  //   meta: {
  //     title: 'VideoAdd 视频增加',
  //   },
  //   component: () => import('@/views/VideoAdd/index.vue'),
  // },{
  //   path: '/CountDown',
  //   meta: {
  //     title: 'CountDown 倒计时',
  //   },
  //   component: () => import('@/components/CountDown/CountDown.vue'),
  // },{
  //   path: '/TimerDemo',
  //   meta: {
  //     title: 'TimerDemo',
  //   },
  //   component: () => import('@/utils/timer/TimerDemo.vue'),
  // },
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutIndexVue,
    name: 'demos',
    meta: { title: 'demos' },
    children: demos,
  },
];

export default routes;
