---
title: OnceCallback 只执行一次
---

```ts
import OnceCallback from '@/utils/once-callback'
function init() {} // 要执行一次的函数
const onceCallback = new OnceCallback(init)
onceCallback.execute() // 重复调用不再执行 init
onceCallback.clear()
```

<!-- @[code](/src/utils/once-callback.ts) -->
