import axios from 'axios'

const settings = {
  // 抓取 hash 的正则
  hashReg: /app\.([^.]+)\.js/,

  // 抓取新的 index.html 内容
  getNewHtmlContent() {
    // if (process.env.NODE_ENV !== 'production') {
    //   return new Promise((resolve, reject) => {
    //     resolve(
    //       `
    // <!DOCTYPE html><html><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1"><meta name=renderer content=webkit><meta name=viewport content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><link rel=icon href=/favicon.ico><title>又赚啦</title><link href=/static/js/app.b9b50f2f2.js rel=preload as=script><link href=/static/js/chunk-antUI.d761a650.js rel=preload as=script><link href=/static/js/chunk-elementUI.e20084f1.js rel=preload as=script></head><body><div id=app></div><script>var _hmt = _hmt || [];
    //   (function() {
    //     var hm = document.createElement("script");
    //     hm.src = "https://hm.baidu.com/hm.js?d3e1c169ebd76229c404508fcd354653";
    //     var s = document.getElementsByTagName("script")[0];
    //     s.parentNode.insertBefore(hm, s);
    //   })();</script><script src=/static/js/chunk-elementUI.e20084f1.js></script><script src=/static/js/chunk-antUI.d761a650.js></script><script src=/static/js/app.b9b50f2f2.js></script></body></html>
    // `,
    //     )
    //   })
    // }

    return axios
      .get('/index.html?=t' + Date.now())
      .then(({ data }: { data: string }) => {
        return data
      })
  },

  // 有更新情况执行
  withUpdateCallback() {
    if (confirm('是否进行清缓存刷新？')) {
      location.reload(true)
    }
  },
}

interface settings {
  hashReg: RegExp
  getNewHtmlContent: () => Promise<string>
  withUpdateCallback: () => void
}

function checkUpdate(settings: settings) {
  const { hashReg, getNewHtmlContent, withUpdateCallback } = settings

  function getHash(str: string) {
    const res = str.match(hashReg)
    if (res) {
      return res[1]
    }
    return null
  }
  function getOldHash(cb: (hash: string) => void) {
    const scripts = document.getElementsByTagName('script')

    // 模拟测试
    // if (process.env.NODE_ENV !== 'production') {
    //   scripts = [...scripts, { src: 'js/app.b9b50f2f.js' }]
    // }

    for (let index = 0, length = scripts.length; index < length; index++) {
      const script = scripts[index]
      const hash = getHash(script.src)
      if (hash) {
        cb(hash)
        break
      }
    }
  }

  getOldHash(async (hash: string) => {
    const newHtmlContent = await getNewHtmlContent()
    const newHash = getHash(newHtmlContent)
    if (newHash && newHash !== hash) {
      withUpdateCallback()
    }
  })
}
setTimeout(() => {
  checkUpdate(settings)
}, 10)



/**
 * 比较版本号大小。有新版返回 true
 * @param currentVersion
 * @param latestVersion
 */
function compareVersion(currentVersion: string, latestVersion: string): boolean {
  const v1 = currentVersion.split('.');
  const v2 = latestVersion.split('.');

  const maxLength = Math.max(v1.length, v2.length);

  for (let i = 0; i < maxLength; i++) {
    const num1 = Number(v1[i] || 0);
    const num2 = Number(v2[i] || 0);

    if (num1 < num2) {
      return true;
    }

    // 当前版本比服务器版本还要大？一般不会有这种情况。
    // if (num1 > num2) {
    //   return false;
    // }
  }

  return false;
}
