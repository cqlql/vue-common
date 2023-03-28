/**
 *
 * 移动方向获取
 * 也可获取移动角度，此功能目前注释了
 * 
 * @example
 * let moveDirection = new MoveDirection();
 * drag({
 *   elem,
 *   onDown(e) {
 *     e = e as MouseEvent;
 *     moveDirection.start(e.pageX, e.pageY);
 *   },
 *   onMove(e) {
 *     e = e as MouseEvent;
 * 
 *     const { position } = moveDirection.move(e.pageX, e.pageY);
 * 
 *     console.log(position);
 *   },
 * });
 * 
 */
class MoveDirection {
  private prevX = 0;
  private prevY = 0;

  // 最小移动距离，超过了这个值才算是移动
  minLen = 3;

  /**
   * 用来记录第一次坐标。一般在开始时调用，周期内只调用一次，比如按下鼠标 mousedown 事件中。
   * @param x 
   * @param y 
   */
  start(x: number, y: number) {
    this.prevX = x;
    this.prevY = y;
  }
  getAngle(radian: number) {
    return (radian * 180) / Math.PI;
  }
  move(x: number, y: number) {
    let { getAngle, prevX, prevY, minLen } = this;
    let lx = x - prevX;
    let ly = y - prevY;

    let position = '';
    // let radian = 0;
    // let angle = 0;
    // let oneRadian = 1.5707963267948966;

    let lxAbs = Math.abs(lx);
    let lyAbs = Math.abs(ly);

    if (lxAbs > minLen || lyAbs > minLen) {
      // 移动了
      prevX = x;
      prevY = y;

      if (lx === 0) {
        // 这时角度有 90 / 270

        if (ly > 0) {
          position = 'bottom';
          // angle = 90;
          // radian = oneRadian;
        } else {
          position = 'top';
          // angle = 270;
          // radian = oneRadian * 3;
        }
      } else if (ly === 0) {
        if (lx > 0) {
          position = 'right';
          // angle = 0;
          // radian = 0;
        } else {
          position = 'left';
          // angle = 180;
          // radian = oneRadian * 2;
        }
      } else {
        let r = ly / lx;
        if (r > 0) {
          if (lx > 0) {
            // 右下角
            position = r < 1 ? 'right' : 'bottom';
            // angle = getAngle(Math.asin(r)) || 90;
            // radian = Math.asin(r) || oneRadian;
          } else {
            // 左上角
            position = r < 1 ? 'left' : 'top';
            // angle = 180 + (getAngle(Math.asin(r)) || 90);
            // radian = oneRadian * 2 + (Math.asin(r) || oneRadian);
          }
        } else {
          if (lx > 0) {
            // 右上角
            position = r < 1 ? 'right' : 'top';
            // angle = 360 - (getAngle(Math.asin(-r)) || 90);
            // radian = oneRadian * 4 - (Math.asin(-r) || oneRadian);
          } else {
            // 左下角
            position = r < 1 ? 'left' : 'bottom';
            // angle = 180 - (getAngle(Math.asin(-r)) || 90);
            // radian = oneRadian * 2 - (Math.asin(-r) || oneRadian);
          }
        }
      }
    }
    // console.log(
    //     '🚀 -- onMove -- 移动了:',
    //     JSON.stringify({
    //       lx,
    //       ly,
    //       // radian,
    //       // angle,
    //       // angle2: getAngle(radian),
    //       // angleEqual:angle=== getAngle(radian),
    //       position,
    //     }),
    //   );
    return {
      position,
    };
  }
}