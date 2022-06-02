import OncePromise from '@/utils/once/once-promise'
import { describe, expect, test, vi } from 'vitest'

describe('once-promise', () => {
  test('重复调用是否返回第一次的值', async () => {
    const oncePromise = new OncePromise(() => {
      // 此处只会执行一次
      return new Promise(function (resolve, reject) {
        // 模拟异步
        setTimeout(() => {
          resolve(Date.now())
        }, 500)
      })
    })

    const id1 = await oncePromise.execute()
    const id2 = await oncePromise.execute()
    expect(id1).toBe(id2)
  })

  test('重复调用测试', async () => {
    const oncePromise = new OncePromise(() => {
      // 此处只会执行一次
      return new Promise(function (resolve, reject) {
        // 模拟异步
        setTimeout(() => {
          resolve(Date.now())
        }, 500)
      })
    })

    const getApples = vi.fn(() => 0)

    oncePromise.execute().catch((err) => {
      getApples()
    })

    oncePromise
      .execute()
      .catch((err) => {
        getApples()
      })
      .finally(() => {
        expect(getApples).toHaveBeenCalledTimes(2)
      })

    await oncePromise.execute()
  })
})
