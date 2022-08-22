import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import theme from './theme'
import path from 'path'
const {
  registerComponentsPlugin,
} = require('@vuepress/plugin-register-components')
export default defineUserConfig({
  port: 3005,
  lang: 'zh-CN',
  title: '开发笔记',
  // description: 'welcome',

  base: '/docs/',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
  ],
  alias: {
    $: __dirname,
    '@': path.resolve(__dirname, '../../src'),
  },
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^\/src/, path.resolve(__dirname, '../../src')),
    },
  },

  theme,
  plugins: [
    registerComponentsPlugin({
      components: {
        DemoBox: path.resolve(__dirname, './components/DemoBox.vue'),
      },
    }),
    searchPlugin(),
  ],
})
