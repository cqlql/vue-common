---
title: Iconfont
---



3步使用

## 1. 新建 iconfont-download.js

需要去 https://www.iconfont.cn 获取图标 css 下载地址
 
```js
const path = require('path')
const fs = require('fs')
const https = require('https')

const config = [
  {
    // css 下载地址
    cssUrl: `
    //at.alicdn.com/t/font_3331081_dqlk2loiwjq.css
    `,
    // 目标位置
    dir: 'src/assets/iconfont',
  },
]

function download(url, filePath, cb, isWrite) {
  https.get(url, function (res) {
    if (isWrite) {
      var file = fs.createWriteStream(filePath)
      res.pipe(file)
    }
    console.log('下载成功：', filePath)
    cb?.(res)
  })
}
config.forEach((d) => {
  let { cssUrl, dir } = d
  let fontFilePath = path.resolve(__dirname, '../', dir, 'iconfont.ttf')
  let cssFilePath = path.resolve(__dirname, '../', dir, 'iconfont.css')

  function writeFile(content) {
    let url = 'https:' + content.match(/\/\/.+?\.ttf/)[0]
    fs.writeFileSync(
      cssFilePath,
      content.replace(/url\('.+?'\)/, "url('./iconfont.ttf')"),
      // 给[微信支付]图标加颜色
      // .replace(/\.icon-wechat-pay::?before\s*{/, '$&\r\n  color: #09BB07;'),
      'utf8',
    )
    download(url, fontFilePath, null, true)
  }

  download('https:' + cssUrl.trim(), cssFilePath, (res) => {
    var content = ''
    res.on('data', (data) => {
      content += data
    })
    res.on('end', () => {
      // fs.writeFileSync('note_data/hello.txt', 'hello','utf8');
      writeFile(content)
    })
  })
})
```

## 2. package.json 新增下载命令

```json
{
  "scripts":{
    "download:iconfont": "node build/iconfont-download.js",
  }
}
```

## 3. 使用

<demo-box showCode>
  <IconFontDemo />
  <template #code>

@[code{1-} vue{3-10,15}](/src/components/IconFont/demo/IconFontDemo.vue)

  </template>
</demo-box>

<script setup>
  import IconFontDemo from '@/components/IconFont/demo/IconFontDemo.vue'
</script>
