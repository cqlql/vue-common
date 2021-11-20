多处同时调用，只会请求一次

```js
import RequestCache from '@/utils/requres-cache'
const checkToken = new RequestCache(() => {
  // 此处只会执行一次，结果会被缓存。此函数 返回一个promise对象
  // promise 返回的任何值都将被缓存 包括 null undefined
  return axios.post('check')
})

// 开始请求
checkToken.request()

// 清理
checkToken.clear()
```
