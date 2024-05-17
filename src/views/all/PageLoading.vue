<template>
  <div class="page-loading">
    <div class="page-loading-cont"></div>
  </div>
</template>
<style lang="scss" scoped>
.page-loading {
  position: relative;
  margin-right: 20px;
  width: 200px;

  .page-loading-cont {
    padding-top: 84.429%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('@/assets/logo.png') no-repeat;
      background-size: 100% 100%;
      filter: grayscale(100%);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('@/assets/logo.png') no-repeat;
      background-size: 100% 100%;

      /* clip-path: inset(0 0 0 0); */
      animation-duration: 1.6s;
      animation-name: slidein;
      animation-iteration-count: infinite;
    }

    @keyframes slidein {
      0% {
        clip-path: inset(0 100% 0 0);
      }

      50% {
        clip-path: inset(0 0 0 0);
      }

      100% {
        clip-path: inset(0 0 0 100%);
      }
    }
  }
}
</style>
