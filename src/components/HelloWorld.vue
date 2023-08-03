<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);

const list = [
  {
    id: "1",
    name: "1",
    img: "//img10.360buyimg.com/seckillcms/s140x140_jfs/t1/194549/19/13333/188027/60f30d8aE144e212d/af2f276856b3b978.jpg.webp",
  },
  {
    id: "2",
    name: "2",
    img: "//img20.360buyimg.com/seckillcms/s140x140_jfs/t1/127785/22/35777/104123/640172a7F9a6e2d75/3603e2456584da3a.jpg.webp",
  },
  {
    id: "3",
    name: "3",
    img: "//img20.360buyimg.com/seckillcms/s140x140_jfs/t20260522/137334/27/32093/43030/646ca3aeF652d03cf/cac75edac45bead0.jpg.webp",
  },
  {
    id: "4",
    name: "4",
    img: "//img13.360buyimg.com/seckillcms/s140x140_jfs/t1/221947/2/6459/190430/61bff09aE35bc929b/e836cc7537c4528d.jpg.webp",
  },
  {
    id: "5",
    name: "5",
    img: "//img30.360buyimg.com/img/s100x100_jfs/t1/91981/1/41511/72149/64c333e9F758186fd/aff40a7e8d41fadf.jpg!cc_100x100.webp",
  },
];

class Animation {
  // params: 反复执行的函数，动画持续时间(毫秒)，到达目标位置时回调
  start(exec, duration = 400, complete = () => {}) {
    let t = 0; // 当前起始次数
    let interval = 16; // 帧间隔
    let count = duration / interval; // 总次数
    let position = 0; // 起始位置
    // let endPosition = 1 // 目标位置
    let length = 1; // 要走的总长度

    let that = this;

    function run() {
      t++;
      if (t < count) {
        exec(that.easing(t, position, length, count));
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
  easing(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
    // return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    // return c*((t=t/d-1)*t*t*t*t + 1) + b;
    // return -c * (t /= d) * (t - 2) + b
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

function randomList(list, prizeIndex, prizeNewIndex) {
  const cloneList = list.slice();
  const newList = [];
  newList.push(cloneList.splice(prizeIndex, 1)[0]);
  function loopGet() {
    const len = cloneList.length;
    if (len) {
      const index = Math.floor(len * Math.random());
      newList.push(cloneList.splice(index, 1)[0]);
      loopGet();
    }
  }
  loopGet();
  // 交换。大奖放到指定位置
  const prizeValue = newList[0];
  newList[0] = newList[prizeNewIndex];
  newList[prizeNewIndex] = prizeValue;
  return newList;
}
console.log("result", randomList([1, 2, 3, 4, 5], 1, 2));

const animation = new Animation();
// animation.easing = bezier(0.59,0.21,0,1);
// animation.easing =bezier(0.47,0.09,0.24,0.99);
// animation.easing =bezier(0.47,0.09,0.16,0.83);
// animation.easing =bezier(0.45,0.1,0.1,0.8);
animation.easing = bezier(0.3, 0.2, 0.3, 0.9);

let prizeIndex = 1;
let centerIndex = 2;
const x = ref(0);
const itemWidth = 100;
const boxWidth = 500;
let baseLen = boxWidth * 4;
let moveLen = baseLen + itemWidth * (centerIndex + 1) + prizeIndex * itemWidth;

function start() {
  animation.start((v) => {
    x.value = -(moveLen * v) % boxWidth;
  }, 3000);
}
</script>

<template>
  <div class="raffle-view">
    <div class="container">
      <div class="tit">奖品池</div>
      <div class="box">
        <div class="move" :style="{ transform: `translateX(${x}px)` }">
          <div v-for="i of 2" class="list">
            <template v-for="i of 2">
              <div v-for="item of list" class="item">
                {{ item.id }}
                <img :src="item.img" alt="" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <button @click="start">豪气四连</button>
  </div>
</template>

<style scoped>
.box {
  border: 2px solid red;
  width: 500px;
  overflow: hidden;
}
.list {
  display: flex;
}
.item {
  /* border: 1px solid #333; */
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  background-color: #ddd;
}
.item img {
  width: 100%;
  height: 100%;
}
</style>
