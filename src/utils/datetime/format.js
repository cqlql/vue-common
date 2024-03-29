export const formatReg = /YYYY|MM|DD|HH|hh|mm|ss|a|dddd/g

export function fillDouble(num) {
  if (num < 10) {
    return '0' + num
  }
  return num
}

// 补指定数量的 0
export function fillZero(numberValue, length = 2) {
  numberValue = String(numberValue)
  let zeroNumber = length - numberValue.length
  if (zeroNumber) {
    return new Array(zeroNumber + 1).join('0') + numberValue
  }
  return numberValue
}

export default class Format {
  constructor(date) {
    this.date = date
  }

  YYYY() {
    return this.date.getFullYear()
  }

  MM() {
    return fillDouble(this.date.getMonth() + 1)
  }

  DD() {
    return fillDouble(this.date.getDate())
  }

  HH() {
    return fillDouble(this.date.getHours())
  }

  hh() {
    const hour = this.date.getHours() % 12
    return fillDouble(hour || 12)
  }

  a() {
    const hour = this.date.getHours()
    return hour < 12 ? '上午' : '下午'
  }

  mm() {
    return fillDouble(this.date.getMinutes())
  }

  ss() {
    return fillDouble(this.date.getSeconds())
  }

  dddd() {
    return '星期' + '天一二三四五六'[this.date.getDay()]
  }
}
