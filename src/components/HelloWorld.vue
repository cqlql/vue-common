<script setup>
import { ref } from 'vue';
import RaffleView from './RaffleView.vue';

const list = ref([
  {
    id: "1",
    name: "1",
    img: "//img10.360buyimg.com/seckillcms/s140x140_jfs/t1/194549/19/13333/188027/60f30d8aE144e212d/af2f276856b3b978.jpg.webp",
  },
  {
    id: "2",
    name: "2",
    img: "//img20.360buyimg.com/seckillcms/s140x140_jfs/t1/127785/22/35777/104123/640172a7F9a6e2d75/3603e2456584da3a.jpg.webp",
  },
  {
    id: "3",
    name: "3",
    img: "//img20.360buyimg.com/seckillcms/s140x140_jfs/t20260522/137334/27/32093/43030/646ca3aeF652d03cf/cac75edac45bead0.jpg.webp",
  },
  {
    id: "4",
    name: "4",
    img: "//img13.360buyimg.com/seckillcms/s140x140_jfs/t1/221947/2/6459/190430/61bff09aE35bc929b/e836cc7537c4528d.jpg.webp",
  },
  {
    id: "5",
    name: "5",
    img: "//img30.360buyimg.com/img/s100x100_jfs/t1/91981/1/41511/72149/64c333e9F758186fd/aff40a7e8d41fadf.jpg!cc_100x100.webp",
  },
]);

function randomList(list, prizeIndex, prizeNewIndex) {
  const cloneList = list.slice();
  const newList = [];
  newList.push(cloneList.splice(prizeIndex, 1)[0]);
  function loopGet() {
    const len = cloneList.length;
    if (len) {
      const index = Math.floor(len * Math.random());
      newList.push(cloneList.splice(index, 1)[0]);
      loopGet();
    }
  }
  loopGet();
  // 交换。大奖放到指定位置
  const prizeValue = newList[0];
  newList[0] = newList[prizeNewIndex];
  newList[prizeNewIndex] = prizeValue;
  return newList;
}
list.value = randomList(list.value, 1, 2)
console.log("result", list.value);
</script>
<template>
  <div class="HelloWorld">
    <RaffleView :list="list"></RaffleView>
  </div>
</template>

<style lang="scss" scoped>
.HelloWorld{
//
}
</style>
