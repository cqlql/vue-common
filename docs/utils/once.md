---
title: once 只执行一次
---

## OnceExecute - 普通函数

仅仅只执行一次普通函数，重复执行将不再执行此函数。可进行 clear 恢复初始状态

```ts
import OnceExecute from '@/utils/once-execute'
const onceExecute = new OnceExecute(() => {
  // 此处只会执行一次
})
onceExecute.execute() // 重复调用不再执行
onceExecute.clear()
```

## OncePromise - Promise 函数

仅仅只执行一次 Promise，重复执行将返回第一次执行的值。可进行 clear 恢复初始状态

```ts
import OncePromise from '@/utils/once-promise'

// 模拟异步返回
function fetchId() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('1')
    }, 500)
  })
}
// 获取某远程数据
async function fetchList(id: string, rangeType: string) {}

const oncePromise = new OncePromise(() => {
  return fetchId()
})

// 某重复调用函数
async function update(rangeType: string) {
  // 重复调用不再执行，并返回第一次执行的值
  const id = await oncePromise.execute()

  fetchList(id, rangeType)
}

function clear() {
  oncePromise.clear()
}
```
