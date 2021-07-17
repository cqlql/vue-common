import { getMonthDayNumber } from '@/utils/datetime.js'

describe('datetime', () => {
  test('每月最后一天', () => {
    expect(getMonthDayNumber(2021, 2)).toBe(28)
    expect(getMonthDayNumber('2021', '2')).toBe(28)
  })
})
