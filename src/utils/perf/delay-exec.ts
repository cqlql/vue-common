export class DelayExec {
  private time = 150;
  private stopId: ReturnType<typeof setTimeout> | null = null;
  private cb: () => void;
  constructor(cb: () => void) {
    this.cb = cb;
  }
  stop() {
    if (!this.stopId) {
      return;
    }
    clearTimeout(this.stopId);
    this.stopId = null;
  }

  start() {
    if (this.stopId) {
      return;
    }
    this.stopId = setTimeout(() => {
      this.cb();
      this.stopId = null;
    }, this.time);
  }
}