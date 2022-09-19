<script lang="ts" setup></script>
<template>
  <div class="friend-list">
    <div class="item">
      <div class="l">
        <div class="no">1</div>
      </div>
      <div class="m">
        <div class="label">地址</div>
        <div class="val"
          >0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111xx0xxxxxx111</div
        >
      </div>
      <div class="r">
        <div class="label">注册时间</div>
        <div class="val">2022-02-02</div>
      </div>
    </div>
    <div class="item">
      <div class="l">
        <div class="no">1</div>
      </div>
      <div class="m">
        <div class="label">地址</div>
        <div class="val">0xxxxxx111xx</div>
      </div>
      <div class="r">
        <div class="label">注册时间</div>
        <div class="val">2022-02-02</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.friend-list {
  // background-color: #000;

  .item {
    display: flex;
    background-color: hsla(47, 90%, 48%, 0.08);
    background-color: hsla(47, 90%, 48%, 0.8);
    border-radius: 10px;
    padding: 10px 0;
    margin-top: 10px;
  }

  .l {
    display: flex;
    align-items: center;
    // padding-left: 16px;
    flex: 1 1 200px;
  }

  .m {
    flex: 1 1 200px;
    // padding: 0 10px;
  }

  .r {
    // padding-right: 18px;
    flex: 1 2 200px;
  }

  .no {
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    background-color: #5c4e1c;
    border-radius: 25px;
    color: #ebb90c;
  }

  .label {
  }

  .val {
  }
}
</style>
