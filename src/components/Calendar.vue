<template>
  <div class="calendar-contain">
    <div class="c-head c-row">
      <div
        v-for="(v,key) of head"
        :key="key"
        class="c-cell"
      >
        {{ v }}
      </div>
    </div>
    <div
      v-for="(row,key) of rows"
      :key="key"
      class="c-row"
    >
      <div
        v-for="item of row"
        :key="item.value"
        :class="item.class"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: [String, Number],
      default: () => (new Date()).getFullYear()
    },
    month: {
      type: [String, Number],
      default: () => (new Date()).getMonth() + 1
    },
    sundayFirst: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      nowDate: new Date()
    }
  },
  computed: {
    // 上月天要显示总数
    lastMonthDayTotal () {
      return 7 - this.firstWeekDay + (this.sundayFirst ? 1 : 0)
    },
    // 上月天总数
    lastMonthDayTotalFull () {
      return this.lastMonthDateLast.getDate()
    },
    // 剩下的要显示的下月天数
    nextMonthDayTotal () {
      return 42 - this.lastMonthDayTotal - this.dayTotal
    },
    // 当月天数
    dayTotal () {
      return this.dateLast.getDate()
    },
    // 当月1号星期几
    firstWeekDay () {
      return this.dateFirst.getDay()
    },
    // 当前date，第一天
    dateFirst () {
      return new Date(this.year, this.month - 1, 1)
    },
    // 当月 date，最后一天
    dateLast () {
      return this.getDateInstanceLast(this.year, this.month)
    },
    // 上月 date，最后一天
    lastMonthDateLast () {
      return this.getDateInstanceLast(this.year, this.month - 1)
    },
    head () {
      const head = ['一', '二', '三', '四', '五', '六']
      if (this.sundayFirst) {
        head.unshift('日')
      } else {
        head.push('日')
      }
      return head
    },
    // 日期格子数据
    rows () {
      let wholeIndex = 0

      const body = [[], [], [], [], [], []]
      const { lastMonthDayTotalFull, lastMonthDayTotal, dayTotal, nextMonthDayTotal } = this
      for (let index = 0; index < lastMonthDayTotal; index++) {
        body[0].push({
          class: 'c-cell other',
          value: lastMonthDayTotalFull - lastMonthDayTotal + index + 1
        })
        wholeIndex++
      }

      for (let index = 0; index < dayTotal; index++) {
        body[~~(wholeIndex / 7)].push({
          class: 'c-cell',
          value: index + 1
        })
        wholeIndex++
      }

      for (let index = 0; index < nextMonthDayTotal; index++) {
        body[~~(wholeIndex / 7)].push({
          class: 'c-cell other',
          value: index + 1
        })
        wholeIndex++
      }

      return body
    }
  },
  methods: {
    getDateInstanceLast (year, month) {
      return new Date(year, month, 0)
    }
  }
}
</script>

<style lang="scss">
.calendar-contain {
  border: 1px solid #ddd;

  .c-row {
    display: flex;
  }

  .c-cell {
    flex: 1;
    height: 40px;
    // border: 1px solid red;
    // box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    &.other {
      color: #aaa;
    }
  }
}
</style>
