/**
 * 防抖
 * 指定时间内触发发将重新开始计时
 * 优化性能，高频触发情况只触发最后一次
 *
 * @param {number|object} options
 * @param {number} options.time
 * @param {number} options.time
 */

type Options = {
  callback?: () => void;
  time?: number;
  immediate?: boolean;
};

export default class Debounce {
  cb: () => void;
  time?: number;
  timeId?: ReturnType<typeof setTimeout>;
  isStart: boolean;

  constructor({ callback, time = 300, immediate }: Options = {}) {
    this.cb = callback || (() => {});
    this.time = time;
    // this.immediate = immediate
    this.isStart = false;
  }

  exec(cb = this.cb, time = this.time) {
    // immediate 立即执行暂时弃用，感觉没必要
    // if (this.immediate && this.isStart === false) {
    //   cb()
    // }
    this.isStart = true;

    clearTimeout(this.timeId);

    this.timeId = setTimeout(() => {
      cb();
      this.isStart = false;
    }, time);
  }
}

export function debounceCreate(params?: Options | number) {
  let options = params;
  if (typeof params === 'number') {
    options = {
      time: params,
      // immediate: false
    };
  }

  const debounce = new Debounce(options as Options);
  return function (cb: () => void, time: number) {
    debounce.exec(cb, time);
  };
}

let debounceId: ReturnType<typeof setTimeout>;
/**
 * 单例防抖
 * 可用于输入事件，因为一次只能输入一个控件，不会发生冲突
 * @param cb
 * @param time
 */
export function debounceSingle(cb: () => void, time = 300) {
  clearTimeout(debounceId);
  debounceId = setTimeout(cb, time);
}
