export const formatReg = /YYYY|MM|DD/g

export default class Format {
  constructor (date) {
    this.date = date
  }

  fillDouble (num) {
    if (num < 10) {
      return '0' + num
    }
    return num
  }

  YYYY () {
    return this.date.getFullYear()
  }

  MM () {
    return this.fillDouble(this.date.getMonth() + 1)
  }

  DD () {
    return this.fillDouble(this.date.getDate())
  }
}
