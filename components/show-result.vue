<template>
  <uni-popup class="result-popup-main" ref="prize" mode="top" :mask="false">
    <view class="result-popup">

     

      <view :class="['prize', explode && 'show']">
        <view class="prize_box">
          <view class="prize_close" @click="close()">
            <image src="/static/image/home/guanbi@2x.png" mode=""></image>
          </view>
  <!-- 					<view class="prize-top" :class="`prize-top-${mode}`">
            <image src="/static/image/result/gaizi@2x.png" mode="aspectFit"></image>
          </view -->
          <!-- 1开 -->
          <view :class="['prize_shop', 'center', 'onebox', 'tag-' + tag, scale && 'prize_shop_scale']" v-if="mode == 0">
            <view class="spining"></view>
            <view class="left-top-tag">
              <image class="tag-img" :src="tagImg" mode="aspectFit"></image>
              <text class="tag-text">{{tagText}}</text>
            </view>
            <image class="one" v-if="prizedata&&prizedata.prizeInfo" :src="prizedata.prizeInfo[0].image" mode="widthFix"></image>
            <text class="colorblack" v-if="prizedata&&prizedata.prizeInfo">{{ prizedata.prizeInfo[0].goods_name }}</text>
          </view>
          <!-- 5开or10开 -->
          <view class="prize_ul" :class="`prize_ul-${mode}`" v-else>
            <!-- <scroll-view scroll-x="true" class="scroll-view"> -->
              <view :class="['prize_ul_li', 'twobox', 'flex', 'tag-' + tagFun(item)]" v-for="(item,index) in prizedata.prizeInfo" :key="index">
                <view class="left-top-tag">
                  <image class="tag-img" :src="tagImgFun(item)" mode="aspectFit"></image>
                  <text class="tag-text">{{tagTextFun(item)}}</text>
                </view>
                <image class="two" :src="item.image" mode="widthFix"></image>
                <text class="a">{{ item.goods_name }}</text>
              </view>
            <!-- </scroll-view> -->
          </view>
          <view class="prize_footer" :class="`prize_footer-${mode}`" v-if="type == 0">
            <!-- 立即收下 -->
            <view class="btn btn-1" @click="$emit('accept')">{{$t('立即收下')}}</view>
            <!-- 一键回收 -->
            <view class="btn btn-0" @click="recycle()">{{$t('一键回收')}}</view>
          </view>
          <view class="shiwan center" v-else>{{$t('试玩结果仅供展示哦~')}}</view>
        </view>
      </view>
      <prize-effect v-if="!explode" :goodsList="goodsList" @complete="animationEnd" :prizeNum="num" :prizeList="prizedata.prizeInfo"></prize-effect>
      <audio
        id="result-audio"
        src="https://img.50api.cn/dingdang/choujiang.mp3"
      ></audio>
      <audio
        ref="eAudioZJ"
        src="https://img.50api.cn/dingdang/zhongjiang.mp3"
      ></audio>
    </view>
  </uni-popup>
</template>

<script>
import PrizeEffect from './prize-effect.vue';
export default {
  components: {
    PrizeEffect
  },
  props: {
    //数量
    num: Number,
    /**
     * 类型 0：正式开盒 1：试玩
     */
    type: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      //奖品列表
      prizedata: [],
      // 盲盒中商品列表
      goodsList:[],
      //特效
      scale: false,
      //开盒动画
      openLoading: true,

      explode: false,
    };
  },
  computed: {
    //开盒模式 0:1抽 1:5抽 2:9抽
    mode(){
      switch(this.num){
        case 5:
          return 1
        case 9:
          return 2
      }
      return 0
    },

    //单抽商品品质
    tag(){
      return this.tagFun(this.currPrizedata)
    },
    //单抽品质文本
    tagText(){
      return this.tagTextFun(this.currPrizedata)
    },
    //单抽品质角标
    tagImg(){
      return this.tagImgFun(this.currPrizedata)
    }
  },
  watch: {},
  methods: {
    animationEnd () {
      this.explode= true
    },
    open(prizedata) {
      prizedata.boxImg && (this.boxImg = prizedata.boxImg);

      this.goodsList= prizedata.goodslist

      //播放音乐
      this.startAudio();
      //打开结果
      this.$refs.prize.open();
      //加载动画
      this.openLoading = true;
      this.prizedata = prizedata;
      // this.showAnimation();
    },
    //播放音乐
    startAudio() {
      setTimeout(() => {
        this.audio = document
          .getElementById("result-audio")
          .querySelector("audio");
          this.audio.play();

          setTimeout(()=> {
            this.audio.pause();
            this.$refs.eAudioZJ.$el.querySelector('audio').play();
            
          },4600)
      });
    },
	  //关闭
    close(){
      this.$emit('close')
      this.$refs.prize.close()
    },
    //商品品质
    tagFun(prizeInfo){
      if(!prizeInfo) return null
      return prizeInfo.tag
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
    recycle(){
      this.$refs.prize.close()
      uni.showModal({
        cancelText: this.$t('取消'),
        confirmText: this.$t('确认'),
        title: this.$t('一键回收'),
        content: this.$t('是否确认一键回收'),
        success: res => {
          if(res.confirm){
            this.$emit('recycle', this.prizedata)
          }
        }
      })
    }
  },
};
</script>
<style lang="scss">
.onebox{height: 372rpx;width: 352rpx;border-radius:26rpx;background-color: #fff;}
.twobox{height: 186rpx;width: 176rpx;border-radius:13rpx;background-color: #fff;}
.result-popup-main{
	z-index: 9999;
	.result-popup{
		// background-image: url('@/static/image/result/bg.jpg');
		position: fixed;
		bottom: 0;
		left: 0;
		// background-repeat: no-repeat;
		// background-size: 100% 100%;
    // background-color: #fff;
     
    background: linear-gradient(#d4ecf1, #7dcee1);
	}
}

.prize {
	transform: scale(0);
	opacity: 0;
	transition: .2s;
	width: 750rpx;
	height: 100vh;
	display: flex;
	justify-content: center;
	&.show{
		transform: scale(1);
		opacity: 1;
	}
	.prize_box {
		width: 100%;
		height: 1120rpx;
		position: relative;
		flex-direction: column;
		background: url(/static/image/result/guang@2x.png) no-repeat;
		background-size: 100% auto;
		background-position: top;
		background-repeat: no-repeat;
		.prize_close {
			width: 64rpx;
			height: 64rpx;
			top: 280rpx;
			right: 30rpx;
			position: absolute;
		}
    .prize-top {
      width: 528rpx;
      height: 270rpx;
      position: absolute;
      top: 120rpx;
      left: 118rpx;
      &-2 {
        top: 40rpx;
      }
    }
    .prize_footer {
      width: 100%;
      &-2 {
        bottom: -114rpx;
      }
      .btn {
        height: 84rpx;
        border-radius: 16rpx;
        position: absolute;
      }
      .btn-1 {
        bottom: 0rpx;
		background-image: -webkit-linear-gradient(0deg, #89f7fe 0%, #66a6ff 100%);
		font-size: 38rpx;
		text-align: center;
		line-height: 86rpx;
		width: 159px;
		border-radius: 8px;
		position: absolute;
		left: 40rpx;
		color: #FFFFFF;
		font-weight: bold;
      }
      .btn-0 {
         bottom: 0rpx;
		 background-image: -webkit-linear-gradient(60deg, #ffc8de 0%, #ff67a4 100%);
		 font-size: 38rpx;
		 text-align: center;
		 line-height: 86rpx;
		 right: 40rpx;
		 width: 159px;
		 color: #FFFFFF;
		 font-weight: bold;
      }
    }
	}
	.shiwan {
		background: url(/static/image/open/tanchuangbeijing@2x.png) no-repeat;
		background-size: cover;
	}
	.prize_ul{
		width: 566rpx;
		// padding: 0 92rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
    position: absolute;
    top: 336rpx;
    left: 92rpx;
    &-2 {
      top: 360rpx;
    }
		&::after{
			content: "";
			width: 176rpx;
		}
	}
	// .scroll-view {
	// 	width: 522rpx;
	// 	white-space:nowrap;
		.prize_ul_li {
			margin-bottom: 16rpx;
			position: relative;
			width: 176rpx;
			height: 186rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			display: flex;
			padding: 8rpx 0;
			// margin-right: 20rpx;
			box-sizing: border-box;
			
			image {
				margin: 0 auto;
			}
			text {
				font-size: 24rpx;
				// font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #171A20;
				width: 146rpx;
				overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
			}
			.left-top-tag{
				width: 3rem;
				height: 3rem;
				.tag-text{
					font-size: 0.6rem !important;
				}
			}
		}
	// }
	.prize_shop {
		transition: 1s;
		position: absolute;
		top: 336rpx;
		left: 198rpx;
		display: flex;
		flex-direction: column;
		.spining{
			z-index: -1;
			height: 150vh;
			width: 150vh;
			background-image: url('@/static/image/result/spining.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			position: absolute;
		}
		image {
			width: 174rpx;
			height: 235rpx;
			margin-bottom: 20rpx;
		}
		text {
			width: 70%;
			font-size: 16rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #171A20;
			overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
      text-align: center;
		}
		.colorblack{
			font-size: 32rpx !important;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #171A20;
		}
		.left-top-tag{
			width: 5rem;
			height: 5rem;
			.tag-text{
				font-size: 1rem;
			}
		}
	}
	.tag-normal{
		box-shadow: 0 0 40rpx 18rpx #9d85ff;
	}
	.tag-rare{
		box-shadow: 0 0 40rpx 18rpx #47a8ff;
	}
	.tag-supreme{
		box-shadow: 0 0 40rpx 32rpx #feb337;
	}
	.tag-legend{
		box-shadow: 0 0 40rpx 32rpx #fe615e;
	}
	.shiwan {
		width: 399rpx;
		height: 48rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		margin-top: 40rpx;
		background: #000000;
		border-radius: 27rpx 27rpx 27rpx 27rpx;
	}
}
.left-top-tag{
	z-index: 999999;
	position: absolute;
	left: -2px;
	top: -3px;
	.tag-img{
		height: 100% !important;
		width: 100% !important;
	}
	.tag-text{
		position: absolute;
		top: 30%;
		left: 30%;
		color: #fff !important;
		width: auto !important;
		transform: translateX(-50%) translateY(-50%) rotate(-45deg);
	}
}
.prize_shop_scale{
	transform: scale(1.3);
}

@keyframes rotate{
    from{transform: rotate(0deg)}
	to{transform: rotate(360deg)}
}
.spining{
    transition: 0.3s;
    animation: rotate 10s linear infinite;  /*开始动画后无限循环，用来控制rotate*/
}

</style>
