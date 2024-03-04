interface ThrottleParams {
  /**exec后立即callback */
  immediate?: boolean;
  /**仅仅第一次立即 */
  firstImmediate?: boolean;
}

export default function Throttle({ immediate, firstImmediate }: ThrottleParams = {}) {
  let status: 0 | 1 = 0;

  return function (cb: () => void, time = 300) {
    if (status) return;
    status = 1;

    if (immediate || firstImmediate) {
      firstImmediate = false;
      cb();
      setTimeout(() => {
        status = 0;
      }, time);
    } else {
      setTimeout(() => {
        cb();
        status = 0;
      }, time);
    }
  };
}
