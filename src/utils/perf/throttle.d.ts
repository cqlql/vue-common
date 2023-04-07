/**
 * 节流
 * 高频执行情况，实现按指定间隔执行
 */

interface options {
  callback?: () => void;
  time?: number;
  /**exec后立即callback */
  immediate?: boolean;
  /**仅仅第一次立即 */
  firstImmediate?: boolean;
}

export default class Throttle {
  constructor(options: { callback: () => void; time: number; immediate: boolean });

  exec(cb: () => void, time?: number): void;
}

export declare function createThrottle(options?: number | options): Throttle['exec'];
