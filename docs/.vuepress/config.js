const path = require('path')
console.log(111111111111111, path.resolve(__dirname, '../../src/'))
module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar
    navbar: [
      {
        text: 'Foo',
        link: '/contributing.md',
      },
    ],
    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar
    sidebar: ['/README.md', '/contributing.md', '/search.md'],
  },
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
    [
      '@vuepress/register-components',
      {
        components: {
          DemoBox: path.resolve(__dirname, '../components/DemoBox.vue'),
        },
      },
    ],
  ],
}
