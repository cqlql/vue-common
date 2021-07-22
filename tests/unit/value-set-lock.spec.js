
import ValueSetLock from '@/utils/value-set-lock.js'

test('值设置锁', function () {
  const valueSetLock = new ValueSetLock()

  let i = 0

  function set () {
    valueSetLock.set(() => {
      i++
    })
  }

  valueSetLock.lock()

  set()

  expect(i).toBe(0)
  set()
  expect(i).toBe(1)
})
