import { debounceInit } from '@/utils/perf/debounce'
test('防抖', async function () {
  const fn = jest.fn()
  const debounce = debounceInit()
  await new Promise((resolve) => {
    function cb () {
      fn()
      resolve()
    }
    debounce(cb)
    debounce(cb)
    debounce(cb)
  })

  expect(fn).toHaveBeenCalledTimes(1)
})
