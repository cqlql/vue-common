<template>
  <div>
    <button @click="showValue">跳到显示第10项</button>
    <div class="ListSelect-demo__wrap">
      <ListSelect
        ref="vListSelect"
        :data="list"
        @select="select"
        @change="change"
      />
    </div>

    <button @click="setValue">手动选中：{{ value }}</button>
    <div class="ListSelect-demo__wrap">
      <ListSelect
        :data="list"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
import ListSelect from './ListSelect.vue'
export default {
  components: {
    ListSelect
  },
  data () {
    const list = []
    for (let i = 1; i < 21; i++) {
      list.push({
        value: i + '',
        label: i + '项'
      })
    }

    return {
      list,
      value: '10'
    }
  },
  methods: {
    showValue () {
      this.$refs.vListSelect.showValue('10')
    },
    change (selected, more) {
      console.log(selected, more)
    },
    select (selected, more) {
      console.log('select', selected, more)
    },
    setValue () {
      this.value = ~~(Math.random() * 100 % 20 + 1) + ''
    }
  }
}
</script>

<style lang="scss">
  .ListSelect-demo__wrap {
    width: 300px;
    border: 1px solid #ddd;
  }
</style>
