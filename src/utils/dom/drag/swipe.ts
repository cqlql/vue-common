import drag from './drag';

/**
 * 目前只处理Y方向
 * swipex 为旧实现，待弃用
 */
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
  elem: HTMLElement;

  onDown?: (e: TouchEvent | MouseEvent) => void;
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
      // 保证滑动动作只激活当前一个实例
      e.stopPropagation();
      return onDown?.(e);
    },
    onStart(e, point) {
      const { pageX, pageY } = point;
      preX = pageX;
      preY = pageY;
    },
    onMove(e, point) {
      // 保证滑动动作只激活当前一个实例
      e.stopPropagation();

      const { pageX, pageY } = point;
      const currX = pageX;
      const currY = pageY;
      const dx = currX - preX;
      const dy = currY - preY;
      if (isStart === false) {
        // 手势相对于y轴 小于 45 度情况滑动才开始
        if (Math.abs(dx / dy) < 1) {
          isStart = true;
          onStart(e);
          touchPoints = []; // 清空轨迹点
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

        onMove(dx, e);
      }
    },
    onEnd() {
      if (isStart) {
        const lastPoint = touchPoints[touchPoints.length - 1];

        touchPoints.push({
          x: lastPoint.x,
          y: lastPoint.y,
          time: Date.now(),
        });

        elem.innerHTML = touchPoints
          .map((point) => `(${point.x}, ${point.y}, ${point.time})`)
          .join('<br/>');

        // 总滑动距离
        let len = 0;
        // 总时间
        let totalTime = 0;
        // 方向 0: none, 1: up, 2: down, 3: left, 4: right
        let direction: 0 | 1 | 2 | 3 | 4 = 0;

        // 从结束点开始循环
        for (let i = touchPoints.length - 1; i > 0; i--) {
          const point = touchPoints[i];
          const prePoint = touchPoints[i - 1];
          const dx = point.x - prePoint.x;
          const dy = point.y - prePoint.y;
          const dt = point.time - prePoint.time;
          if (dy) {
            if (direction === 0) {
              direction = dy < 0 ? 1 : 2;
            }

            // 当前方向
            const currDirection = dy < 0 ? 1 : 2;
            // 如果当前方向和之前的方向不一致，跳出累计
            if (direction !== currDirection) {
              break;
            }
          }

          // 如果遇到大于45度或者大于50ms的点，跳出距离和时间累计
          if (Math.abs(dx / dy) > 1 || dt > 50) {
            break;
          }

          len += Math.sqrt(dx * dx + dy * dy);
          totalTime += dt;
        }

        elem.innerHTML += `<br/>len: ${len}, <br/>totalTime: ${totalTime}, <br/>speed: ${len / totalTime}， <br/>direction: ${direction === 1 ? 'up' : direction === 2 ? 'down' : 'none'}`;
      }
    },
  });
}
