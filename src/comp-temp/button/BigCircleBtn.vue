<template>
  <div class="big-circle-btn">
    <div class="big-circle-btn__text">上班打卡</div>
    <div class="big-circle-btn__sub">12:22</div>
  </div>
</template>

<style lang="scss">
.big-circle-btn {
  border: 4px solid #bde7ff;
  background-color: #62c6ff;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  text-align: center;
  display: inline-block;

  &:active {
    opacity: 0.8;
  }
}

.big-circle-btn__text {
  color: #fff;
  font-size: 18px;
  padding-top: 30px;
}

.big-circle-btn__sub {
  color: #c8e7ff;
}

</style>
