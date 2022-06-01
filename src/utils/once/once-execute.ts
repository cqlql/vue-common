export default class OnceExecute {
  onceFn: () => void
  isExecuted = false
  constructor(onceFn: () => void) {
    this.onceFn = onceFn
  }

  execute() {
    if (this.isExecuted) return
    this.isExecuted = true
    this.onceFn()
  }

  clear() {
    this.isExecuted = false
  }
}
