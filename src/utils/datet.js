
// 月的天数
export function getMonthDayNumber (year, month) {
  return new Date(year, month, 0).getDate()
}

class Datet {
  constructor () {

  }

  format (format) {
    format.replace(/YYYY|MM|DD/,() => {

    })
    return this
  }
}

export default function (date) {
  return new Datet(date)
}
