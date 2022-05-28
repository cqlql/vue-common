
import filterKeyWrod from '@/utils/filter-key-word'
describe('Utils:filter-key-word', () => {
  test('default', () => {
    expect(filterKeyWrod('今天天气好啊', '好')).toBe('今天天气<b>好</b>啊')
  })

  test('test 特殊字符', () => {
    expect(filterKeyWrod('<b>', '<')).toBe('<b>&lt;</b>b&gt;')
    expect(filterKeyWrod('()', '(')).toBe('<b>(</b>)')
    expect(filterKeyWrod('$$$()$$$$', '(')).toBe('$$$<b>(</b>)$$$$')
  })
})
