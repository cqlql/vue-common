<script>

class Animation {
  // params: 反复执行的函数，动画持续时间(毫秒)，到达目标位置时回调
  start(exec, duration = 400, complete = () => {}) {
    let t = 0; // 当前起始次数
    let interval = 16; // 帧间隔
    let count = duration / interval; // 总次数
    // let position = 0; // 起始位置
    // let endPosition = 1 // 目标位置
    // let length = 1; // 要走的总长度

    let that = this;

    function run() {
      t++;
      if (t < count) {
        // exec(that.easing(t, position, length, count));
        exec(that.easing(t/ count));
        // that.stopId = requestAnimationFrame(run, interval)
        that.stopId = setTimeout(run, interval);
      } else {
        // 最后一次
        exec(1);

        that.stopId = undefined;

        complete();
      }
    }

    run();
  }

  // 终止动画
  stop() {
    // cancelAnimationFrame(this.stopId)
    clearTimeout(this.stopId);
  }

  // 缓动类型：可进行更换
  // easeOutQuad
  // easing(t, b, c, d) {
  //   // if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
  //   // return (c / 2) * ((t -= 2) * t * t + 2) + b;
  //   return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  //   // return c*((t=t/d-1)*t*t*t*t + 1) + b;
  //   // return -c * (t /= d) * (t - 2) + b
  // }
  easing(x){
    return 1 - Math.pow( 1 - x, 4 );
    // return 1 - Math.pow( 1 - x, 5 );
  }
}

function bezier(p1x, p1y, p2x, p2y) {
  var Cx = 3 * p1x,
    Bx = 3 * (p2x - p1x) - Cx,
    Ax = 1 - Cx - Bx,
    Cy = 3 * p1y,
    By = 3 * (p2y - p1y) - Cy,
    Ay = 1 - Cy - By;

  function bezierX(t) {
    return t * (Cx + t * (Bx + t * Ax));
  }

  function bezierY(t) {
    return t * (Cy + t * (By + t * Ay));
  }

  function findX(t) {
    var x = t,
      i = 0,
      z;

    while (++i < 14) {
      z = bezierX(x) - t;
      if (Math.abs(z) < 1e-3) break;
      x -= z / derivativeX(x);
    }

    return x;
  }

  function derivativeX(t) {
    return Cx + t * (2 * Bx + 3 * Ax * t);
  }

  return function (t, b, c, d) {
    return bezierY(findX(t / d)) * c + b;
  };
}

export default {
  props: ["list"],
  data() {
    return {
      x: 0,
      itemWidth: 0
    };
  },
  mounted() {
    const boxWidth = this.boxWidth = this.$refs.vContainer.clientWidth;
      this.itemWidth = boxWidth/5;
  },
  methods: {
    action () {
      const animation = new Animation();
      // animation.easing = bezier(0.59,0.21,0,1);
      // animation.easing =bezier(0.47,0.09,0.24,0.99);
      // animation.easing =bezier(0.47,0.09,0.16,0.83);
      // animation.easing =bezier(0.45,0.1,0.1,0.8);
      // animation.easing = bezier(0.3, 0.2, 0.3, 0.9);
      // animation.easing = bezier(0.36, 0, 0.08, 0.9);

      let prizeIndex = 1;
      let centerIndex = 2;
      // const x = ref(0);
      const boxWidth = this.boxWidth;
      const itemWidth=this.itemWidth;
      console.log("🚀 -- file: RaffleView.vue:116 -- action -- itemWidth:", itemWidth)
      let baseLen = boxWidth * 4;
      let moveLen =
        baseLen + itemWidth * (centerIndex + 1) + prizeIndex * itemWidth;

      animation.start((v) => {
        this.x = -(moveLen * v) % boxWidth;
      }, 2000);
    }
  }
};
</script>

<template>
  <div class="raffle-view">
    <div ref="vContainer" class="container">
      <!-- <div class="tit">奖品池</div> -->
      <div class="box">
        <div class="move" :style="{ transform: `translate3d(${x}px,0,0)` }">
          <div v-for="i of 2" class="list">
            <template v-for="i of 2">
              <div v-for="item of list" class="item" :style="{width: itemWidth+`px`}">
                {{ item.id }}
                <img :src="item.img" alt="" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <button @click="action">start</button>
  </div>
</template>

<style scoped>
.raffle-view {
  background-color: #ddd;
  /* width: 720px; */
  height: 720px;
  padding: 10px;
}
.container {
  /* width: 500px; */
  border: 5px solid #fff;
  border-radius: 50px;
  /* text-align: center; */
  margin: 0 auto;
  overflow: hidden;
  .tit {
    text-align: center;
  }
}
.box {
  /* border: 2px solid red; */

  /* overflow: hidden; */
}
.list {
  display: flex;
}
.item {
  /* border: 1px solid #333; */
  /* width: 100px; */
  height: 100px;
  flex-shrink: 0;
  /* background-color: #ddd; */
}
.item img {
  width: 100%;
  height: 100%;
}
</style>
