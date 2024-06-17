<script lang="ts" setup>
const active = ref(false)
</script>
<template>
  <button class="reset-btn menu-hamburger hamburger" :class="{ active }" @click="active = !active">
    <span class="hamburger-1"></span><span class="hamburger-2"></span
    ><span class="hamburger-3"></span>
  </button>
</template>
<style lang="scss" scoped>
.menu-hamburger {
  // $header-height: 65px;
  width: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  // height: $header-height;
  margin: 0 14px;
}

.menu-hamburger > span {
  background-color: var(--text-color, #555);
  border-radius: 10px;
  height: 2px;
  margin: 2px 0;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

// .menu-hamburger > span.hamburger-1 {
//   width: 50%;
// }

// .menu-hamburger > span.hamburger-3 {
//   width: 75%;
// }

.menu-hamburger.active .hamburger-1 {
  transform-origin: bottom;
  width: 50%;
  transform: rotate(45deg) translate(13px);
}

.menu-hamburger.active .hamburger-2 {
  transform-origin: top;
  transform: rotate(-45deg);
}

.menu-hamburger.active .hamburger-3 {
  transform-origin: bottom;
  width: 50%;
  transform: translate(2px, -10px) rotate(45deg);
}

button.reset-btn {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
</style>
