<template>
	<view class="index-main">
		<!-- <view id="translate"></view> -->
			<view id="translate-new" class="skiptranslate">
			<!-- <uni-data-select
					class="skiptranslate"
			      v-model="value"
			      :localdata="range"
			      @change="change"
			    ></uni-data-select> -->
			<picker class="skiptranslate" @change="change" :value="value" :range="range" range-key="text">
				<view class="uni-input skiptranslate">{{range[value] ? range[value].text : '请选择'}} <uni-icons type="bottom"></uni-icons>			</view>
					
			</picker>
		</view>
		
	
		
		
		<!-- 微信提示遮罩 -->
		<!-- <view v-if="isWeiXin" class="shadow">
			<image src="/static/image/tabbar/weixinShadow.png" mode="aspectFit"></image>
		</view> -->
		<!-- --{{$t('index.title')}}-- -->
		<view class="top">
			<view class="title">
				<!-- <view class="play-explain" @tap="$refs.regulation.open()">
					<image class="small-img" src="/static/image/new_home/ckgz.png" mode="widthFix"></image> -->
					<!-- <text>查看规则</text> -->
				<!-- </view> -->
				<view class="play-explain_1" @tap="$refs.regulation_1.open()">
					<image class="small-img" src="/static/image/tabbar/wodeyixuanzhong@2x1.png" mode="widthFix"></image>
					<text>买家须知</text>
				</view>
				
				<view class="play-explain_peizhi" @click="haveTry()">
					<image class="small-img" src="/static/image/new_home/swmhan.png" mode="widthFix"></image>
					<text>免费试玩</text>
				</view>
				<view class="kf" @click="zxkf(kefuurl)">
					<image class="small-img" src="/static/image/new_home/kf.png" mode="widthFix"></image>
				</view>
				<!-- <view class="details_title_mp3" @click="changePlay">
					<image :class="['bjtb', isPlay && 'run']" :src="isPlay ?  '/static/image/home/bofang@2x.png' : '/static/image/home/guanbiyinyue@2x.png' " mode="widthFix"></image>
				</view> -->
			</view>
			<view class="left-cd">
				<!-- <view class="oval" @click="toRecharge()">
					<image class="small-img" src="/static/image/new_home/yecz.png" mode="widthFix"></image>
					<span>金币充值</span>
				</view> -->
			<!-- 	<view class="oval1" @click="toMyBox()">
					<image class="small-img" src="/static/image/new_home/tbxg.png" mode="widthFix"></image> -->
					<!-- <span>物品盒柜</span> -->
				<!-- </view> -->
				<!-- <view class="right" @click="wfashuiming()">
					<image class="small-img" src="/static/image/new_home/wfsm.png" mode="widthFix"></image> -->
					<!-- <span>玩法说明</span> -->
				<!-- </view> -->
			</view>
			<lunbobox></lunbobox>
			 <view class="loop-container">
				<!-- 图片轮播主区域 -->
				<view class="loop-image-main">
					<view class="box-image-bj"></view><prize-flying v-if="currBox" :key="`flying-${flyingKey}`" :box-id="currBox.box_id"></prize-flying>
					<!-- 图片轮播 -->
					<image class="arrow arrow-left" src="/static/image/new_home/arrow-left.png" mode="widthFix" @click="prev"></image>
					<image class="arrow arrow-right" src="/static/image/new_home/arrow-right.png" mode="widthFix" @click="next"></image>
					<view class="loop-image-warapper">
						<swiper class="swiper" circular :current="loopData.current" @change="loopItemChange($event.detail.current)" width="100%">
							<template v-for="(item, index) in loopData.list">
								<swiper-item :key="index">
									<view :class="['image-box']">
										<template v-for="(box_banner, index) in item.box_banner_images">
											<image :class="[item.box_banner_images.length > 1 ? `box-banner-${index}` : 'box-banner']" :src="box_banner" mode="heightFix"
													@click="goMessage(item, 0)"
											></image>
										</template>
									</view>
								</swiper-item>
							</template>
						</swiper>
					</view>
					<!-- 底座 -->
					<!-- <view class="pedestal" >
						<image src="/static/image/new_home/ro.png" mode="heightFix"></image>
					</view> -->
					<view class="dizuobox">
						<image class="dizuo" src="/static/image/new_home/ro.png" mode="widthFix"></image>
						<!-- <text class="price">＄{{price}}.00{{$t('元/个')}}</text> -->
					<view class="price-container">
						<text class="price">＄{{price}}.00{{$t('元/个')}}</text>
					</view>
					</view>
					<!-- 手指 -->
					<view class="finger">
						<image src="/static/image/new_home/sz.png" mode="heightFix"></image>
					</view>
					<!-- 盲盒奖品 -->
					<!-- <view class="prize" @click="goCurrMessage()">
						<image src="/h5/static/image/new_home/mhjp.png" mode="heightFix"></image>
					</view> -->
				</view>
				<!-- 下方价格 -->
				<!-- <view class="price-container">
					<text class="price">＄{{price}}.00{{$t('元/个')}}</text>
				</view> -->
				<!-- 文字轮播 -->
				<!-- <view class="loop-label-warapper">
					<swiper class="swiper" :indicator-dots="true" :previous-margin="loopData.margin" :next-margin="loopData.margin" 
						 :current="loopData.current" @change="loopItemChange($event.detail.current)">
						<template v-for="(item, index) in loopData.list">
							<swiper-item :key="index" :class="[loopData.current == index && 'label-active']">
								<view :class="['label-box']" @click="loopItemChange(index)">
									<view :class="['loop-label']">
										<text>{{item.box_name}}</text>
									</view>
								</view>
							</swiper-item>
						</template>
					</swiper>
				</view> -->
				<view class="home_swiper">
					
					<view class="home_swiper_ul flex">
						<view class="home_swiper_li flexs" v-for="(item,index) in iconList" :key="index">
							<image :src="item.image" mode=""></image>
							<text>{{ item.name }}</text>
						</view>
					</view>
					
				</view>
				<!-- 图片文字轮播 -->
				<view class="loop-label-warapper">
					<swiper class="swiper" circular :indicator-dots="true" :previous-margin="loopData.margin" :next-margin="loopData.margin" 
						 :current="loopData.current" @change="loopItemChange($event.detail.current)">
						<template v-for="(item, index) in loopData.list">
							<swiper-item :key="index" :class="[loopData.current == index && 'label-active']">
								<view :class="['label-box']" @click="loopItemChange(index)">
									<view :class="['loop-image-label']">
										<image :src="item.box_foot_images" mode="aspectFit"></image>
										<text>{{item.box_name}}</text>
									</view>
								</view>
							</swiper-item>
						</template>
					</swiper>
				</view>
			</view>
		</view>
		<!-- 下半部分 -->
		<view class="bottom">
			<view>
				<!-- 下方按钮区 -->
				<view class="button-container">
					<!-- <view class="side-btn" @click="haveTry()">
						<image src="/static/image/new_home/swmhan.png" mode="widthFix"></image> -->
						<!-- <text>试玩盲盒</text> -->
				<!-- 	</view> -->
					<view class="center-btn" @click="selectNum()">
						<image src="/static/image/new_home/btn-1.png" mode="widthFix"></image>
						<text>{{$t('立即开箱')}}</text>
					</view>
					<!-- <view class="side-btn" @click="toMore()">
						<image src="/static/image/new_home/gdmhan.png" mode="widthFix"></image>
						<text>更多盲盒</text>
					</view> -->
				</view>
			</view>
			<!-- <view>
				<text class="look-rule" @click="toHelp()">查看规则</text>
			</view> -->
			<!-- <view class="banner">
				<view>
					<image class="small-img" src="/h5/static/image/new_home/dbzj.png" mode="heightFix"></image>
					每盒100%中奖
				</view>
				<view class="center">
					<image class="small-img" src="/h5/static/image/new_home/myfh.png" mode="heightFix"></image>
					满意发货
				</view>
				<view>
					<image class="small-img" src="/h5/static/image/new_home/hs.png" mode="heightFix"></image>
					不满意回收
				</view>
			</view> -->
		</view>
		<uni-popup ref="num-popup" type="bottom" :mask-click="false">
			<view class="num-popup">
				<view class="popup-close" @click="closeNumPopup">
					<image src="/static/image/home/guanbi@2x.png" mode=""></image>
				</view>
				<view class="num-button-group">
					<view class="num-button" @click="createOder(1)">
						<image src="/h5/static/image/new_home/btn-1.png" mode="widthFix"></image>
						<text>{{$t('一发入魂')}}</text>
					</view>
				</view>
				<view class="num-button-group">
					<view class="num-button" @click="createOder(5)">
						<image src="/h5/static/image/new_home/btn-2.png" mode="widthFix"></image>
						<text>{{$t('五连绝世')}}</text>
					</view>
				</view>
				<view class="num-button-group">
					<view class="num-button" @click="createOder(9)">
						<image src="/h5/static/image/new_home/btn-3.png" mode="widthFix"></image>
						<text>{{$t('九连更稳')}}</text>
					</view>
				</view>
				<!-- <view class="num-button-group">
					<view class="num-button"@click="createOder(5)">
						<image src="/h5/static/image/new_home/btn-3.png" mode="widthFix"></image>
						<text>{{$t('五连绝世')}}</text>
					</view>
					<view class="num-button" @click="createOder(9)">
						<image src="/h5/static/image/new_home/btn-2.png" mode="widthFix"></image>
						<text>{{$t('九连更稳')}}</text>
					</view>
				</view> -->
				<view class="order-info">
					<view>
						{{$t('开盒数量')}}：{{ boxNum }}
					</view>
					<view class="total-price">
						{{$t('订单金额')}}：＄{{ totalPrice }}
					</view>
				</view>
				<view class="popup-btn">
					<!-- <button type="primary" @click="$refs['payment'].open(0, boxNum)">创建订单</button> -->
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="regulation" :mask-click="false">
		  <view class="regulation">
				<view class="regulation_close" @click="$refs.regulation.close()">
					<image src="/static/image/home/guanbi@2x.png" mode=""></image>
				</view>
		  	<view class="regulation_name">{{$t('玩法规则')}}</view>
				<view class="regulation_main">
					<scroll-view scroll-y="true" class="scroll-view">
						<u-parse :content="message" ></u-parse>
					</scroll-view>
				</view>
		  </view>
		</uni-popup>
		<uni-popup ref="regulation_1" :mask-click="false">
		  <view class="regulation_1">
				<view class="regulation_close" @click="$refs.regulation_1.close()">
					<image src="/static/image/home/guanbi@2x.png" mode=""></image>
				</view>
		  	<view class="regulation_name">{{$t('买家须知')}}</view>
				<view class="regulation_main">
					<scroll-view scroll-y="true" class="scroll-view">
						<u-parse :content="mjxz" ></u-parse>
					</scroll-view>
				</view>
		  </view>
		</uni-popup>
		<payment ref="payment" :box-id="currBox && currBox.box_id" :box-num="boxNum" :type="type" pay-page="index"
			@create-success="closeNumPopup" @show-result="showResult"></payment>
	<!-- 	<show-result ref="result-popup" :num="boxNum" @accept="toMyBox()" @recycle="recycle" :type="type"></show-result> -->
		<show-result :key="resultKey" ref="result-popup" :num="boxNum" @accept="toMyBox()" @recycle="recycle" :type="type" @close="resultKey++"></show-result>
		<recycle ref="recycle"></recycle>
	</view>
</template>

<script>
	import payment from "@/components/payment.vue"
	import showResult from "@/components/show-result.vue"
	import recycle from "@/components/recycle.vue"
	import lunbobox from "@/components/lunbobox.vue"
	import prizeFlying from "@/components/prize-flying.vue"
	import LAN_CONFIG from "@/components/v-tabs/lan-config.js";
	// const innerAudioContext = uni.createInnerAudioContext();
	// 	innerAudioContext.autoplay = true;
	// 	innerAudioContext.loop = true;
	// 	innerAudioContext.src = '/static/image/home/bj.mp3';
		
	export default {
		components: {
			payment,
			showResult,
			recycle,
			lunbobox,
			prizeFlying,
		},
	    data() {
	        return {
				message:'',//玩法规则
				mjxz:'',//买家须知
				loopData: {
					//标签轮播左右边距
					margin: "260rpx",
					//当前选中盒子下标
					current: 0,
					//盒子分类列表
					list: []
				},
				capital: {
					box: 0,
					coin: 0
				},
				//金额
				price: 0,
				//数量
				boxNum: 1,
				//开盒类型 0：正式开盒 1：试玩
				type: 0,
				isPlay:false,
				resultKey: 0,
				flyingKey:0,
				kefuurl:'',
				isWeiXin: isWeiXin(),//是否为微信
			   value: LAN_CONFIG.local(),
			   range: LAN_CONFIG.options,
			   iconList:[
			   	{
			   		image:'/static/image/home/zhengpinbaozheng@2x.png',
			   		name:this.$t('官方正品')
			   	},
			   	{
			   		image:'/static/image/home/yijianhuishou@2x.png',
			   		name:this.$t('真实概率')
			   	},
			   	{
			   		image:'/static/image/home/youhui@2x.png',
			   		name:this.$t('极速发货 ')
			   	},
				{
					image:'/static/image/home/youhui@2x.png',
					name:this.$t('100%中奖 ')
				}
			   ],
	        };
	    },
		created(){	
			const oScript = document.createElement('script');
			oScript.type = 'text/javascript';
			oScript.src = 'https://res.zvo.cn/translate/translate.js';
			document.body.appendChild(oScript);
			// setTimeout(() => {
			// 	this.$refs.regulation.open();
			// 	this.exectLan()
			// 	const ele = document.getElementsByClassName('uni-picker-container')[0];
			// 	// console.log(Array.from(ele.classList), '292--');
			// 	const arr = Array.from(ele.classList);
			// 	arr.push('skiptranslate');
			// 	ele.setAttribute("class", arr.join(' ')); 
			// }, 300)
			// 找个类名
			// console.log(ele, '294-------')
			this.$api.getUserCapital().then(({code, data}) => {
				if(code == 1){
					this.capital = data
				}
			})
			//渲染分类列表
			this.getCategoryList()
			this.getMessage()
			this.getpeizhi()
		},
		mounted(){
			setTimeout(() => {
				this.haveTry()
			},500)
			
		},
		computed:{
			//当前选中盒子
			currBox(){
				let boxList = this.loopData.list
				if(!boxList || boxList.length < 1){
					return null
				}
				return boxList[this.loopData.current]
			},		
			//当前盒子图片
			currBoxImg(){
			    if(!this.currBox){
			     return null
			    }
			    let imgs = this.currBox.box_banner_images
			    if(!imgs || imgs.length < 1){
			     return null
			    }
			    return imgs[0]
			   },
			//订单总金额
			totalPrice(){
				return this.boxNum * this.price
			},
			//第一个盒子
			isFirstBox(){
				return this.loopData.current == 0
			},
			//最后一个盒子
			isLastBox(){
				return this.loopData.current == (this.loopData.list.length - 1)
			},
		},
	    methods: {
			//轮播图变更
	        loopItemChange(index) {
				if(this.loopData.current == index){
					return
				}
				this.loopData.current = index
				this.price = this.loopData.list[index].coin_price
				this.flyingKey++
	        },
			change(e) {
				let value = 0;
			      if (!isNaN(e.detail.value)) {value = e.detail.value;}
				  this.value = value;
				  const e1 = LAN_CONFIG.options[this.value].value;
				 console.log("e:", value, e.detail.value, e1,LAN_CONFIG);
				  document.cookie=`googtrans=/zh-CN/${e1};domain=${document.domain.split('.').slice(-2).join('.')};path=/;`;
				document.cookie=`googtrans=/zh-CN/${e1};path=/;`;
				  global.location.reload();
			    },
			//轮播图上一个
			prev(){
				let index 
				if(this.isFirstBox) {
					index  = this.loopData.list.length - 1
				} else {
					index = this.loopData.current - 1
				}
				this.loopItemChange(index)
			},
			//轮播图下一个
			next(){
				let index
				if(this.isLastBox) {
					index = 0
				} else {
					index = this.loopData.current + 1
				}
				this.loopItemChange(index)
			},
			//分类列表
			getCategoryList () {
				this.$api.recommend({page: 1, pagesize: 10}).then(res=>{
					if (res.code === 1) {
						let categoryList = res.data.data.map(item => {
							item.box_banner_images = item.box_banner_images.split(',')
							return item
						})
						this.loopData.list = categoryList
						let currIndex = Math.floor(categoryList.length / 2)
						currIndex = 2
						this.loopData.current = currIndex
						this.price = categoryList[currIndex].coin_price
					}
				})
			},
			//跳转盒柜
			toMyBox () {
				this.$refs['result-popup'].close()
				uni.navigateTo({url: '/pages/me/myBox'})
			},
			//玩法说明
			wfashuiming: () => uni.navigateTo({url: '/pages/index/wfsm'}),
			//跳转充值
			toRecharge: () => uni.navigateTo({url: '/pages/me/recharge'}),
			//跳转客服
			zxkf: (kefuurl) => 
			uni.navigateTo({
			    url: '/pages/public/web-view?title=go&url='+ kefuurl
			}),
			
			//跳转说明
			toHelp: () => uni.navigateTo({url: '/pages/index/help'}),
			//玩法规则
			getMessage () {
				this.$api.agreement({name:'play_rule'}).then(res=>{
					if (res.code === 1) {
						this.message = res.data.content
					}
				})
				this.$api.agreement({name:'notice_to_buyers'}).then(res=>{
					if (res.code === 1) {
						this.mjxz = res.data.content
					}
				})
			},
			getpeizhi () {
				this.$api.peizhi({}).then(res=>{
					if (res.code === 1) {
						this.kefuurl = res.data.data.kfurl
						
					}
				})
				
			},
			//跳转更多盲盒
			toMore: () => uni.navigateTo({url: '/pages/index/more'}),
			//音乐播放
			changePlay () {
				this.isPlay = !this.isPlay
				uni.setStorageSync('isPlay',this.isPlay)
				this.isPlay ? innerAudioContext.play() : innerAudioContext.pause()
			},
			//跳转内页
			goMessage (item, type) {
				uni.navigateTo({url:'/pages/index/details?id=' + item.box_id + '&type=' + type})
			},
			//跳转当前分类内页
			goCurrMessage () {
				this.goMessage(this.currBox, 0)
			},
			//试玩
			haveTry () {
				this.type = 1
				this.boxNum = 1
				this.$refs['payment'].open(1, 1)
			},
			//选择数量
			selectNum () {
				this.type = 0
				this.boxNum = 1
				this.$refs['num-popup'].open()
			},
			//创建订单
			createOder (num) {
				this.boxNum = num
				this.$refs['payment'].open(0, this.boxNum)
			},
			//创建订单成功或者试玩返回结果
			closeNumPopup () {
				//关闭数量弹窗
				this.$refs['num-popup'].close()
			},
			//展示结果
			   showResult(result){
					this.$api.boxDetail({box_id: this.currBox.box_id}).then(({code,data: boxDetailRes}) => {
						if (code===1){
							//试玩
							if(this.type == 1){
								this.$refs['result-popup'].open({prizeInfo: result.goodsInfo, boxImg: this.currBoxImg, goodslist:boxDetailRes.goodslist })
								return
							}
							this.$refs['result-popup'].open({...result, boxImg: this.currBoxImg})
							}
						
					})
			    
			   },
			//回收
			recycle(prizedata){
				this.$refs['result-popup'].close()
				this.$refs['recycle'].recycle(prizedata.prizeInfo)
			},
			// 执行翻译初始化操作
			exectLan() {
				if (global.translate && global.translate.selectLanguageTag) {
					const e1 = LAN_CONFIG.options[LAN_CONFIG.local()].value;
					global.translate.selectLanguageTag.languages = LAN_CONFIG.options.map((i)=>i.value).join(',');
					document.cookie=`googtrans=/zh-CN/${e1};domain=${document.domain.split('.').slice(-2).join('.')}path=/`;
					document.cookie=`googtrans=/zh-CN/${e1};path=/`;
					global.translate?.execute();
				}
			}
	    },
		onLoad({sharecode, token, is_channel, out_trade_no}) {
			if (sharecode) {
				uni.setStorageSync('sharecode',sharecode)
			}
			if (is_channel) {
				uni.setStorageSync('is_channel',is_channel)
			}
			if (token) {
				uni.setStorageSync('token',token)
			}
			//存在支付订单id
			if(out_trade_no){
				let params = {out_trade_no, order_id: uni.getStorageSync('order_id')}
				this.$api.openByOrderTrade(params).then(({code, data}) => {
					console.log("🚀 -- file: index.vue:575 -- this.$api.openByOrderTrade -- data:", data)
					if (code === 1) {
						//展示结果
						this.showResult(data.prize)
					}
				})
			}
		},
		onShow () {
			
			//刷新金币和盒子数量
			this.$api.getUserCapital().then(({code, data}) => {
				if(code == 1){
					this.capital = data
				}
			})
			let is_notice = uni.getStorageSync('is_notice')
			uni.removeStorageSync('is_notice');
			if (is_notice == 1) {
			setTimeout(() => {
			  uni.showModal({
				title: this.$t('提示'),
				content: this.$t('恭喜，获得10金币'),
				success: function (res) {
				  if (res.confirm) {
					  console.log('用户点击确定');
				  } else if (res.cancel) {
					  console.log('用户点击取消');
				  }
				}
			  })
			}, 1000)
		  }
		},
	}
	//判断是否是微信浏览器的函数
	function isWeiXin(){
	  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
	  var ua = window.navigator.userAgent.toLowerCase();
	  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
	  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		return true;
	  }else{
		return false;
	  }
	}
</script>

<style lang="scss">
	.home_swiper {
		margin-top: 15%;
		padding: 0 30rpx;
		background: #FFFFFF;
		.swiper {
			height: 266rpx;
			image {
				border-radius: 20rpx;
			}
		}
		.home_swiper_li {
			height: 64rpx;
			image {
				width: 34rpx;
				height: 34rpx;
				margin-right: 10rpx;
			}
			text {
				color: #666666;
			}
		}
		.home_swiper_nav_li {
			height: 150rpx;
			flex-direction: column;
			image {
				width: 70rpx;
				height: 70rpx;
				margin-bottom: 10rpx;
			}
			text {
				color: #000000;
				font-size: 26rpx;
			}
		}
	}
	.dizuobox {
		text-align: center;
		position: absolute;
		left: 0;
		bottom: -20rpx;
		
		width: 750rpx;
	}
	.dizuobox .price {
		position: absolute;
		
		left: 50rpx;
		width: 650rpx;
		text-align: center;
		z-index: 10;
		font-family: "myfont";
		font-size: 28rpx;
	}
	.dizuobox .price .num {
		font-size: 40rpx;
	}
	
	/deep/ .uni-swiper-dots{
	  display: none;
	 }
	.left-cd{
		width: 120rpx;
		z-index: 99;
		position: absolute;
		top: 165rpx;
		.oval span,.oval1 span,.right span{
			text-align: center;
			display: block;
			color: #FFFFFF;
			margin: 10rpx 0rpx;
		}
	}
	.oval1{
		margin: 20rpx 0;
	}
	uni-page-body{
		height: 100%;
	}
	.regulation,.regulation_1 {
		width: 650rpx;
		height: 900rpx;
		padding: 0 0 0 30rpx;
		background: #FFFFFF;
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
	.play-explain{
		position: absolute;
		top: 52vh;
		right: 40rpx;
		display: flex;
		z-index: 99;
		uni-image{
			width: 150rpx;
		}
	}
	.play-explain_1{
		position: absolute;
		box-shadow: 0px 4rpx 6rpx 2rpx #5ca6c8;
		background-color: #fff;
		margin-top: 98%;
		right: 0;
		display: flex;
		z-index: 99;
		align-items: center;
		border-radius: 100rpx;
		padding: 8rpx 20rpx;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		uni-text{
			color: #5348C9 !important;
			margin-left:  10rpx;
		}
		uni-image{
			width: 40rpx;
		}
	}
	.play-explain_peizhi{
		position: absolute;
		box-shadow: 0px 4rpx 6rpx 2rpx #5ca6c8;
		background-color: #fff;
		margin-top: 98%;
		left: 0;
		display: flex;
		z-index: 99;
		align-items: center;
		border-radius: 100rpx;
		padding: 8rpx 20rpx;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		uni-text{
			color: #5348C9 !important;
			margin-left:  10rpx;
		}
		uni-image{
			width: 40rpx;
		}
	}
	.kf{
		position: absolute;
		box-shadow: 0px 4rpx 6rpx 2rpx #5ca6c8;
		background-color: #fff;
		top: 34vh;
		left: 0;
		display: flex;
		z-index: 99;
		align-items: center;
		border-radius: 100rpx;
		padding: 8rpx 20rpx;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		uni-text{
			color: #5348C9 !important;
			margin-left:  10rpx;
		}
		uni-image{
			width: 40rpx;
		}
	}
	.details_title_mp3{
		position: absolute;
		box-shadow: 0px 4rpx 6rpx 2rpx #5ca6c8;
		background-color: #ffffff45;
		top: 3vh;
		right: 50rpx;
		display: flex;
		z-index: 99;
		align-items: center;
		border-radius: 200rpx;
		padding: 5rpx;
		uni-text{
			color: #5348C9 !important;
			margin-left:  10rpx;
		}
		uni-image{
			width: 40rpx;
		}
	}

	.index-main{
		height: 130%;
		background-image: url(../../static/image/new_home/bgvip.ecb2b3f9.gif);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		.light{
			position: absolute;
			top: 0;
		}
		> view{
			display: flex;
			flex-direction: column;
		}
		#translate {
			display: none;
		}
		#translate-new {
			padding-right: 70%;
			position: relative;
			    z-index: 99999;
			    padding-bottom: 16rpx;
				.uni-input {
					font-weight: 500;
					background-color: rgba(255, 255, 255, 0.5);
					height: 50rpx;
					text-align: center;
					line-height: 24px;
					color: black;
					display: flex;
					color: black;
					align-items: center;
					justify-content: space-evenly;
				}
					
				
		}
		
		
		.top{
			flex: 0.6;
			.loop-container{
				background: url(../../static/image/new_home/hzbj.gif);
				.loop-image-main{
					margin-bottom: 20rpx;
					position: relative;
					height: 452rpx;
					margin-top: 100rpx;
					.arrow{
						width: 60rpx;
						position: absolute;
						top: 50%;
						transform: translateY(-20%);
						z-index: 99;
						&.arrow-left{
							left: 80rpx;
						}
						&.arrow-right{
							right: 80rpx;
						}
					}
				
					.loop-image-warapper{
						position: absolute;
						height: 100%;
						width: 100%;
						z-index: 25;
						.image-box{
							display: flex;
							justify-content: center;
							height: 100%;
							.box-banner{
								height: 70%;
							}
							.box-banner-0{
								width: 118px;
								height: 60%;
								position: absolute;
								bottom: 0;
							}
							.box-banner-1{
								position: absolute;
								top: 60px;
								height: 50%;
							}
						}
					}
					.pedestal{
						position: absolute;
						height: 400rpx;
						width: 50%;
						bottom: 0;
						uni-image{
							margin: 0 auto;
						}
					}
					.finger{
						position: absolute;
						z-index: 26;
						height: 140rpx;
						right: 180rpx;
						bottom: 60rpx;
					}
					.prize{
						position: absolute;
						height: 120rpx;
						right: 10rpx;
						bottom: 50rpx;
						z-index: 22;
					}
				}
				.loop-label-warapper{
					height: 260rpx;
					margin-top: 18rpx;
					.label-box{
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						    box-shadow: 3px 0px 0px 3px #45bfff;
					}
					.swiper{
						// background: url(../../static/image/new_home/text-bj.png);
						background-size: 100% 100%;
					}
					.loop-label{
						transition: .2s;
						margin: 0 auto;
						width: 80%;
						height: 80%;
						background-repeat: no-repeat;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 14rpx;
						text{
							transition: .2s;
							color: #FFFFFF;
							font-size: 28rpx;
							letter-spacing: 2rpx;
							font-weight: 600;
							color: #94a9ee;
						}
					}
					.loop-image-label{
						transition: .3s;
						background: linear-gradient(white, 80%, lightgrey);
						padding: 2px;
						border-radius: 7px;
						height: 95%;
						width: 210rpx;
						text-align: center;
						uni-image{
							height: 75%;
							margin-bottom: 5%;
						}
						uni-text{
							font-size: 26rpx;
							font-weight: bold;
						}
					}
					.label-active{
						.loop-label{
							width: 80%;
							height: 80%;   
							text{
								font-size: 42rpx;
								font-weight: bold;
								color: #7494fe;
							}
						}
						.loop-image-label{
							border: 2px solid #45bfff;
						}
					}
				}
				uni-swiper{
					height: 100%;
				}
			}
		}
		.bottom{
			flex: 0.4;
			.button-container{
				flex: 1;
				margin-top: 20rpx;
				display: flex;
				> view{
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.center-btn{
					flex: 0.87;
					margin-left: 10%;
					uni-image{
						width: 90%;
						
					}
					uni-text{
						text-align: center;
						position: absolute;
						font-size: 50rpx;
						line-height: 1.1;
						color: #FFFFFF;
						font-weight: bold;
						font-style: italic;
						letter-spacing: 2px;
					}
				}
				.side-btn{
					flex-direction: column;
					flex: 0.28;
					image{
						width: 60%;
					}
					text{
						font-family: ZT;
						margin-top: 14rpx;
						font-size: 28rpx;
						font-weight: bold;
					}
				}
			   }
			}
			.price-container{
				text-align: center;
				.price{
					font-size: 36rpx;
					font-weight: bold;
					font-style: italic;
					letter-spacing: 5rpx;
					bottom: 30rpx;
				}
			.look-rule{
				font-size: 30rpx;
				padding-left: 14rpx;
				color: #575757;
			}
			.banner{
				display: flex;
				margin: 20rpx 14rpx;
				
				> view{
					display: flex;
					font-size: 28rpx;
					image{
						margin-right: 10rpx;
					}
				}
				.center{
					flex: 1;
				}
			}
		}
	}
	.small-img{
		width: 80rpx;
		margin: 0 auto;
	
	}
	//选择数量弹窗
	.num-popup{
		background: #FFFFFF;
		border-radius: 10px 10px 0px 0px;
		padding: 50px 25px 90px 25px;
		.popup-close {
			top: 30rpx;
			right: 30rpx;
			width: 44rpx;
			height: 44rpx;
			position: absolute;
		}
		.num-button-group{
			text-align: center;
			display: flex;
			justify-content: center;
			gap: 50rpx;
		}
		.num-button{
			position: relative;
			width: 500rpx;
			text{
				width: 400rpx;
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
		.order-info{
			display: flex;
			>view{
				flex: 1;
				display: flex;
				align-items: center;
			}
			>view{
				font-size: 28rpx;
				font-weight: bold;
			}
			.total-price{
				color: red;
			}
		}
		>view{
			margin-bottom: 30rpx;
		}
	}
	/deep/ .pay{
		padding-bottom: 100px !important;
	}
	.center-btn uni-text{
		-webkit-animation-name: living; /*关键帧名称*/
		-webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
		-webkit-animation-iteration-count: infinite;  /*动画播放的次数*/
		-webkit-animation-duration: 5s; /*动画所花费的时间*/
	}
	.details_title_mp3 .run{
		animation: donut-spin 1.2s linear infinite;
	}
	// 动画
	@keyframes updown{
		0%   {top:0px;}
		50%  {top:10px;}
		100% {top:0px;}
	}
	//放大动画
	@keyframes living {
            0%{
                transform: scale(0.8);
                opacity: 0.8;  
            }
            50%{
                transform: scale(1);  
                opacity: 1;   /*圆形放大的同时，透明度逐渐减小为0*/
            }
            100%{
                transform: scale(0.8);
                opacity: 0.8;
            }
        }
	//音乐背景旋转
		@keyframes donut-spin {
		   0% {
		     transform: rotate(0deg);
		   }
		 
		   100% {
		     transform: rotate(360deg);
		   }
}
	.loop-image-warapper{
		animation: updown 2s infinite;
		-webkit-animation: updown 2s infinite;
	}
	@keyframes rotate{
		0%{
		    transform: scale(0.7);
		}
		50%{
		    transform: scale(0.8);  
		}
		100%{
		    transform: scale(0.7);
		}
	}
	.finger{
		animation: rotate 2.8s infinite;
		-webkit-animation: rotate 2.8s infinite;
	}
	.shadow{
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index: 99999999;
		uni-image{
			height: 480rpx !important;
		}
	}
	.box-image-bj{
	background: url(../../static/image/new_home/box-images-bj.png);
	background-size: 100% 100%;
	height: 500rpx;
	width: 380rpx;
	margin: 0 auto;
	position: relative;
	top: -260rpx;
	}
</style>
