<template>
  <div class="card-right-fixed">
    <div class="card-right-fixed__left">
      <div class="card-right-fixed__tit">title</div>
      <div class="card-right-fixed__sub">200M</div>
    </div>
    <div class="card-right-fixed__right">
      <img src="" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-right-fixed {
  display: flex;
}

.card-right-fixed__left {
  flex: 1;
}
.card-right-fixed__tit {
}

.card-right-fixed__sub {
  color: #aaa;
  font-size: 12px;
}

.card-right-fixed__right {
  font-size: 28px;

  /* padding: 0 5px; */
  padding-left: 5px;
  color: #888;
}
</style>
