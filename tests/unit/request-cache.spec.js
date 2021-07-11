import RequestCache from '@/utils/request-cache.js'
function timeoutAsync (time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}
describe('RequestCache', () => {
  test('只执行一次', async () => {
    const asyncMock = jest.fn().mockResolvedValue()
    const checkToken = new RequestCache(asyncMock)
    await Promise.all([checkToken.request(), checkToken.request(), checkToken.request()])
    expect(asyncMock).toHaveBeenCalledTimes(1)
  })
  test('多此请求，结果相同', async () => {
    const mockFn = jest.fn()
    const checkToken = new RequestCache(async () => {
      await timeoutAsync(100)
      mockFn()
      return {
        send: 'hello world'
      }
    })
    const a = await checkToken.request()
    const b = await checkToken.request()
    expect(mockFn).toBeCalledTimes(1)
    expect(a).toBe(b)
    expect(a).toHaveProperty('send')
  })
  test('clear', async () => {
    const mockFn = jest.fn()
    const checkToken = new RequestCache(async () => {
      await timeoutAsync(100)
      mockFn()
      return {
        send: 'hello world'
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
    const mockFn = jest.fn()
    const checkToken = new RequestCache(async () => {
      await timeoutAsync(100)
      mockFn()
      return Promise.reject(new Error())
    })
    await Promise.all([checkToken.request(), checkToken.request(), checkToken.request()]).catch(e => {})
    await checkToken.request()
    expect(mockFn).toBeCalledTimes(2)
  })
})
