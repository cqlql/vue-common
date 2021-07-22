// 值设置锁，目前只阻止一次
export default class ValueSetLock {
  set (cb) {
    if (this.locked) {
      this.locked = false
      return
    }
    cb()
  }

  lock () {
    this.locked = true
  }
}
