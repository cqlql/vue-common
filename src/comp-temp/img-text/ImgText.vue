<template>
  <div class="img-text">
    <div class="img-text__img">
      <img
        src="http://placehold.it/36x36"
        alt=""
      >
    </div>
    <div class="img-text__cont">
      <div class="img-text__name">闪亮小星星</div>
      <div class="img-text__des">我：好的</div>
    </div>
    <div class="img-text__right">
      3/1
    </div>
  </div>
</template>

<style scoped>
.img-text {
  display: flex;

  /* margin: 6px 0; */

  /* padding: 6px 10px; */
}

.img-text__img {
  width: 40px;
}

.img-text__img img {
  width: 100%;
  display: block;
}

.img-text__cont {
  flex: 1;
  padding-left: 10px;
}

.img-text__right {
  font-size: 12px;
  color: #888;
  padding-top: 18px;
}

.img-text__name {
  font-size: 14px;
}

.img-text__des {
  font-size: 12px;
  color: #888;
  padding-top: 2px;
}

</style>
