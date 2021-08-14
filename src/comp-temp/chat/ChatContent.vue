<template>
  <div class="chart-content">
    <div class="chart-content__time">星期四 16:04</div>

    <div class="chart-content__msg">
      <div class="chart-content__ava">
        <img
          src="http://placehold.it/36x36"
          alt=""
        >
      </div>
      <div class="chart-content__cont">
        <div class="chart-content__name">闪亮小星星</div>
        <div class="chart-content__det">
          <span>
            我现在说起来蜻蜓公主的故事，很少会有人相信，她已经不像听起来那么神奇，也许就是一个与你擦肩而过的普通女孩。我有一本画册，记录了她每个成长的瞬间与心灵的侧影，我从来没向任何人展示过这本画册，大概至死都不会。
          </span>
        </div>
      </div>
    </div>
    <div class="chart-content__msg r">
      <div class="chart-content__ava">
        <img
          src="http://placehold.it/36x36"
          alt=""
        >
      </div>
      <div class="chart-content__cont">
        <div class="chart-content__name">闪亮小星星</div>
        <div class="chart-content__det">
          <span>
            我：好的
          </span>
        </div>
      </div>
    </div>
    <div class="chart-content__time">星期四 16:04</div>

    <div class="chart-content__msg">
      <div class="chart-content__ava">
        <img
          src="http://placehold.it/36x36"
          alt=""
        >
      </div>
      <div class="chart-content__cont">
        <div class="chart-content__name">闪亮小星星</div>
        <div class="chart-content__det">
          <span>
            我：好的
          </span>
        </div>
      </div>
    </div>
    <div class="chart-content__time r">星期四 16:04</div>
    <div class="chart-content__msg r">
      <div class="chart-content__ava">
        <img
          src="http://placehold.it/36x36"
          alt=""
        >
      </div>
      <div class="chart-content__cont">
        <div class="chart-content__name">闪亮小星星</div>
        <div class="chart-content__det">
          <span>
            我：好的
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chart-content {
  padding: 10px;
}

// .chart-content__t {
//   font-size: 12px;
//   color: #888;
//   padding-left: 6px;
// }

.chart-content__time {
  // text-align: center;
  font-size: 12px;
  color: #888;
}

.chart-content__time.r {
  text-align: right;
}

.chart-content__msg {
  margin: 6px 0;
  padding-bottom: 6px;
}

.chart-content__ava {
  float: left;
  width: 40px;
}

.chart-content__ava img {
  width: 100%;
  display: block;
}

.chart-content__cont {
  margin-left: 50px;
  margin-right: 10%;
}

.chart-content__name {
  font-size: 12px;
}

.chart-content__det {
  font-size: 14px;
  color: #333;

  span {
    margin-top: 4px;
    padding: 2px 4px;
    border-radius: 5px;
    background-color: #fff;
    display: inline-block;
    border: 1px solid #ddd;
  }
}

.chart-content__msg.r {
  .chart-content__ava {
    float: right;
  }

  .chart-content__cont {
    margin-right: 50px;
    margin-left: 10%;
  }

  .chart-content__name {
    text-align: right;
  }

  .chart-content__det {
    text-align: right;

    span {
      background-color: #cce4fc;
      border-color: #a6d3ff;
    }
  }

  // .chart-content__t {
  //   padding-left: 0;
  //   padding-right: 6px;
  // }
}
</style>
