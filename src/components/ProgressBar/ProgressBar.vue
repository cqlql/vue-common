<template>
  <div class="ProgressBar">
    <div class="bar-title">{{ title }}</div>
    <div class="bar-container-fix">
      <i class="bar-dots-fix" :style="{ backgroundColor: color }"></i>
      <div class="bar-container">
        <div
          class="bar"
          :style="{ width: value + '%', backgroundColor: color }"
        >
          <div class="bar-dots">
            <span class="bar-text">{{ text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    value: number
    text: string
    color?: string
  }>(),
  {
    value: 0,
  },
)
</script>

<style lang="scss">
$barSize: 10px;
$barBc: #f0f4f3;
$barBcActive: #73c0de;

.ProgressBar {
  padding-bottom: 20px;

  .bar-title {
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 16px;
    // width: 50px;
  }

  .bar-container-fix {
    // flex: 1;
    background-color: $barBc;
    border-radius: $barSize;
    padding: 0 $barSize/2;
    position: relative;
    height: $barSize;

    .bar-dots-fix {
      width: $barSize;
      height: $barSize;
      border-radius: $barSize;
      position: absolute;
      left: 0;
      top: 0;
      background-color: $barBcActive;
    }
  }

  .bar-container {
    // background-color: #f0f4f3;
    height: $barSize;
    // border-radius: $barSize;
  }

  .bar {
    // border-radius: $barSize 0 0 $barSize;
    // border-radius-:0;
    width: 0%;
    height: 100%;
    background-color: $barBcActive;
    position: relative;
  }

  .bar-dots {
    width: $barSize;
    height: $barSize;
    border-radius: $barSize;
    background-color: #12ac70;
    position: absolute;
    right: -$barSize/2;
    z-index: 1;
    outline: 2px solid #fff;
  }

  .bar-text {
    position: absolute;
    top: -14px;
    font-size: 12px;
    line-height: 12px;
    transform: translateX(-50%);
  }
}
</style>
