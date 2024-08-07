<template>
  <div>
    <TimeLine />

    <div class="TimeLineDemo2">
      <div class="TimeLine">
        <div class="item">
          <div class="cont">
            <div class="name">2024</div>

            <div class="desc">
              <p><span>4月</span>乐信成为中国国家击剑队官方合作伙伴</p>
              <p><span>1月</span>乐信总部大厦喜封金顶，将于2025年启用</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="cont">
            <div class="name">2023</div>
            <div class="desc">
              <p><span>12月</span>获得《南方日报》2023年度“新质新力·行业发展创新奖”</p>
              <p><span>10月</span>乐信成立十周年</p>
              <p><span>10月</span>第四年入选“中国服务业企业500强榜单”</p>
              <p><span>09月</span>用户数突破2亿</p>
              <p><span>09月</span>累计促成借款额突破10000亿元</p>
              <p><span>08月</span>乐信宣布启动每半年一次的分红政策，提高股东价值</p>
              <p>
                <span>07月</span
                >乐信连续第五年获得《亚洲银行家》大奖，获颁中国区“中国最佳数字化生态系统项目”奖项
              </p>
              <p><span>06月</span>乐信“小店烟火计划”实施一周年，助力数十万小店重拾烟火气</p>
              <p>
                <span>04月</span
                >第四届合作伙伴大会召开，提出风险、数据双轮驱动，与金融机构共赢消费复苏机遇
              </p>
              <p><span>02月</span>管理在贷余额规模突破干亿</p>
              <p><span>02月</span>推出“春雨消费复苏”行动，9项举措助力实体经济发展</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeLine from './TimeLine.vue'
export default {
  components: {
    TimeLine
  }
}
</script>


<style lang="scss" scoped>
.TimeLineDemo2 {
  $dotTop: 24px;
  $dotSize: 10px;
  $lineWidth: 2px;
  $left: 100px;
  $dotColor: #67c23a;
  $lineColor: #eff2f4;
  $nameColor: #2364ac;

  .TimeLine {
    .cont {
      display: flex;

      .name {
        width: 130px;
        flex-shrink: 0;
        font-weight: 600;
        font-size: 28px;
        color: $nameColor;
        line-height: 0.8;
      }

      p {
        line-height: 20px;
        margin: 0;
        padding-bottom: 30px;
        font-size: 16px;
      }

      span {
        color: $nameColor;
        margin-right: 3px;
      }
    }

    .item {
      position: relative;
      padding-right: 30px;
      padding-top: 20px;

      &::before {
        content: '';
        position: absolute;
        left: $left;
        top: 0;
        bottom: 0;
        width: $lineWidth;
        background-color: $lineColor;
      }

      &::after {
        content: '';
        position: absolute;
        top: $dotTop;
        left: $left;
        width: $dotSize;
        height: $dotSize;
        transform: translateX(calc(($dotSize - $lineWidth) / -2));
        border-radius: $dotSize;
        z-index: 1;
        box-sizing: border-box;
        border: 2px solid $dotColor;
        background-color: #fff;
      }
    }

    .item:first-child {
      &::before {
        top: calc($dotTop + ($dotSize / 2));
      }
    }

    .item:last-child {
      &::before {
        top: 0;
        bottom: auto;
        // height: calc($dotTop + ($dotSize/2));
        height: 100%;
      }
    }

    // .item:only-child {
    //   &::before {
    //     display: none;
    //   }
    // }
  }
}
</style>
