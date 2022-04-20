<script lang="ts" setup></script>
<template>
  <div class="">
    <a href="javascript:;" class="loadingBtn loading">嘗試免費示範</a>
  </div>
</template>

<style lang="scss" scoped>
.loadingBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background: none;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  white-space: nowrap;
  max-width: 100%;
  outline: none;
  height: 54px;
  line-height: 52px;
  padding: 0 50px;
  border-radius: 6px;
  font-size: 16px;
  border-color: #3facff;
  background-color: #3facff;
  background-image: linear-gradient(to top, #3facff, #259efa);
  box-shadow: 0 3px 10px #0048b5;
  color: #f5f5f5;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s, background-image 0.15s,
    background-color 0.15s, color 0.15s, border-color 0.15s, box-shadow 0.15s !important;

  &:hover {
    border-color: #39b2ff;
    background-color: #39b2ff;
    background-image: linear-gradient(to top, #53bcff, #46b7ff);
    color: #fff;
    box-shadow: 0 3px 15px rgb(20 92 201);
  }

  &:focus {
    color: #fff;
    background-color: #39b2ff;
    border-color: transparent;
    box-shadow: 0 1px 11px rgb(20 92 201), 0 0 0 4px rgb(63 172 255 / 20%);
  }

  &.loading {
    background-repeat: repeat;
    background-position: 0;
    pointer-events: none;

    &::before {
      background-image: url(./loading-pattern.png);
      animation-timing-function: linear;
      animation-name: wait-bg;
      animation-iteration-count: infinite;
      animation-duration: 0.45s;
      content: '';
      width: 100%;
      height: 100%;
      padding: 1px;
      border-radius: 6px;
      position: absolute;
      // left: -1px;
      // right: -1px;
      // top: -1px;
      // bottom: -1px;
    }
  }

  @keyframes wait-bg {
    from {
      background-position: 0 0;
    }

    to {
      background-position: 50px 0;
    }
  }
}
</style>
