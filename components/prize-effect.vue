<script>
export default {
  props: ["goodsList", "prizeNum", "prizeList"],
  data() {
    return {
      x: 0,
      // 奖品数
      // prizeNum:9,
      // 显示数
      showNum: 7,
    };
  },
  computed: {
    lists() {
      let goodsList = this.goodsList;
      // 真实产品总数
      let realNum = goodsList.length;

      function getRandomIndex() {
        return Math.floor(Math.random() * realNum);
      }

      let lists = [];
      for (let index = 0; index < this.prizeNum; index++) {
        let newList = [];
        for (let i = 0; i < 50; i++) {
          let goods;
          if (i === 38) {
            goods = this.prizeList[index];
          } else {
            goods = goodsList[getRandomIndex()];
          }
          newList.push(goods);
        }
        lists.push(newList);
      }
      return lists;
    },
  },
  mounted() {
    this.action();
  },
  methods: {
    action() {
      const boxWidth = this.$refs.vContainer.$el.clientWidth;
      const itemWidth = this.$refs.vItem.$el.clientWidth;

      this.x = -itemWidth * 38 + (boxWidth - itemWidth) / 2;
    },
    transitionend() {
      this.$emit("complete");
    },

    //品质文本
    tagTextFun(prizeInfo){
      if(!prizeInfo) return null
      if(prizeInfo.tag == 'normal'){
        return this.$t('普通')
      }
      if(prizeInfo.tag == 'rare'){
        return this.$t('稀有')
      }
      if(prizeInfo.tag == 'supreme'){
        return this.$t('史诗')
      }
      if(prizeInfo.tag == 'legend'){
        return this.$t('传说')
      }
    },
    //品质角标
    tagImgFun(prizeInfo){
      if(!prizeInfo) return null
      if(prizeInfo.tag == 'normal'){
        return "/pagesA/static/tag-1.png"
      }
      if(prizeInfo.tag == 'rare'){
        return "/pagesA/static/tag-2.png"
      }
      if(prizeInfo.tag == 'supreme'){
        return "/pagesA/static/tag-3.png"
      }
      if(prizeInfo.tag == 'legend'){
        return "/pagesA/static/tag-4.png"
      }
    },
  },
};
</script>

<template>
  <view class="raffle-view">
    <view ref="vItem" class="item hide"  :class="'num'+prizeNum"></view>
    <view ref="vContainer" class="container">
      <view class="tit">
        <div class="tit-wrap">奖品池</div>
      </view>
      <view class="box">
        <view
          class="move"
          :style="{ transform: `translate3d(${x}px,0,0)` }"
          @transitionend="transitionend"
        >
          <view v-for="ls of lists" class="list">
            <view v-for="item of ls" class="item" :class="'num'+prizeNum">
              <view class="left-top-tag">
                <image
                  class="tag-img"
                  :src="tagImgFun(item)"
                  mode="aspectFit"
                ></image>
                <text class="tag-text">{{ tagTextFun(item) }}</text>
              </view>
              <view class="item-wrap">
                <img :src="item.image" />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- <button @click="action">豪气四连</button> -->
  </view>
</template>

<style scoped lang="scss">
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
  // min-height: 800rpx;
  // margin: 0 auto;
  // overflow: hidden;
  // padding-top: 100rpx;
  // display: flex;
  //   align-items: center;

  // background: url(https://img.50api.cn/dingdang/ql.png);
  // background-size: 100% 100%;

  border: 5rpx solid #fff;
  border-radius: 50rpx;
  background-color: #ffffff85;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 50rpx;
  


  .tit {
    text-align: center;
  }
  .tit-wrap {
    font-size: 40rpx;
    background-color: #fff;
    width: 200rpx;
    margin: 0 auto;
    border-radius: 0 0 20rpx 20rpx;
    padding: 10rpx 10rpx 20rpx;
    margin-bottom: 30rpx;
  }
}
.box {
  /* border: 2rpx solid red; */

  /* overflow: hidden; */
  // padding-top: 30rpx;
}

.move {
  transition: transform 5s cubic-bezier(0.2, 0, 0.1, 1);
}
.list {
  display: flex;
}
.item {
  /* border: 1rpx solid #333; */
  width: 200rpx;
  height: 200rpx;
  flex-shrink: 0;
  display: flex;
  position: relative;
  .left-top-tag {
    position: absolute;
    left: 6rpx;
    top: 6rpx;
    width: 100%;
    height: 100%;
    transform: scale(.5);
    transform-origin: 0 0;
    
    .tag-img {
      height: 100% !important;
      width: 100% !important;
    }
    .tag-text {
      position: absolute;
      top: 30%;
      left: 30%;
      color: #fff !important;
      width: auto !important;
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      font-size: 40rpx;
    }
  }
 
}

// .item.num1{}
// .item.num5{}
.item.num9{
  width: 120rpx;
  height: 120rpx;
  .item-wrap {
    margin: 6rpx;
  }
}

.item.hide {
  opacity: 0;
  position: absolute;
  pointer-events: none;
}


.item-wrap {
  margin: 10rpx;
  background-color: #fff;
  border-radius: 8rpx;
  overflow: hidden;
  
  flex: 1;
 
}
.item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
