<template>
  <div class="list-box" tabindex="-1">
    <ul>
      <li
        v-for="item of data"
        :key="item.value"
        :class="{selected:item.value===selected}"
        @click="select(item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: String,
      default: null
    }
  },
  emits: ['change', 'select'],
  data () {
    return {
      selected: this.value
    }
  },
  computed: {
    dict () {
      return this.data.reduce((dict, item, index) => {
        dict[item.value] = {
          index,
          item
        }
        return dict
      }, {})
    },
    lis () {
      return this.$el.querySelector('ul').children
    }
  },
  watch: {
    selected (selected) {
      this.$emit('change', selected, this.dict[selected])
      this.showValue(selected)
    },
    value (value) {
      this.selected = value
    }
  },
  mounted () {
    this.showValue(this.value)
  },
  methods: {
    showValue (value) {
      if (!value) return
      const item = this.dict[value]
      const li = this.lis[item.index]
      const $el = this.$el

      const boxHeight = $el.clientHeight
      if (!boxHeight) return
      const boxSrollTop = $el.scrollTop
      const itemTop = li.offsetTop
      const itemHeight = li.clientHeight
      const clientY = itemTop - boxSrollTop

      if (clientY < 0) {
        $el.scrollTop = itemTop
      } else
      if (clientY > boxHeight) {
        $el.scrollTop = itemTop - boxHeight + itemHeight
      }
    },
    select (item) {
      const value = this.selected = item.value
      this.$emit('select', value, this.dict[value])
    }
  }
}
</script>

<style lang="scss">
  .list-box {
    border: 1px solid #ddd;
    width: 200px;
    max-height: 34px * 7;
    overflow: auto;
    position: relative;
    // margin-top: 100px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      font-size: 14px;
      padding: 0 20px;
      color: #606266;
      height: 34px;
      line-height: 34px;
      box-sizing: border-box;
      cursor: pointer;
    }

    li:hover {
      background-color: #f5f7fa;
    }

    li.selected {
      color: #1890ff;
      font-weight: bold;
      background-color: #f5f7fa;
    }
  }
</style>
