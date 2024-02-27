<script lang="ts" setup>
const val = defineModel<boolean>()
</script>
<template>
  <label class="label-switch mini">
    <input type="checkbox" v-model="val" />
    <div class="checkbox"></div>
  </label>
</template>

<style lang="scss" scoped>
.label-switch {
  --width: 52px;
  --height: 32px;
  --border-radius: 16px;
  --before-left: 2px;
  --before-top: 2px;
  --before-width: 48px;
  --before-height: 28px;
  --after-left: 2px;
  --after-top: 2px;
  --after-width: 28px;
  --after-height: 28px;
  --after-radius: 28px;
  --after-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  --translateX: 22px;

  &.mini {
    --width: 39px;
    --height: 24px;
    --border-radius: 12px;
    // --before-left: calc(2px * 0.75);
    // --before-top: calc(2px * 0.75);
    --before-width: 36px;
    --before-height: 20px;
    // --after-left: calc(2px * 0.75);
    --after-top: 2px;
    --after-width: 20px;
    --after-height: 20px;
    --after-radius: 20px;
    --translateX: 15px;
    --after-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }

  width: var(--width);
  border-radius: var(--border-radius);
  height: var(--height);
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  -ms-flex-item-align: center;
  -webkit-align-self: center;
  align-self: center;
}

.label-switch .checkbox {
  width: var(--width);
  border-radius: var(--border-radius);
  height: var(--height);
  box-sizing: border-box;
  background: #e5e5e5;
  z-index: 0;
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  cursor: pointer;
  position: relative;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}

.label-switch .checkbox::before {
  content: ' ';
  left: var(--before-left);
  top: var(--before-top);
  width: var(--before-width);
  border-radius: var(--border-radius);
  height: var(--before-height);
  position: absolute;
  box-sizing: border-box;
  background: #fff;
  z-index: 1;
  transition-duration: 300ms;
  transform: scale(1);
}

.label-switch .checkbox::after {
  content: ' ';
  height: var(--after-height);
  width: var(--after-width);
  border-radius: var(--after-radius);
  top: var(--after-top);
  left: var(--after-left);
  box-shadow: var(--after-box-shadow);
  background: #fff;
  position: absolute;
  z-index: 2;
  transform: translateX(0);
  transition-duration: 300ms;
}

.label-switch input[type='checkbox'] {
  display: none;
}

.label-switch input[type='checkbox']:checked + .checkbox {
  background: #4cd964;
}

.label-switch input[type='checkbox']:checked + .checkbox::before {
  transform: scale(0);
}

.label-switch input[type='checkbox']:checked + .checkbox::after {
  transform: translateX(var(--translateX));
}
</style>
