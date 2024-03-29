---
title: IconSvg
---

## webpack

### 编译环境

#### 安装相关包

[关于优化包 svgo ](https://github.com/svg/svgo)

```
npm i -D svg-sprite-loader svgo
```

#### vue-cli5 配置

新建 build/svg-sprite.js

```js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = function (config) {
  config.module.rule('svg').exclude.add(resolve('../src/icons')).end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('../src/icons'))
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

### 运行时环境

在 src 下新增如下目录

```
├─src
│  ├─icons
│  │  ├─svg
│  │  │  └─add.svg
│  │  ├─index.js
│  │  ├─svgo.config.js
```

svg 下存放 svg 文件。另外两个文件：

index.js 文件

```js
const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
```

svgo.config.js 文件

```js
// docs: https://github.com/svg/svgo
module.exports = {
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: 'fill|fil-rule|p-id|width|height|class',
      },
    },
  ],
}
```

## 使用 svgo

package.json 中新增命令如下

```json
{
  "script": {
    "svgo": "svgo -f src/icons/svg --config=src/icons/svgo.config.js"
  }
}
```

运行优化 `npm run svgo`

## 组件使用

```vue
<template>
  <div>
    <Icon icon="add|svg"></Icon>
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
</script>
```
