import datet from '@/utils/datetime/datet.js'

describe('datet', () => {
  test('每月最后一天', () => {
    expect(datet(2021, 1).endOfDay().date.getDate()).toBe(28)
    expect(datet('2021', '1').endOfDay().date.getDate()).toBe(28)
  })
  test('Datet', () => {
    const dt = datet(new Date(2019, 0, 1))
    expect(dt.format('YYYY-MM-DD')).toBe('2019-01-01')
    expect(dt.format('YYYY/MM/DD')).toBe('2019/01/01')

    dt.addDays(1)
    expect(dt.date.getDate()).toBe(2)

    dt.startOfWeek()
    expect(dt.date.getDate()).toBe(31)
    expect(dt.date.getMonth()).toBe(11)
    expect(dt.date.getFullYear()).toBe(2018)

    const dt2 = datet(new Date(2021, 0, 31))
    dt2.endOfDay()
    expect(dt2.format('YYYY-MM-DD')).toBe('2021-01-31')
  })
})
