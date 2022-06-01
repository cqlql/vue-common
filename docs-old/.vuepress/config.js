const path = require('path')
const vuepressUtils = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
const {
  registerComponentsPlugin,
} = require('@vuepress/plugin-register-components')

module.exports = {
  lang: 'zh-CN',
  title: 'JSLibr Vue 组件库',
  description: '这是我的第一个 VuePress 站点',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',

    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
    // navbar: [
    //   {
    //     text: 'Foo',
    //     link: '/contributing.md',
    //   },
    // ],
    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
    sidebar: [
      {
        text: 'form',
        children: [
          '/form/form.md',
          '/form/input.md',
          '/form/InputNumber.md',
          '/form/select.md',
        ],
      },
      {
        text: 'animation 动画',
        children: ['/animation.md'],
      },
      {
        text: 'utils 工具库',
        children: ['/utils/debounce.md', '/utils/OnceCallback.md'],
      },
      {
        text: 'icon 图标',
        children: ['/icon/Iconfont.md','/icon/IconSvg.md'],
      },
      
      '/cell.md',
      '/search.md',
      '/timer.md',
      '/DemoBox.md',
      '/image.md',
      '/skeleton.md',
      '/clock.md',
      '/ProgressBar.md',
      '/DatePicker.md',
      '/TabButtons.md',
    ],
  }),
  alias: {
    '@': path.resolve(__dirname, '../../src'),
  },
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^\/src/, path.resolve(__dirname, '../../src')),
    },
  },
  plugins: [
    // 全局注册组件
    [
      registerComponentsPlugin({
        components: {
          DemoBox: path.resolve(__dirname, './components/DemoBox.vue'),
          VButton: path.resolve(
            __dirname,
            '../../src/components/Button/ButtonVue.vue',
          ),
        },
      }),
    ],
  ],
  clientAppEnhanceFiles: vuepressUtils.path.resolve(
    __dirname,
    './clientAppEnhance.ts',
  ),
}
