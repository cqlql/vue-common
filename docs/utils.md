---
title: utils - js 工具库
---

## 只执行一次

```ts
import OnceCallback from '@/utils/once-callback'
const onceCallback = new OnceCallback(init)
onceCallback.execute()
onceCallback.clear()
```

## markdown 顶部 “---” 解析

使用示例

```ts
const mdText = `---
title: 标题
author: joly
---
    `
const res = mdTop(mdText)
expect(res.title).toBe('标题')
expect(res.author).toBe('joly')
```
