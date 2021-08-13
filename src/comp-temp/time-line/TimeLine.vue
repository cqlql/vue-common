
<template>
  <div class="time-line">
    <div class="time-line__t">第一次上班</div>
    <div class="time-line__block">
      <div class="time-line__tit">
        <span class="time-line__tip">上</span>
        <span class="time-line__des">打卡时间08:02</span>
        <span class="time-line__sub">上班时间08:00</span>
      </div>
      <div class="time-line__info">西丽小学</div>
      <div class="time-line__info">西丽小学</div>
      <div class="time-line__info">西丽小学</div>
    </div>
    <div class="time-line__block">
      <div class="time-line__tit">
        <span class="time-line__tip">上</span>
        <span class="time-line__des">打卡时间08:02</span>
        <span class="time-line__sub">上班时间08:00</span>
      </div>
      <div class="time-line__info">
        西丽小学
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.time-line {

}

.time-line__block {
  padding-bottom: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 10px;
    bottom: -4px;
    width: 1px;
    background-color: #aaa;
    z-index: -1;
  }
}

.time-line__block + .time-line__block::after {
  display: none;
}

.time-line__tit {

}

.time-line__tip {
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  // padding: 0 3px;
  background-color: rgb(0, 110, 255);
  color: #fff;
  text-align: center;
  margin-right: 5px;
  font-size: 12px;
  vertical-align: middle;
  line-height: 1.6;
}

.time-line__des {
  vertical-align: middle;
}

.time-line__sub {
  vertical-align: middle;
}

.time-line__info {
  margin-left: 30px;
  padding: 6px 0;
}
</style>
