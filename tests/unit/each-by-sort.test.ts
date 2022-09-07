import eachBySort from '@/utils/each/each-by-sort'

import { expect, test } from 'vitest'

test('eachBySort', () => {
  let newKeys = ''
  eachBySort(
    {
      semester: { name: '下学期：', val: '2023/02/15 - 2023/07/30' },
      curSemester: { name: '本学期：', val: '2022/09/01 - 2023/01/20' },
      curYearSemester: { name: '本学年：', val: '2022/09/01 - 2023/07/30' },
      yearSemester: { name: '上学年：', val: '2021/09/01 - 2022/07/30' },
    },
    (v, k) => {
      newKeys += ',' + k
    },
    ['curSemester', 'curYearSemester'],
  )

  expect(newKeys).toBe(',curSemester,curYearSemester,semester,yearSemester')
})
