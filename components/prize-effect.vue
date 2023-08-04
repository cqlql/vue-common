<script>

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
    // if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
    // return (c / 2) * ((t -= 2) * t * t + 2) + b;
    // return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
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


function completeList(list, num) {
  const currNum = list.length;
  const newList = [];

  if (currNum < num) {
    for (let index = 0; index < num; index++) {
      newList.push(list[index % currNum]);
    }
    return newList;
  }
  return list;
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

export default {
  props: ["list","prizeNum"],
  data() {
    return {
      x: 0,
      // 奖品数
      // prizeNum:9,
      // 显示数
      showNum: 7
    };
  },
  computed: {
    lists() {
      let newList = completeList(this.list,this.showNum)
      // 真实产品总数
      let realNum = this.list.length

      let lists = []
      for (let index = 0; index < this.prizeNum; index++) {
        lists.push(randomList(newList,index%realNum,1))
      }
      return lists
    },
    total () {
      let realNum = this.list.length
      if (realNum<this.showNum) {
        return this.showNum
      }
      return realNum
    }
  },
  mounted() {
    this.action()
  },
  methods:{
    action () {
      const animation = new Animation();
      // animation.easing = bezier(0.3, 0.2, 0.3, 0.9);
      // animation.easing = bezier(0.36, 0, 0.08, 0.9);

      const boxWidth = this.$refs.vContainer.$el.clientWidth;
      const itemWidth = boxWidth/this.showNum;
      const contentWidth = itemWidth*this.total

      // let prizeIndex = 1;
      // let centerIndex = 3;
      // const x = ref(0);
      
    
      let baseLen = boxWidth * 4;
      // let moveLen = baseLen ;

      animation.start((v) => {
        this.x = -(baseLen * v) % contentWidth;
      }, 3000,()=>{
        this.$emit('complete')
      });
    }
  }
};
</script>

<template>
  <view class="raffle-view">
    <view ref="vContainer" class="container">
      <!-- <view class="tit">奖品池</view> -->
      <view class="box">
        <view ref="vContent" class="move" :style="{ transform: `translate3d(${x}px,0,0)` }">
          <view v-for="ls of lists" class="list">
            <template v-for="i of 2">
              <view v-for="item of ls" class="item">
                <view class="item-wrap">
                  <img :src="item.img" />
                </view>
              </view>
            </template>
          </view>
        </view>
      </view>
    </view>
    <!-- <button @click="action">豪气四连</button> -->
  </view>
</template>

<style scoped>
.raffle-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.container {
  width: 700rpx;
  border: 5rpx solid #fff;
  border-radius: 50rpx;
  /* text-align: center; */
  background-color: #ffffff85;
  margin: 0 auto;
  overflow: hidden;
  /* padding-bottom: 50rpx; */
  padding-bottom: 30rpx;
  /* .tit {
    text-align: center;
    font-size: 40rpx;
  } */
}
.box {
  /* border: 2rpx solid red; */

  /* overflow: hidden; */
  padding-top: 30rpx;
}
.list {
  display: flex;
}
.item {
  /* border: 1rpx solid #333; */
  width: 100rpx;
  height: 100rpx;
  flex-shrink: 0;
  /* background-color: #ddd; */
}

.item-wrap{
  margin: 6rpx;
}
.item img {
  width: 100%;
  height: 100%;
}
</style>
