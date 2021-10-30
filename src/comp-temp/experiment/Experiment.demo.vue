<template>
  <div>
    {{ count }}
    {{ msg }}
    <p><button @click="test">test</button></p>
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from "@vue/reactivity";
export default {
  setup() {
    const count = ref(0);
    const state = reactive({
      msg: "hello"
    });

    console.log(state);
    return {
      count,
      ...toRefs(state),
      test() {
        count.value += 1;
        state.msg += ~~(Math.random() * 10);
      }
    };
  }
};
</script>
