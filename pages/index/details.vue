<template>
  <view class="index-main">
    <!-- <audio id="audio" src="/static/image/home/bj.mp3" loop></audio> -->
    <view class="details">
      <!-- nav start -->
      <view class="details_title">
        <view class="details_nav"></view>
        <view class="details-title_head flex">
          <view class="details_title_return" @click="returnTop">
            <image src="/static/image/publice/fanhui@2x.png" mode=""></image>
          </view>
          <view class="details_title_name">{{ boxDetail.box_name }}</view>
          <!-- <view class="details_title_mp3" @click="changePlay">
    			<image :src="isPlay ? '/static/image/home/bofang@2x.png' : '/static/image/home/guanbiyinyue@2x.png' " mode=""></image>
    		</view> -->
        </view>
      </view>
    </view>
    <!-- nav end -->
    <!-- 灯光 -->
    <view class="bjt">
      <!-- <image class="light" src="/h5/static/image/new_home/dg.png" mode="widthFix"></image> -->
      <!-- 上半部分 -->
      <view class="top">
        <!-- 	<view class="title">
				<view class="oval" @click="toRecharge()">
					<image class="small-img" src="/static/image/new_home/yecz.png" mode="widthFix"></image>
					<text> {{capital.coin}} </text>
					<span>金币充值</span>
				</view>
				<view class="oval1" @click="toMyBox()">
					<image class="small-img" src="/static/image/new_home/tbxg.png" mode="widthFix"></image>
					<text> {{capital.box}} </text>
					<span>物品盒柜</span>
				</view>
				<view class="right" @click="wfashuiming()">
					<image class="small-img" src="/static/image/new_home/wfsm.png" mode="widthFix"></image>
					<span>玩法说明</span>
				</view>
			</view> -->
        <lunbobox></lunbobox>
        <view class="play-explain" @tap="$refs.regulation.open()">
          <image
            class="small-img"
            src="/static/image/tabbar/wodeyixuanzhong@2x1.png"
            mode="widthFix"
          ></image>
          <text>{{ $t("买家须知") }}</text>
        </view>
        <view class="details_footer_coll" @click="changeStar" v-if="type == 0">
          <image
            :src="
              boxDetail.is_star == 1
                ? '/static/image/home/shoucangyixuanzhong@2x.png'
                : '/static/image/home/shoucangweixuanzhong@2x.png'
            "
            mode="widthFix"
          ></image>
        </view>
        <view class="loop-container">
          <!-- 图片轮播主区域 -->
          <view class="loop-image-main">
            <prize-flying
              v-if="box_id"
              :key="`flying`"
              :box-id="box_id"
            ></prize-flying>
            <!-- 图片轮播 -->
            <view class="loop-image-warapper">
              <swiper autoplay circular class="swiper">
                <swiper-item>
                  <view :class="['image-box']">
                    <template v-for="(item, index) in boxDetail.box_banner">
                      <view :key="index">
                        <image
                          :class="[
                            boxDetail.box_banner.length > 1
                              ? `box-banner-${index}`
                              : 'box-banner',
                          ]"
                          :src="item.image"
                          mode="heightFix"
                          @click="lookImg(item.image)"
                        ></image>
                        <text>{{ item.desc }}</text>
                      </view>
                    </template>
                  </view>
                </swiper-item>
              </swiper>
              <!-- <image src="/static/image/home/erji@2x.png" mode=""></image> -->
            </view>
            <!-- 底座 -->
            <!-- <view class="pedestal">
						<image src="/h5/static/image/new_home/dizhuo.png" mode="heightFix"></image>
					</view> -->
            <!-- 手指 -->
            <!-- <view class="finger">
						<image src="/h5/static/image/new_home/sz.png" mode="heightFix"></image>
					</view> -->
          </view>
        </view>
      </view>
      <!-- 下半部分 -->
      <view class="bottom">
        <view>
          <!-- 下方按钮区 -->
          <view class="button-container">
            <view class="side-btn" @click="haveTry()">
              <image
                src="/static/image/new_home/swmhan.png"
                mode="widthFix"
              ></image>
              <!-- <text>试玩盲盒</text> -->
            </view>
            <view class="center-btn" @click="selectNum()">
              <image
                src="/static/image/new_home/khan.png"
                mode="widthFix"
              ></image>
              <text>{{ $t("立即开箱") }}</text>
            </view>
          </view>
          <!-- 下方价格 -->
          <view class="price-container">
            <text class="price"
              >{{ boxDetail.box_name }}{{ boxDetail.coin_price
              }}{{ $t("元/个") }}</text
            >
          </view>
          <view class="kxbz">
            {{ $t("盲盒开箱必中以下宝贝之一") }}
          </view>
          <view class="bottom-top">
            <view class="bottom-top-left">
              <text>{{ $t("天天开盲盒") }}</text>
            </view>
            <view class="bottom-top-center">
              <image src="/static/image/new_home/bottom-top-center.png"></image>
            </view>
            <view class="bottom-top-right">
              <text>{{ $t("未成年必须在家长监督下使用") }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <uni-popup ref="num-popup" type="bottom" :mask-click="false">
      <view class="num-popup">
        <view class="popup-close" @click="closeNumPopup">
          <image src="/static/image/home/guanbi@2x.png" mode=""></image>
        </view>
        <view class="num-button-group">
          <view class="num-button" @click="createOder(1)">
            <image
              src="/static/image/new_home/btn-1.png"
              mode="widthFix"
            ></image>
            <text>{{ $t("一发入魂") }}</text>
          </view>
        </view>
        <view class="num-button-group">
          <view class="num-button" @click="createOder(5)">
            <image
              src="/h5/static/image/new_home/btn-3.png"
              mode="widthFix"
            ></image>
            <text>{{ $t("五连绝世") }}</text>
          </view>
          <view class="num-button" @click="createOder(9)">
            <image
              src="/h5/static/image/new_home/btn-2.png"
              mode="widthFix"
            ></image>
            <text>{{ $t("九连更稳") }}</text>
          </view>
        </view>
        <view class="order-info">
          <view> {{ $t("开盒数量") }}：{{ boxNum }} </view>
          <view class="total-price">
            {{ $t("订单金额") }}：＄{{ totalPrice }}
          </view>
        </view>
        <view class="popup-btn">
          <!-- <button type="primary" @click="$refs['payment'].open(0, boxNum)">创建订单</button> -->
        </view>
      </view>
    </uni-popup>

    <payment
      ref="payment"
      :box-id="box_id"
      :box-num="boxNum"
      :type="type"
      @create-success="closeNumPopup"
      @show-result="showResult"
    ></payment>
    <show-result
      ref="result-popup"
      :num="boxNum"
      @accept="toMyBox()"
      @recycle="recycle"
      :type="type"
    ></show-result>
    <recycle ref="recycle"></recycle>
    <!-- 商品预览start -->
    <view class="goods-view">
      <view class="rate-view flex">
        <text class="rate-txt">{{ $t("获得概率") }}</text>
        <view class="rate-list flex">
          <view
            class="rate-item"
            v-for="(item, index) in rates"
            :key="item.value"
          >
            <text :class="['rate-name', `rate-name-${index}`]">{{
              item.name
            }}</text>
            <text class="rate-value">{{ item.value }}</text>
          </view>
        </view>
      </view>
      <view class="goods-list-view flex">
        <view
          class="goods-item"
          v-for="(item, index) in boxDetail.goodslist"
          :key="index"
        >
          <text
            class="goods-tag"
            :class="`goods-tag-${
              item.tag == '传说'
                ? 0
                : item.tag == '史诗'
                ? 1
                : item.tag == '稀有'
                ? 2
                : 3
            }`"
            ><!-- {{item.tag}} --></text
          >
          <view class="goods-img-view">
            <image
              :src="item.image"
              mode="heightFix"
              @click="lookDetail(item)"
            ></image>
          </view>
          <view class="goods-name">{{ item.goods_name }}</view>
          <view class="goods-price-view">
            <span class="rmb">＄</span>{{ item.price }}
          </view>
        </view>
      </view>
    </view>
    <!-- 商品预览end -->
    <!-- 开盒记录start -->
    <!-- <view class="record-view">
		  <view class="title flex">
		    <text class="title-left">开盒记录</text>
		    <view class="title-right flex" @tap="$refs.morerecord.open()">
		      <text>更多记录</text>
		      <view class="rule-box">
		        <image src="../../static/image/publice/jinruer@2x.png" mode="aspectFit"></image>
		      </view>
		    </view>
		  </view>
		  <view class="record-list-view">
		    <view class="record-item flex" v-for="(item, index) in record3" :key="index">
		      <view class="goods-img-view">
		        <image :src="item.goods_image" mode="aspectFit"></image>
		      </view>
		      <view class="record-item-right">
		        <view class="goods-name-view flex">
		          <text class="username">{{item.nickname}}</text>
		          <text class="txt">开出了</text>
		          <text class="goods-name">{{item.goods_name}}</text>
		        </view>
		        <view class="goods-price-view">
		          参考价 ＄{{item.goods_rmb_price}}
		        </view>
		        <view class="goods-time-view">
		          开盒时间：{{item.create_time}}
		        </view>
		      </view>
		    </view>
		  </view>
		</view> -->
    <!-- 开盒记录end -->
    <!--S  更多记录 -->
    <!-- <uni-popup ref="morerecord" :mask-click="true">
		  <view class="regulation">
				<view class="regulation_close" @click="$refs.morerecord.close()">
					<image src="/static/image/home/guanbi@2x.png" mode=""></image>
				</view>
		  	<view class="regulation_name">开盒记录</view>
				<view class="regulation_main">
					<scroll-view scroll-y="true" class="scroll-view">
						<view class="record-item flex" v-for="(item, index) in boxDetail.record" :key="index">
		          <view class="goods-img-view">
		            <image :src="item.goods_image" mode="aspectFit"></image>
		          </view>
		          <view class="record-item-right">
		            <view class="goods-name-view flex">
		              <text class="username">{{item.nickname}}</text>
		              <text class="txt">开出了</text>
		              <text class="goods-name">{{item.goods_name}}</text>
		            </view>
		            <view class="goods-price-view">
		              参考价 ＄{{item.goods_rmb_price}}
		            </view>
		            <view class="goods-time-view">
		              开盒时间：{{item.create_time}}
		            </view>
		          </view>
		        </view>
					</scroll-view>
				</view>
		  </view>
		</uni-popup> -->
    <!-- 购买须知start -->
    <!-- <view class="buy-rule-view">
		      <view class="title flex">
		        <text class="title-left">购买须知</text>
		      </view>
		      <view class="box-view" v-html="notice_to_buyers"> -->
    <!-- <view class="rule-item">
		          <view class="rule-title">
		            【盲盒规则】
		          </view>
		          <view class="rule-html">
		            这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则
		          </view>
		        </view>
		        <view class="rule-item">
		          <view class="rule-title">
		            【关于配送】
		          </view>
		          <view class="rule-html">
		            这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则
		          </view>
		        </view>
		        <view class="rule-item">
		          <view class="rule-title">
		            【售后问题】
		          </view>
		          <view class="rule-html">
		            这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则这是一段规则
		          </view>
		        </view> -->
    <!--  </view>
		    </view> -->
    <!-- 购买须知end -->
    <!--S  买家须知 -->
    <uni-popup ref="regulation" :mask-click="false">
      <view class="regulation">
        <view class="regulation_close" @click="$refs.regulation.close()">
          <image src="/static/image/home/guanbi@2x.png" mode=""></image>
        </view>
        <view class="regulation_name">{{ $t("买家须知") }}</view>
        <view class="regulation_main">
          <scroll-view scroll-y="true" class="scroll-view">
            <u-parse :content="message"></u-parse>
          </scroll-view>
        </view>
      </view>
    </uni-popup>
    <!--E  买家须知 -->
    <!-- 更多商品详情 -->
    <goods-detail ref="goods-detail"></goods-detail>
  </view>
</template>

<script>
import payment from "@/components/payment.vue";
import showResult from "@/components/show-result.vue";
import recycle from "@/components/recycle.vue";
import goodsDetail from "@/components/goods-detail.vue";
import lunbobox from "@/components/lunbobox.vue";
import prizeFlying from "@/components/prize-flying.vue";
const innerAudioContext = uni.createInnerAudioContext();
export default {
  components: {
    payment,
    showResult,
    recycle,
    goodsDetail,
    lunbobox,
    prizeFlying,
  },
  data() {
    return {
      box_id: null, //盲盒ID
      message: "", //玩法规则
      boxDetail: {}, //盲盒详情
      capital: {
        box: 0,
        coin: 0,
      },
      //金额
      price: 0,
      //数量
      boxNum: 1,
      //开盒类型 0：正式开盒 1：试玩
      type: 0,
      record3: [],
      notice_to_buyers: "",
      
      setting: {
        probability_1: 0,
        probability_2: 0,
        probability_3: 0,
        probability_4: 0,
      },
      rates: [
        {
          value: "",
          // value: '0.1%',
          // name: '传说款',
          tag: "传说",
        },
        {
          value: "",
          // value: '10.9%',
          // name: '史诗款',
          tag: "史诗",
        },
        {
          value: "",
          // value: '22.5%',
          // name: '稀有款',
          tag: "稀有",
        },
        {
          value: "",
          // value: '76.5%',
          // name: '普通款',
          tag: "普通",
        },
      ],
    };
  },
  computed: {
    //订单总金额
    totalPrice() {
      return this.boxNum * this.boxDetail.coin_price;
    },
  },
  created() {
    console.log(this.box_id);
  },
  mounted() {
    this.getBaseInfo();
    let audio = document.getElementById("audio").querySelector("audio");
    audio.play();
  },
  methods: {
    //获取首页信息
    getBaseInfo() {
      this.$api.baseInfo().then((res) => {
        if (res.code === 1) {
          this.setting = res.data.setting;

          this.rates[0]["value"] = this.setting.probability_1 + "%";
          this.rates[1]["value"] = this.setting.probability_2 + "%";
          this.rates[2]["value"] = this.setting.probability_3 + "%";
          this.rates[3]["value"] = this.setting.probability_4 + "%";
        }
      });
    },
    lookImg(url) {
      uni.previewImage({
        urls: [url],
        longPressActions: {
          itemList: [
            this.$t("发送给朋友"),
            this.$t("保存图片"),
            this.$t("收藏"),
          ],
          success: function (data) {
            console.log(
              this.$t("选中了第") +
                (data.tapIndex + 1) +
                this.$t("个按钮,第") +
                (data.index + 1) +
                this.$t("张图片")
            );
          },
          fail: function (err) {
            console.log(err.errMsg);
          },
        },
      });
    },
    //查看详情
    lookDetail(goods) {
      let rate = this.rates.find((item) => item.tag == goods.tag);
      this.$refs["goods-detail"].open(goods, rate);
    },
    changePlay() {
      this.isPlay = !this.isPlay;
      uni.setStorageSync("isPlay", this.isPlay);
      this.isPlay ? innerAudioContext.play() : innerAudioContext.pause();
    },
    //去充值
    recharge() {
      uni.navigateTo({ url: "/pages/me/recharge" });
    },
    //是否点赞
    changeStar() {
      this.$api.star({ box_id: this.box_id }).then((res) => {
        if (res.code === 1) {
          res.data.is_star == 1
            ? (this.boxDetail.is_star = 1)
            : (this.boxDetail.is_star = 0);
          uni.showToast({ title: res.msg });
        }
      });
    },
    //跳转说明
    wfsm() {
      uni.navigateTo({ url: "/pages/index/wfsm" });
    },
    //跳转盒柜
    toMyBox() {
      this.$refs["result-popup"].close();
      uni.navigateTo({ url: "/pages/me/myBox" });
    },
    returnTop() {
      uni.navigateBack();
    },
    //获取详情
    getDetails() {
      this.$api.boxDetail({ box_id: this.box_id }).then((res) => {
        if (res.code === 1) {
          this.boxDetail = res.data;
          this.record3 = res.data.record.slice(0, 3);
          console.log(this.boxDetail);
        }
      });
    },
    //试玩
    haveTry() {
      this.type = 1;
      this.boxNum = 1;
      this.$refs["payment"].open(1, 1);
    },
    //选择数量
    selectNum() {
      this.type = 0;
      this.boxNum = 1;
      this.$refs["num-popup"].open();
    },
    //创建订单
    createOder(num) {
      this.boxNum = num;
      this.$refs["payment"].open(0, this.boxNum);
    },
    //创建订单成功或者试玩返回结果
    closeNumPopup() {
      //关闭数量弹窗
      this.$refs["num-popup"].close();
    },
    //展示结果
    showResult(result) {
      this.$api.boxDetail({box_id: this.box_id}).then(({code,data: boxDetailRes}) => {
      //试玩
      if (this.type == 1) {
        this.$refs["result-popup"].open({ prizeInfo: result.goodsInfo,goodslist:boxDetailRes.goodslist });
        return;
      }
      this.$refs["result-popup"].open({...result,goodslist:boxDetailRes.goodslist});
      })
    },
    //回收
    recycle(prizedata) {
      this.$refs["result-popup"].close();
      this.$refs["recycle"].recycle(prizedata.prizeInfo);
    },
    //玩法规则
    getMessage() {
      this.$api.agreement({ name: "notice_to_buyers" }).then((res) => {
        if (res.code === 1) {
          this.message = res.data.content;
        }
      });
    },
  },
  onUnload() {
    innerAudioContext.pause();
  },
  onLoad({ id }) {
    this.box_id = parseInt(id);
    this.getDetails();
    this.getMessage();
  },
  onShow() {
    this.isPlay = uni.getStorageSync("isPlay");
    this.isPlay ? innerAudioContext.play() : innerAudioContext.pause();
  },
  //刷新金币和盒子数量
  onShow() {
    this.$api.getUserCapital().then(({ code, data }) => {
      if (code == 1) {
        this.capital = data;
      }
    });
    let is_notice = uni.getStorageSync("is_notice");
    uni.removeStorageSync("is_notice");
    if (is_notice == 1) {
      setTimeout(() => {
        uni.showModal({
          title: this.$t("提示"),
          content: this.$t("恭喜，获得10金币"),
          success: function (res) {
            if (res.confirm) {
              console.log("用户点击确定");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
      }, 1000);
    }
  },
};
</script>
<style lang="scss">
.bottom-top {
  height: 50rpx;
  margin: 20rpx 0;
}
.bottom-top .bottom-top-left {
  width: 25%;
  float: left;
  margin-left: 5rpx;
}
.bottom-top .bottom-top-center {
  width: 26%;
  display: block;
  float: left;
  uni-image {
    width: 50rpx;
    height: 50rpx;
    margin: 0 auto;
    float: right;
  }
}
.bottom-top .bottom-top-right {
  float: right;
  margin-right: 5rpx;
}
.kxbz {
  display: block;
  font-size: 35rpx;
  text-align: center;
  margin: 5rpx 0;
}
.details_footer_coll {
  position: absolute;
  box-shadow: 0px 4rpx 6rpx 2rpx #5ca6c8;
  background-color: #fff;
  top: 8vh;
  right: 0;
  display: flex;
  z-index: 99;
  align-items: center;
  border-radius: 100rpx;
  padding: 8rpx 20rpx;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  uni-text {
    color: #5348c9 !important;
    margin-left: 10rpx;
  }
  uni-image {
    width: 40rpx;
  }
}
uni-page-body {
  height: 100%;
}
.play-explain {
  position: absolute;
  box-shadow: 0px 4rpx 6rpx 2rpx #5ca6c8;
  background-color: #fff;
  top: 62vh;
  right: 0;
  display: flex;
  z-index: 99;
  align-items: center;
  border-radius: 100rpx;
  padding: 8rpx 20rpx;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  uni-text {
    color: #5348c9 !important;
    margin-left: 10rpx;
  }
  uni-image {
    width: 40rpx;
  }
}
uni-page-body {
  height: 100%;
}
.bjt {
  background: url(../../static/image/new_home/bgvip.ecb2b3f9.gif);
  background-size: 100% 100%;
}
.index-main {
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  flex-direction: column;
  .light {
    position: absolute;
    top: 0;
  }
  > view {
    display: flex;
    flex-direction: column;
  }
  .top {
    flex: 0.6;
    .title {
      display: flex;
      margin-top: 30rpx;
      height: 130rpx;
      z-index: 19;
      padding: 0 30rpx;
      > view {
        align-items: center;
        font-size: 28rpx;
        image {
          margin-right: 10rpx;
        }
      }
      .oval1,
      .oval {
        position: relative;
        width: 100rpx;
        text-align: center;
        margin: 0 auto;
      }
      .oval span,
      .oval1 span {
        display: block;
        position: absolute;
        bottom: 0rpx;
        font-size: 26rpx;
      }
      index-xg.png .oval1 text {
        color: #4e2ea9 !important;
      }
      .oval text,
      .oval1 text {
        color: #fff !important;
        border-radius: 100rpx;
        width: 80rpx;
        background: #cf0000;
        position: absolute;
        top: 0px;
        right: -50rpx;
      }
      .right {
        position: relative;
        width: 100rpx;
        text-align: center;
        margin: 0 auto;
        span {
          display: block;
          position: absolute;
          bottom: 0rpx;
          font-size: 26rpx;
        }
      }
    }
    .loop-container {
      background: url(../../static/image/new_home/hzbj.gif);
      .loop-image-main {
        margin-top: 20rpx;
        margin-bottom: 20rpx;
        position: relative;
        height: 580rpx;
        .loop-image-warapper {
          z-index: 20;
          position: absolute;
          height: 65%;
          margin-top: 100rpx;
          width: 100%;
          .image-box {
            display: flex;
            justify-content: center;
            height: 100%;
            .box-banner {
              height: 80%;
            }
            .box-banner-0 {
              width: 118px;
              height: 80%;
              left: 50%;
              transform: translateX(-50%);
              position: absolute;
              bottom: 0;
            }
            .box-banner-1 {
              left: 50%;
              transform: translateX(-50%);
              position: absolute;
              top: 0;
              height: 50%;
            }
          }
        }
        .pedestal {
          position: absolute;
          height: 400rpx;
          width: 100%;
          bottom: 0;
          uni-image {
            margin: 0 auto;
          }
        }
        .finger {
          position: absolute;
          z-index: 21;
          height: 140rpx;
          right: 180rpx;
          bottom: 50rpx;
        }
        .prize {
          position: absolute;
          height: 120rpx;
          right: 10rpx;
          bottom: 50rpx;
          z-index: 22;
        }
      }
      .loop-label-warapper {
        height: 180rpx;
        .label-box {
          height: 75%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loop-label {
          transition: 0.2s;
          margin: 0 auto;
          width: 60%;
          height: 65%;
          background-image: linear-gradient(45deg, #89f7fe, #7c66ff);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14rpx;
          text {
            transition: 0.2s;
            color: #ffffff;
            font-size: 28rpx;
            letter-spacing: 2rpx;
            font-weight: 400;
          }
        }
        .label-active {
          .loop-label {
            width: 90%;
            height: 80%;
            background-image: linear-gradient(45deg, #84f8ff, #1030ff);
            text {
              font-size: 42rpx;
              font-weight: bold;
            }
          }
        }
      }
      uni-swiper {
        height: 90%;
      }
    }
  }
  .bottom {
    flex: 0.4;
    .button-container {
      flex: 1;
      display: flex;
      padding-bottom: 10rpx;
      position: fixed;
      bottom: 0px;
      width: 100%;
      z-index: 99;
      background: #fff;
      > view {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
      .center-btn {
        flex: 0.87;
        uni-image {
          width: 75%;
        }
        uni-text {
          position: absolute;
          font-size: 40rpx;
          line-height: 1.1;
          color: #ffffff;
          font-weight: bold;
          font-style: italic;
          letter-spacing: 2px;
        }
      }
      .side-btn {
        flex-direction: column;
        flex: 0.28;
        image {
          width: 60%;
        }
        text {
          margin-top: 14rpx;
          font-size: 28rpx;
          font-weight: bold;
        }
      }
    }
    .price-container {
      text-align: center;
      .price {
        font-size: 36rpx;
        font-weight: bold;
      }
    }
    .look-rule {
      font-size: 30rpx;
      padding-left: 14rpx;
      color: #575757;
    }
    .banner {
      display: flex;
      margin: 20rpx 14rpx;

      > view {
        display: flex;
        font-size: 28rpx;
        image {
          margin-right: 10rpx;
        }
      }
      .center {
        flex: 1;
      }
    }
  }
}
.small-img {
  width: 80rpx;
  margin: 0 auto;
  margin-right: 0px;
}
//选择数量弹窗
.num-popup {
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  padding: 50px 25px 90px 25px;
  .popup-close {
    top: 30rpx;
    right: 30rpx;
    width: 44rpx;
    height: 44rpx;
    position: absolute;
  }
  .num-button-group {
    display: flex;
    justify-content: center;
    gap: 50rpx;
  }
  .num-button {
    position: relative;
    width: 300rpx;
    text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 36rpx;
      font-weight: bold;
      color: #fff;
      text-shadow: 1px 1px 1px black;
    }
  }
  .order-info {
    display: flex;
    > view {
      flex: 1;
      display: flex;
      align-items: center;
    }
    > view {
      font-size: 28rpx;
      font-weight: bold;
    }
    .total-price {
      color: red;
    }
  }
  > view {
    margin-bottom: 30rpx;
  }
}
/deep/ .pay {
  padding-bottom: 100px !important;
}
// 动画
@keyframes updown {
  0% {
    top: 0px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0px;
  }
}
.bottom-top-center uni-image {
  animation: jt 2s infinite;
  -webkit-animation: jt 2s infinite;
}
.loop-image-warapper {
  animation: updown 2s infinite;
  -webkit-animation: updown 2s infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.finger {
  animation: rotate 1.8s infinite;
  -webkit-animation: rotate 1.8s infinite;
}
.details_title {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2021;
  .details_nav {
    width: 100%;
  }
  .details-title_head {
    width: 100%;
    height: 88rpx;
    padding: 0 30rpx;
    background: #ffffff;
    .details_title_return {
      width: 44rpx;
      height: 44rpx;
    }
    .details_title_name {
      width: 100%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 36rpx;
      font-weight: bold;
    }
    .details_title_mp3 {
      width: 44rpx;
      height: 44rpx;
    }
  }
}
.goods-view {
  .title {
    padding: 0 30rpx;
    margin: 30rpx 0 22rpx;
    .title-left {
      font-size: 34rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #171a20;
      line-height: 48rpx;
    }
    .title-right {
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #7a808d;
      line-height: 34rpx;
      .rule-box {
        width: 28rpx;
        height: 28rpx;
        margin-left: 6rpx;
      }
    }
  }
  .rate-view {
    background: #404040;
    padding: 20rpx 0;
    .rate-txt {
      display: inline-block;
      width: 172rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      background: #696969;
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      border-top-right-radius: 30rpx;
    }
    .rate-list {
      background: #4a4a4a;
      margin: 5rpx 20rpx;
      border-radius: 20rpx;
      padding: 10rpx 0;
      justify-content: space-around;
      flex: 1;
      .rate-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .rate-value {
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #0c0d10;
          line-height: 34rpx;
        }
        .rate-name {
          font-size: 24rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 1000;
          line-height: 34rpx;
        }
      }
      .rate-value {
        color: #ffffff !important;
        display: block;
        margin-top: 10rpx;
      }
      .rate-name-0 {
        background: url(../../static/image/new_home/cs.png);
        background-size: 100% 100%;
        height: 80rpx;
        width: 80rpx;
      }
      .rate-name-1 {
        background: url(../../static/image/new_home/ss.png);
        background-size: 100% 100%;
        height: 80rpx;
        width: 80rpx;
      }
      .rate-name-2 {
        background: url(../../static/image/new_home/xy.png);
        background-size: 100% 100%;
        height: 80rpx;
        width: 80rpx;
      }
      .rate-name-3 {
        background: url(../../static/image/new_home/pt.png);
        background-size: 100% 100%;
        height: 80rpx;
        width: 80rpx;
      }
    }
  }
  .goods-list-view {
    margin-bottom: 100rpx;
    flex-wrap: wrap;
    padding: 0 30rpx;
    margin-top: 14rpx;
    &::after {
      content: "";
      width: 220rpx;
    }
    .goods-item {
      width: 100%;
      padding: 20rpx;
      background: #ffffff;
      border-radius: 16rpx;
      position: relative;
      margin-top: 16rpx;
      .goods-tag {
        z-index: 2;
        display: block;
        width: 100rpx;
        text-align: center;
        height: 38rpx;
        line-height: 38rpx;
        color: #fff;
        font-size: 24rpx;
        border-radius: 0 0rpx 16rpx 0rpx;
        &-0 {
          background: url(../../static/image/new_home/cs.png);
          background-size: 100% 100%;
          height: 80rpx;
          width: 80rpx;
        }
        &-1 {
          background: url(../../static/image/new_home/ss.png);
          background-size: 100% 100%;
          height: 80rpx;
          width: 80rpx;
        }
        &-2 {
          background: url(../../static/image/new_home/xy.png);
          background-size: 100% 100%;
          height: 80rpx;
          width: 80rpx;
        }
        &-3 {
          background: url(../../static/image/new_home/pt.png);
          background-size: 100% 100%;
          height: 80rpx;
          width: 80rpx;
        }
      }

      .goods-img-view {
        width: 40%;
        height: 210rpx;
        float: left;
        margin-right: 10rpx;
      }
      .goods-price-view {
        width: 260rpx;
        height: 40rpx;
        font-size: 45rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 500;
        color: #ff495d;
        line-height: 40rpx;
        float: left;
        margin: 26rpx 0;
        display: block;
        .rmb {
          font-size: 28rpx;
        }
      }
      .goods-name {
        width: 58%;
        font-size: 32rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #171a20;
        line-height: 50rpx;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .record-view {
    .title {
      padding: 0 30rpx;
      margin: 30rpx 0 22rpx;
      .title-left {
        font-size: 34rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #171a20;
        line-height: 48rpx;
      }
      .title-right {
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #7a808d;
        line-height: 34rpx;
        .rule-box {
          width: 24rpx;
          height: 24rpx;
          margin-left: 6rpx;
        }
      }
    }
    .record-list-view {
      .record-item {
        margin: 20rpx auto 0;
        width: 690rpx;
        height: 180rpx;
        background: #ffffff;
        border-radius: 16rpx;
        padding: 12rpx 0 10rpx 18rpx;
        .goods-img-view {
          width: 158rpx;
          height: 158rpx;
        }
        .record-item-right {
          flex: 1;
          margin-left: 22rpx;
          line-height: 42rpx;
          .goods-name-view {
            justify-content: flex-start;
            font-size: 24rpx;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #171a20;
            .username,
            .goods-name {
              color: #0091ff;
            }
            .goods-name {
              display: inline-block;
              width: 200rpx;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .txt {
              display: inline-block;
              margin: 0 8rpx;
            }
          }
          .goods-price-view {
            font-size: 24rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ff495d;
          }
          .goods-time-view {
            font-size: 24rpx;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #7a808d;
          }
        }
      }
    }
  }
}
.record-view {
  .title {
    padding: 0 30rpx;
    margin: 30rpx 0 22rpx;
    .title-left {
      font-size: 34rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #171a20;
      line-height: 48rpx;
    }
    .title-right {
      font-size: 24rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #7a808d;
      line-height: 34rpx;
      .rule-box {
        width: 24rpx;
        height: 24rpx;
        margin-left: 6rpx;
      }
    }
  }
  .record-list-view {
    .record-item {
      margin: 20rpx auto 0;
      width: 690rpx;
      height: 180rpx;
      background: #ffffff;
      border-radius: 16rpx;
      padding: 12rpx 0 10rpx 18rpx;
      .goods-img-view {
        width: 158rpx;
        height: 158rpx;
      }
      .record-item-right {
        flex: 1;
        margin-left: 22rpx;
        line-height: 42rpx;
        .goods-name-view {
          justify-content: flex-start;
          font-size: 24rpx;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #171a20;
          .username,
          .goods-name {
            color: #0091ff;
          }
          .goods-name {
            display: inline-block;
            width: 200rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .txt {
            display: inline-block;
            margin: 0 8rpx;
          }
        }
        .goods-price-view {
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ff495d;
        }
        .goods-time-view {
          font-size: 24rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #7a808d;
        }
      }
    }
  }
}
.regulation {
  width: 650rpx;
  height: 900rpx;
  padding: 0 0 0 30rpx;
  background: #ffffff;
  border-radius: 20rpx;
  position: relative;
  .regulation_close {
    position: absolute;
    width: 44rpx;
    height: 44rpx;
    top: 30rpx;
    right: 30rpx;
  }
  .regulation_name {
    padding: 40rpx 0;
    text-align: center;
    font-size: 30rpx;
    font-weight: bold;
  }
  .scroll-view {
    height: 735rpx;
  }
}
.regulation {
  .record-item {
    margin: 20rpx auto 0;
    width: 616rpx;
    height: 180rpx;
    background: #ffffff;
    border-radius: 16rpx;
    .goods-img-view {
      width: 158rpx;
      height: 158rpx;
    }
    .record-item-right {
      flex: 1;
      margin-left: 22rpx;
      line-height: 42rpx;
      .goods-name-view {
        justify-content: flex-start;
        font-size: 24rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #171a20;
        .username,
        .goods-name {
          color: #0091ff;
        }
        .goods-name {
          display: inline-block;
          width: 150rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .txt {
          display: inline-block;
          margin: 0 8rpx;
        }
      }
      .goods-price-view {
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ff495d;
      }
      .goods-time-view {
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #7a808d;
      }
    }
  }
}
.buy-rule-view {
  padding-bottom: 46rpx;
  .title {
    padding: 0 30rpx;
    margin: 30rpx 0 22rpx;
    .title-left {
      font-size: 34rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #171a20;
      line-height: 48rpx;
    }
  }

  .box-view {
    width: 690rpx;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 16rpx;
    padding: 28rpx 0;
    .rule-item {
      .rule-title {
        padding: 0 10rpx;
        font-size: 28rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #2e333f;
      }
      .rule-html {
        padding: 0 26rpx;
        font-size: 24rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #7a808d;
        line-height: 40rpx;
        margin: 12rpx 0 24rpx;
      }
    }
  }
}
.center-btn uni-text {
  -webkit-animation-name: living; /*关键帧名称*/
  -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
  -webkit-animation-iteration-count: infinite; /*动画播放的次数*/
  -webkit-animation-duration: 5s; /*动画所花费的时间*/
}
//放大动画
@keyframes living {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1);
    opacity: 1; /*圆形放大的同时，透明度逐渐减小为0*/
  }
  100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
}
// 动画
@keyframes updown {
  0% {
    top: 0px;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0px;
  }
}
// 动画
@keyframes jt {
  0% {
    top: 0px;
  }
  50% {
    top: 5px;
  }
  100% {
    top: 0px;
  }
}
</style>
