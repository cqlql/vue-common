
// 月的天数
export function getMonthDayNumber (year, month) {
  return new Date(year, month, 0).getDate()
}
