---
title: IconSvg
---

## 安装相关包

核心包 svg-sprite-loader

[优化包 svgo （可选）](https://github.com/svg/svgo)


```
npm i -D svg-sprite-loader svgo
```


## vue-cli5 配置

新建 build/svg-sprite.js

```js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = function (config) {
  config.module.rule('svg').exclude.add(resolve('../src/assets/svg')).end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('../src/assets/svg'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]',
    })
    .end()
}

```


配置 vue.config.js

```js
const setSvgSprite = require('./build/svg-sprite')
module.exports = {
  chainWebpack: (config) => {
    setSvgSprite(config)
  },
}

```