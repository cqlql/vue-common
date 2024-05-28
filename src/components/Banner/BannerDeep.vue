<script lang="ts" setup>
const imgs = ref<string[]>([
  'https://img20.360buyimg.com/babel/s590x470_jfs/t1/71657/36/811/90591/5cf0992bEbedc5968/5811f6e6885aa79d.jpg!q90!cc_590x470.webp',
  'https://img1.360buyimg.com/pop/s590x470_jfs/t1/35566/22/8894/89520/5cf09f96Eaad51d43/473a70dbda131d1b.jpg!q90!cc_590x470.webp',
  'https://img1.360buyimg.com/da/s590x470_jfs/t1/45170/18/1300/97198/5cf11302E98732d77/76d682cb81b56414.jpg!q90!cc_590x470.webp',
  'https://www.haibao123.xyz/01/3672.jpg',
  'https://www.haibao123.xyz/01/3501.jpg',
  'https://img20.360buyimg.com/babel/s590x470_jfs/t1/71657/36/811/90591/5cf0992bEbedc5968/5811f6e6885aa79d.jpg!q90!cc_590x470.webp',
  'https://img1.360buyimg.com/pop/s590x470_jfs/t1/35566/22/8894/89520/5cf09f96Eaad51d43/473a70dbda131d1b.jpg!q90!cc_590x470.webp',
  'https://img1.360buyimg.com/da/s590x470_jfs/t1/45170/18/1300/97198/5cf11302E98732d77/76d682cb81b56414.jpg!q90!cc_590x470.webp',
])

const activeIndex = ref(0)
const count = computed(() => imgs.value.length)

function getClassName(index: number) {
  // let leftHideIndex = activeIndex.value - 2
  // if (leftHideIndex < 0) {
  //   leftHideIndex = count.value + leftHideIndex
  // }

  let leftIndex = activeIndex.value - 1
  if (leftIndex < 0) {
    leftIndex = count.value + leftIndex
  }

  let rightHideIndex = activeIndex.value + 2
  if (rightHideIndex >= count.value) {
    rightHideIndex = rightHideIndex - count.value
  }

  let rightIndex = activeIndex.value + 1
  if (rightIndex >= count.value) {
    rightIndex = rightIndex - count.value
  }

  if (index === activeIndex.value) {
    return 'active'
  }

  if (index === rightHideIndex) {
    return 'rightHide'
  }

  if (index === leftIndex) {
    return 'left'
  }

  if (index === rightIndex) {
    return 'right'
  }

  // if (index === leftHideIndex) {
  //   return 'leftHide'
  // }
  return 'leftHide'
}
// const vItemsRef = ref<HTMLElement[]>()

// let lock = false
// watch(vItemsRef, (items) => {
//   if (items?.[0]) {
//     items[0].addEventListener('transitionend', () => {
//       lock = false
//     })
//   }
// })

function swipeLeft() {
  // if (lock) return
  // lock = true
  let index = activeIndex.value + 1

  if (index >= count.value) {
    index = 0
  }
  activeIndex.value = index
}
function swipeRight() {
  // if (lock) return
  // lock = true
  let index = activeIndex.value - 1

  if (index < 0) {
    index = count.value - 1
  }
  activeIndex.value = index
}

defineExpose({ swipeLeft, swipeRight })
</script>
<template>
  <div class="BannerDeep">
    <ul class="list">
      <li
        v-for="(url, index) of imgs"
        :key="index"
        ref="vItemsRef"
        class="item"
        :class="getClassName(index)"
      >
        <img :src="url" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.BannerDeep {
  width: 1200px;
  border: 1px solid red;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .list {
    width: 500px;
    height: 380px;
    position: relative;
  }

  .item {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    position: absolute;
    left: 0;
    right: 0;
    transition-property: transform opacity;
    transition-duration: 800ms;
    transition-timing-function: ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .active {
    transform: translateX(0) scale(1);
  }

  .left {
    transform: translateX(-100%) scale(0.8);
  }

  .right {
    transform: translateX(100%) scale(0.8);
  }

  .leftHide {
    transform: translateX(-200%) scale(0.5);
    opacity: 0;
    pointer-events: none;
  }

  .rightHide {
    transform: translateX(200%) scale(0.5);
    opacity: 0;
  }
}
</style>
