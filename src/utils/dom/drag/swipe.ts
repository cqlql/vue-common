import drag from './drag';

export function swipe({
  elem,
  onDown,
  onStart,
  onMove,
  onEnd,
  // onSwipeRight,
  // onSwipeLeft,
  onSwipeUp,
  onSwipeDown,
  onSwipeNot,
}: {
  elem: HTMLElement | null;

  onDown: (e: TouchEvent | MouseEvent) => void;
  onStart: (e: TouchEvent | MouseEvent) => void;
  onMove: (xlen: number, e: TouchEvent | MouseEvent) => void;
  onEnd: () => void;
  // onSwipeRight: () => void;
  // onSwipeLeft: () => void;
  onSwipeUp: () => void;
  onSwipeDown: () => void;
  onSwipeNot: () => void;
}) {
  let preX: number;
  let preY: number;
  let touchPoints: {
    x: number;
    y: number;
    time: number;
  }[] = [];
  let isStart = false;
  drag({
    elem,
    onDown(e: TouchEvent | MouseEvent) {
      // 保证滑动动作只激活当前一个实例--弃用，确保灵活性，尽量不在此处控制
      // e.stopPropagation()
      return onDown(e);
    },
    onStart: function (e: TouchEvent | MouseEvent) {
      const touch = (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : (e as MouseEvent);
      const { pageX, pageY } = touch;
      preX = pageX;
      preY = pageY;
      // preTime = Date.now();
    },
    onMove: function (e: TouchEvent | MouseEvent) {
      // 保证滑动动作只激活当前一个实例
      e.stopPropagation();

      const touch = (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : (e as MouseEvent);
      const { pageX, pageY } = touch;
      const currX = pageX;
      const currY = pageY;
      const xlen = currX - preX;
      const ylen = currY - preY;
      if (isStart === false) {
        // 手势相对于x轴 小于 45 度情况滑动才开始
        // if (Math.abs(Math.atan(ylen / xlen)) < 1) {
        if (Math.abs(xlen / ylen) < 1) {
          isStart = true;
          onStart(e);
        }
      }

      if (isStart) {
        e.preventDefault();

        const now = Date.now();

        touchPoints.push({
          x: pageX,
          y: pageY,
          time: now,
        });

        // 仅保留最近 100ms 的轨迹点（避免内存膨胀）
        touchPoints = touchPoints.filter((point) => now - point.time < 100);

        onMove(xlen, e);
      }
    },
    onEnd: function () {
      if (isStart) {
        const lastPoint = touchPoints[touchPoints.length - 1];
        touchPoints.push({
          x: lastPoint.x,
          y: lastPoint.y,
          time: Date.now(),
        });

        // 计算速度
        touchPoints.forEach((point, index) => {
          if (index > 0) {
            const prePoint = touchPoints[index - 1];
            const dx = point.x - prePoint.x;
            const dy = point.y - prePoint.y;
            const dt = point.time - prePoint.time;
            const speed = Math.sqrt(dx * dx + dy * dy) / dt;
            // console.log('Speed:', speed);
          }
        });

        //   xData.push([0, Date.now() - preTime]); // end
        //   let x = 0;
        //   let time = 0;
        //   for (let i = xData.length, j = 0; i--; ) {
        //     const d = xData[i];
        //     const t = d[1];
        //     // 时间间隔低于 50ms，保证不能超过 5 个成员叠加
        //     if (t > 50 || j++ > 5) {
        //       break;
        //     }
        //     x += d[0];
        //     time += t;
        //   }
        //   const speed = x / time || 0;
        //   const min = 0.15;
        //   if (speed > min) {
        //     onSwipeRight();
        //   } else if (speed < -min) {
        //     onSwipeLeft();
        //   } else {
        //     onSwipeNot();
        //   }
        //   xData = [];
        //   onEnd();
        // }
        // isCancel = isStart = false;
      }
    },
  });
}
