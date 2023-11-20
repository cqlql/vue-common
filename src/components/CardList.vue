
<script lang="ts" setup>
import { ref } from 'vue';

let small=ref(false)
function test () {
  small.value = !small.value
}

</script>
<template>
  <div class="CardList" :class="{small}">
    <div v-for="i of 13" class="CardItem">
      <div class="box">
        <div class="tag">
          <img class="tag-img" src="" alt="">
          <div class="text">
            普通
          </div>
        </div>
        <div class="img-wrap">
          <img class="img" src="" alt="">
        </div>
        <div class="name">
          为了你的数据安全，请立即关闭新电脑的BitLocker！
        </div>
      </div>
      <div class="bott">
        <div class="label">BitLocker</div>
        <div class="val">333</div>
      </div>
    </div>
  </div>

  <button @click="test">test</button>
</template>

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
    box-shadow: inset 0 0 20px 0 #83f0f3, 0 0 2px 0 #00000045;
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
    margin: var(--NameTop) var(--NameLeft) 0;
    font-weight: 700;
  }

  .bott {
    border-radius: var(--CardItemBorderRadius);
    margin-top: var(--BottomMarginTop);
    border: var(--borderWidth) solid #000;
    background-color: #fff;

    .label {
      font-weight: 700;
    }

    .val {
      font-weight: 700;
    }
  }
}
</style>
