// import { describe, test } from 'vitest'
import { CloseOutside } from './close-outside'
describe('close-outside', () => {
  test('点里面不会触发关闭', async () => {
    let windowClickFn = () => {}
    vi.stubGlobal('addEventListener', (name: string, fn: () => void) => {
      console.log('addEventListener', name, fn)
      windowClickFn = fn
    })

    const fn = vi.fn()
    const closeOutside = new CloseOutside()
    closeOutside.initWindowClick()
    closeOutside.setClose(() => {
      console.log('close')
      fn()
    })

    await new Promise((resolve) => setTimeout(resolve, 0))

    // 点里面不会触发关闭
    windowClickFn()
    closeOutside.clickInside()
    await new Promise((resolve) => setTimeout(resolve, 100))
    expect(fn).not.toHaveBeenCalled()
    await new Promise((resolve) => setTimeout(resolve, 0))

    // 点外面触发关闭
    windowClickFn()
    await new Promise((resolve) => setTimeout(resolve, 100))
    expect(fn).toHaveBeenCalled()
  })
})
