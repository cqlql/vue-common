function generateHead(sundayFirst: boolean) {
  const head = ['一', '二', '三', '四', '五', '六']
  if (sundayFirst) {
    head.unshift('日')
  } else {
    head.push('日')
  }
  return head
}

function each(num: number, cb: (i: number) => void) {
  for (let i = 0; i < num; i++) {
    cb(i)
  }
}

function grouping(list: any[], num: number, cb: (item: any) => any) {
  let row: any[]
  const rows: any[] = []

  list.forEach((item, index) => {
    const rowIndex = index % num
    if (rowIndex === 0) {
      row = []
      rows.push(row)
    }

    row.push(cb(item))
  })

  return rows
}

export default function useOneWeek() {
  const sundayFirst = true

  const activeDate = new Date()

  const activeWeekDay = activeDate.getDay()
  console.log('🚀 -- useOneWeek -- activeWeekDay', activeWeekDay)

  const list: any[] = []

  each(activeWeekDay - (sundayFirst ? 0 : 1), (i) => {
    list.push(null)
  })

  // 补充 从 activeDate 开始的7天
  const year = activeDate.getFullYear()
  const month = activeDate.getMonth()
  const d = activeDate.getDate()
  list.push(activeDate)
  each(6, (i) => {
    list.push(new Date(year, month, d + i + 1))
  })

  each(7 - activeWeekDay - (sundayFirst ? 0 : 1), (i) => {
    list.push(null)
  })
  console.log('🚀 -- each -- list', list)

  // 分组，7项为一组
  const rows = grouping(list, 7, (date: Date) => {
    return {
      value: date ? date.getDate() : '',
      date,
    }
  })
  console.log('🚀 -- rows -- rows', rows)

  return { head: generateHead(sundayFirst), rows }
}
