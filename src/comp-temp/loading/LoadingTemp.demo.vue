<template>
  <div>
    <div class="LoadingTemp-loading">
      <div class="LoadingTemp-loading-spinner">
        <svg viewBox="25 25 50 50" class="circular"><circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          class="path"
        /></svg>
        <p class="LoadingTemp-loading-text">拼命加载中</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.LoadingTemp-loading {
  position: absolute;
  z-index: 2000;
  background-color: hsla(0, 0%, 100%, 0.9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;

  .circular {
    height: 42px;
    width: 42px;
    animation: loading-rotate 2s linear infinite;
  }

  .path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #409eff;
    stroke-linecap: round;
  }
}

.LoadingTemp-loading-spinner {
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}

.LoadingTemp-loading-text {
  color: #409eff;
  margin: 3px 0;
  font-size: 14px;
}

@keyframes loading-rotate {
  to {
    transform: rotate(1turn);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }

  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>
