<script lang="ts" setup></script>
<template>
  <div class="VideoView">
    <v-icon class="icon-play" icon="ant-design:play-circle-outlined"></v-icon>
    <div class="time">20:10</div>
    <div class="close">
      <v-icon class="icon-close" icon="ic:baseline-close"></v-icon>
    </div>
  </div>
</template>

<style lang="scss">
.VideoView {
  width: 100px;
  height: 100px;
  background-color: #000;
  color: #fff;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon-play {
    font-size: 30px;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    background-color: red;
    padding: 2px;
    border-radius: 100px;
  }

  .icon-close {
    display: block;
  }

  .time {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
