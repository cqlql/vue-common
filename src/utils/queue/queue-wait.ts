export default class QueueWait<T = any> {
  private q: ((data: T) => void)[] = []
  add(cb: (data: T) => void) {
    this.q.push(cb)
  }
  // 执行所有的队列
  exec(data: T) {
    const fn = this.q.shift()
    if (fn === undefined) return
    fn(data)
    this.exec(data)
  }
  clear() {
    this.q = []
  }
}
