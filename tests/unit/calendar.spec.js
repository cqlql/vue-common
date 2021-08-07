import { mount } from '@vue/test-utils'
import Calendar from '@/components/Calendar/Calendar.vue'

describe('Calendar', () => {
  test('props', async () => {
    const wrapper = mount(Calendar)

    const date = new Date()

    expect(wrapper.props('month')).toBe(date.getMonth() + 1)
  })

  test('指定日期', async () => {
    const year = 2021
    const month = 7
    const wrapper = mount(Calendar, {
      props: {
        year,
        month
      }
    })

    const dateFirst = new Date(year, month - 1, 1)
    const dateLast = new Date(year, month, 0)

    expect(wrapper.vm.dayTotal).toBe(dateLast.getDate())

    expect(wrapper.vm.firstWeekDay).toBe(dateFirst.getDay())
    expect(wrapper.vm.lastMonthDayTotal).toBe(3)
    expect(wrapper.vm.lastMonthDayTotalFull).toBe(30)
    expect(wrapper.vm.rows[0][0].value).toBe(28)
    expect(wrapper.vm.rows[5][6].value).toBe(8)
  })
})
