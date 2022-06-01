---
title: once 只执行一次
---

## OnceExecute

仅仅只执行一次普通函数，重复执行将不再执行此函数。可进行 clear 恢复初始状态

```ts
import OnceExecute from '@/utils/once-execute'
function onceFn() {} // 要执行一次的函数
const OnceExecute = new OnceExecute(onceFn)
OnceExecute.execute() // 重复调用不再执行 onceFn
OnceExecute.clear()
```

## OncePromise

仅仅只执行一次 Promise，重复执行将返回第一次执行的值。可进行 clear 恢复初始状态
