<script lang="ts" setup></script>
<template>
  <div class="AnimationShakeX">ShakeX</div>
</template>
<style lang="scss" scoped>
.AnimationShakeX {
  animation-name: registerNoPolicy;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes registerNoPolicy {
  0% {
    transform: translate(0);
  }

  25% {
    transform: translate(10px);
  }

  50% {
    transform: translate(0);
  }

  75% {
    transform: translate(10px);
  }

  to {
    transform: translate(0);
  }
}
</style>
