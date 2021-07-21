// 扩展 Date 对象

import Format, { formatReg } from './format'

class Datet {
  constructor (date) {
    this.date = date
    this.formatFuns = new Format(date)
  }

  addDays (num) {
    const { date } = this
    date.setDate(date.getDate() + num)
    return this
  }

  startOfWeek () {
    const { date } = this
    const weekDay = date.getDay() || 7
    date.setDate(date.getDate() - weekDay + 1)
    return this
  }

  endOfDay () {
    const { date } = this
    this.date = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    return this
  }

  format (formatStr) {
    const { formatFuns } = this
    return formatStr.replace(formatReg, (key) => {
      return formatFuns[key]()
    })
  }
}

export default function () {
  return new Datet(new Date(...arguments))
}
