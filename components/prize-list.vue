

<template>
  <div class="CardList small" >
    <div v-for="i of 4" class="CardItem">
      <div class="box">
        <div class="tag">
          <image
            class="tag-img"
            src="/pagesA/static/tag-1.png"
          ></image>
          <div class="text">
            普通
          </div>
        </div>
        <div class="img-wrap">
          <image mode="aspectFit" class="img" src="https://dxxshoptest.oss-cn-shenzhen.aliyuncs.com/backManager/bd08d463-6610-4066-a9cc-d763e522094a.png"></image>
        </div>
        <div class="name">
          小米充电器头30W快充10s红米k40k30i闪充33w瓦note9K20cc9pro手机18w头6正品7数据线科瑞信原装27w8typec
        </div>
      </div>
      <div class="bott">
        <div class="label">一键分解</div>
        <div class="val">
          <image class="ico" src="/static/image/result/icon-qingtuan.png"></image>
          1811.9
        </div>
      </div>
    </div>
  </div>

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
$CardItemWidth:115px;
$CardItemHeight:135px;
$CardIListGap:10px;

$BottomMarginTop:8px;
$CardItemBorderRadius:5px;
$ImgWidth:80px;
$ImgHeight:86px;
$ImgMarginTop:10px;
$NameTop:10px;
$NameLeft:10px;

$TagWidth:48px;
$TagHeight:48px;
$TagLeft:-2px;
$TagTop:-2px;
$borderWidth:1px;
.CardList {
  --CardItemWidth:#{$CardItemWidth};
  --CardItemHeight:#{$CardItemHeight};
  --CardIListGap:#{$CardIListGap};
  
  --BottomMarginTop:#{$BottomMarginTop};
  --CardItemBorderRadius:#{$CardItemBorderRadius};
  --ImgWidth:#{$ImgWidth};
  --ImgHeight:#{$ImgHeight};
  --ImgMarginTop:#{$ImgMarginTop};
  --NameTop:#{$NameTop};
  --NameLeft:#{$NameLeft};

  --TagWidth:#{$TagWidth};
  --TagHeight:#{$TagHeight};
  --TagLeft:#{$TagLeft};
  --TagTop:#{$TagTop};

  --borderWidth:#{$borderWidth};

  display: flex;
  gap: var(--CardIListGap);
  flex-wrap: wrap;
  justify-content: center;
}

$smallScale:0.7;
.CardList.small {
  --CardItemWidth:#{$CardItemWidth*$smallScale};
  --CardItemHeight:#{$CardItemHeight*$smallScale};
  --CardIListGap:#{$CardIListGap*$smallScale};
  
  --BottomMarginTop:#{$BottomMarginTop*$smallScale};
  --CardItemBorderRadius:#{$CardItemBorderRadius*$smallScale};
  --ImgWidth:#{$ImgWidth*$smallScale};
  --ImgHeight:#{$ImgHeight*$smallScale};
  --ImgMarginTop:#{$ImgMarginTop*$smallScale};
  --NameTop:#{$NameTop*$smallScale};
  --NameLeft:#{$NameLeft*$smallScale};

  --TagWidth:#{$TagWidth*$smallScale};
  --TagHeight:#{$TagHeight*$smallScale};
  --TagLeft:#{$TagLeft*$smallScale};
  --TagTop:#{$TagTop*$smallScale};

  --borderWidth:#{$borderWidth*$smallScale};
}

.CardItem {
  text-align: center;

  .box {
    width: var(--CardItemWidth);
    height: var(--CardItemHeight);
    border-radius: var(--CardItemBorderRadius);
    background-color: #fff;
    position: relative;
    border: var(--borderWidth) solid #705ed1;
    box-shadow: inset 0 0 20px 0px #83f0f3, 0 0 2px 0 #00000045;
  }

  .tag {
    position: absolute;
    width: var(--TagWidth);
    height: var(--TagHeight);
    left: var(--TagLeft);
    top: var(--TagTop);

    .text {
      position: absolute;
      top: 28%;
    left: 28%;
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      color: #fff;
      font-size: 12px;
      white-space: nowrap;
    }

    .tag-img {
      width: 100%;
      height: 100%;
    }

    &.normal{}
    &.rare{}
    &.supreme{}
    &.legend{}
  }

  .img-wrap {
    width: var(--ImgWidth);
    height: var(--ImgHeight);
    margin: var(--ImgMarginTop) auto 0;
    background-color: #fff;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: var(--NameTop) var(--NameLeft) 0;    font-weight: 700;
  }

  .bott {
    border-radius: var(--CardItemBorderRadius);
    margin-top: var(--BottomMarginTop);
    border: var(--borderWidth) solid #000;
    background-color: #fff;
    .label{
      font-weight: 700;
    }
    .val{
      font-weight: 700;
    }
  }
}
</style>
