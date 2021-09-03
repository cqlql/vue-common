import { throttleInit } from '@/utils/perf/throttle'

test('节流', async function () {
  const fn = jest.fn()
  const throttle = throttleInit()

  await new Promise((resolve) => {
    throttle(fn)
    throttle(fn)
    setTimeout(() => {
      throttle(() => {
        fn()
        resolve()
      })
    }, 1000)
  })

  expect(fn).toHaveBeenCalledTimes(2)
})
