<template>
  <view class="prize-list">
    <view v-for="i of 5" class="prize-item">
      <div class="box">
        <view class="tag"></view>
        <view class="img-wrap">
          <image
            class="img"
            src="https://dxxshoptest.oss-cn-shenzhen.aliyuncs.com/backManager/bd08d463-6610-4066-a9cc-d763e522094a.png"
          ></image>
        </view>
        <view class="name">
          小米充电器头30W快充10s红米k40k30i闪充33w瓦note9K20cc9pro手机18w头6正品7数据线科瑞信原装27w8typec
        </view>
      </div>
      <div class="btn">
        <view class="label">一键分解</view>
        <view class="val">
          <image
            class="ico"
            src="/static/image/result/icon-qingtuan.png"
          ></image>
          1811.9</view
        >
      </div>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.prize-list {
  display: flex;
  margin: 60rpx 0;
  flex-wrap: wrap;
  gap: 24rpx;
  justify-content: center;
  color: rgba(0, 0, 0, 0.9);
}
.prize-item {
  .box {
    position: relative;
    width: 230rpx;
    height: 270rpx;
    background-color: #fff;
    border: 2rpx solid #705ed1;
    box-shadow: inset 0 0 20px 0px #83f0f3, 0 0 4rpx 0 #00000045;
    border-radius: 10rpx;
  }
  .name {
    // position: absolute;
    // bottom: 40rpx;
    // width: 80%;
    // left: 10%;
    text-align: center;
    font-size: 26rpx;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 20rpx 16rpx;
    font-weight: 700;
  }
  .img-wrap {
    position: relative;
    // width: 70%;
    padding-bottom: 70%;
    // left: 15%;
    margin: 40rpx 40rpx 0;
    background-color: #fff;
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .btn {
    margin-top: 16rpx;
    border: 1px solid #000;
    background-color: #fff;
    font-weight: 700;
    text-align: center;
    border-radius: 8rpx;

    .label {
      font-weight: 700;
    }
    .val {
      font-weight: 700;
    }
    .ico {
      width: 20rpx;
      height: 20rpx;
      display: inline-block;
    }
  }
}
</style>
