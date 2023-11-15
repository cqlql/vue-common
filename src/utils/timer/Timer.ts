/**
 * 定时器
 *
 * 需求：
 * - 可配置立即
 *
 */
export default class Timer {
  time = 1000;
  private timeId?: ReturnType<typeof setInterval>;

  constructor({ time, fn }: { time?: number; fn?: () => void } = {}) {
    if (time !== undefined) {
      this.time = time;
    }
    if (fn !== undefined) {
      this.fn = fn;
    }
  }

  fn() {}

  start() {
    this.stop();
    this.timeId = setInterval(() => {
      this.fn();
    }, this.time);
  }
  stop() {
    clearInterval(this.timeId);
  }
}

// 计时
export class Timing {
  stopId?: ReturnType<typeof setInterval>;

  // 顺计时，默认0起始
  timeUp(update: (time: number) => false | void, second = 0) {
    this.stop(); // 开始前结束，避免开启2次

    this.stopId = setInterval(() => {
      second++;
      update(second) === false && this.stop();
    }, 1000);
    update(second) === false && this.stop();
  }
  stop() {
    clearInterval(this.stopId);
  }
  // 倒计时
  timeDown(secondTotal: number, update: (time: number) => void, finish: () => void) {
    this.timeUp((s) => {
      const v = secondTotal - s;
      update(v);
      if (!v) {
        this.stop();
        finish();
      }
    });
  }
}
