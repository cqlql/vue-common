<script lang="ts" setup>
import transitionendOnce from '@/utils/animation/transitionend-once'
import { Timer } from '@/utils/time/timer'
import waitTime from '@/utils/time/wait-time'

interface imgItem {
  isShow: boolean
  url: string
}

const imgs = ref<string[]>([
  'https://img20.360buyimg.com/babel/s590x470_jfs/t1/71657/36/811/90591/5cf0992bEbedc5968/5811f6e6885aa79d.jpg!q90!cc_590x470.webp',
  'https://img1.360buyimg.com/pop/s590x470_jfs/t1/35566/22/8894/89520/5cf09f96Eaad51d43/473a70dbda131d1b.jpg!q90!cc_590x470.webp',
  'https://img1.360buyimg.com/da/s590x470_jfs/t1/45170/18/1300/97198/5cf11302E98732d77/76d682cb81b56414.jpg!q90!cc_590x470.webp',
])

const list = ref<imgItem[]>([])
const width = ref(100)
const left = ref('')
const currentIndex = ref(0)
const transitionProperty = ref('none')
let locked = false
const timer = new Timer()

const count = computed(() => {
  return list.value.length
})

const multiple = computed(() => {
  return count.value > 1
})

const lastItem = computed(() => {
  return list.value[count.value - 1]
})

const firstItem = computed(() => {
  return list.value[0]
})

watch(
  imgs,
  (value) => {
    list.value = value.map((url) => ({
      isShow: false,
      url,
    }))

    timer.stop()

    if (count.value === 0) return
    loadImg(0)
    directMoveIndex(0)

    timerStart()
  },
  {
    immediate: true,
  },
)

function timerStart() {
  if (multiple.value) {
    timer.start(() => {
      swipeLeft()
    }, 3000)
  }
}

onUnmounted(() => {
  timer.stop()
})
onActivated(() => {
  timerStart()
})
onDeactivated(() => {
  timer.stop()
})

const eMoveRef = ref<HTMLElement | null>(null)

function swipeLeft() {
  if (locked) return
  locked = true
  let index = currentIndex.value
  index++
  loadImg(index)
  moveIndex(index)
  transitionendOnce(eMoveRef.value!, () => {
    if (index >= count.value) {
      index = 0
      directMoveIndex(index)
    }
    currentIndex.value = index
    locked = false
  })
}

function swipeRight() {
  if (locked) return
  locked = true
  let index = currentIndex.value
  index--
  loadImg(index)
  moveIndex(index)
  transitionendOnce(eMoveRef.value!, () => {
    if (index < 0) {
      index = count.value - 1
      directMoveIndex(index)
    }
    currentIndex.value = index
    locked = false
  })
}

function moveIndex(index: number) {
  left.value = -index * width.value - width.value + '%'
}

/**直接移动，不参与动画 */
async function directMoveIndex(index: number) {
  transitionProperty.value = 'none'
  moveIndex(index)
  await waitTime(0)
  transitionProperty.value = 'transform'
}

// 三张图加载方案：当前张和旁边两张，尽量不然用户看到加载的过程
async function loadImg(index: number) {
  if (index >= count.value) index = 0
  if (index < 0) index = count.value - 1

  const item = list.value[index]
  item.isShow = true

  await waitTime(400)

  const preItem = list.value[index - 1] || lastItem.value
  const nextItem = list.value[index + 1] || firstItem.value
  preItem.isShow = nextItem.isShow = true
}
</script>
<template>
  <div class="Banner">
    <div class="container">
      <ul
        ref="eMoveRef"
        class="move"
        :style="{ transform: `translateX(${left})`, transitionProperty: transitionProperty }"
      >
        <li v-if="multiple" class="item">
          <img v-if="lastItem.isShow" :src="lastItem.url" />
        </li>
        <li v-for="(item, index, key) of list" :key="key" class="item">
          <img v-if="item.isShow" :src="item.url" />
        </li>
        <li v-if="multiple" class="item">
          <img v-if="firstItem.isShow" :src="firstItem.url" />
        </li>
      </ul>
    </div>
    <div class="control">
      <button class="btn prev" @click="swipeRight">左边</button>
      <button class="btn next" @click="swipeLeft">右边</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 470px;
  overflow: hidden;
}

.move {
  /* position: relative; */
  width: 100%;
  height: 100%;
  display: flex;
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ease;
}

.item {
  width: 100%;
  height: 100%;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.transitionActive {
  transition: transform 0.3s ease;
}
</style>
