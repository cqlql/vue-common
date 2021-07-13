function monthLastDate (year,month) {
  return new Date(year, month+1,-1)
}

describe('date-time', () => {
  test('每月最后一天', () => {
    expect(monthLastDate(2021,2)).toBe(28)
  })
})
