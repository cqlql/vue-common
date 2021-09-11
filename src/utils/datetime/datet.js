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

export function toDate (date) {
  if (date instanceof Date) {
    return date
  }
  // datet(2012,01,01)
  if (arguments.length > 1) {
    return new Date(...arguments)
  }
  // datet('2021-01-01')
  // datet('2021-07-23T14:21:00+08:00')
  if (typeof date === 'string') {
    const args = date.replace(/\+\d\d:\d\d/, '').replace(/[-:\sT/]/g, ',').split(',')

    args[1] = args[1] - 1
    return new Date(...args)
  }
  // 毫秒
  return new Date(date)
}

export default function () {
  return new Datet(toDate(...arguments))
}
