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

<!-- @[code](/src/utils/once-callback.ts) -->
