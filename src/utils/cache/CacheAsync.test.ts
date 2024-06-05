import waitTime from '../time/wait-time'
import CacheAsync from './CacheAsync'

describe('CacheAsync -- 缓存请求异步', () => {
  test('只执行一次', async () => {
    const fn = vi.fn()
    const checkToken = new CacheAsync()

    async function req() {
      await new Promise((resolve) => setTimeout(resolve, 100))
      fn()
    }

    await Promise.all([checkToken.request(req), checkToken.request(req), checkToken.request(req)])
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('多此请求，结果相同', async () => {
    const fn = vi.fn()
    const checkToken = new CacheAsync(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))
      fn()
      return {
        send: 'hello world',
      }
    })
    const a = await checkToken.request()
    const b = await checkToken.request()
    expect(fn).toBeCalledTimes(1)
    expect(a).toBe(b)
    expect(a).toHaveProperty('send')
  })

  test('clear', async () => {
    const mockFn = vi.fn()
    const checkToken = new CacheAsync(async () => {
      await waitTime(100)
      mockFn()
      return {
        send: 'hello world',
      }
    })

    const a = await checkToken.request()
    checkToken.clear()
    const b = await checkToken.request()

    expect(mockFn).toBeCalledTimes(2)
    expect(a).not.toBe(b)
    expect(a).toEqual(b)
    expect(a).toHaveProperty('send')
  })

  test('处理错误', async () => {
    const mockFn = vi.fn()
    const checkToken = new CacheAsync(async () => {
      await waitTime(100)
      mockFn()
      return Promise.reject(new Error())
    })
    await Promise.all([checkToken.request(), checkToken.request(), checkToken.request()]).catch(
      (e) => {},
    )
    await checkToken.request().catch((e) => {})
    expect(mockFn).toBeCalledTimes(2)
  })
})
