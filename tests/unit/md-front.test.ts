import mdFront from '@/utils/md-resolve/md-front'
import { expect, test } from 'vitest'

test('markdown 顶部 “ --- ” 格式解析', () => {
  const mdText = `---
title: 标题
author: joly
---
    `
  const res = mdFront(mdText)
  expect(res.title).toBe('标题')
  expect(res.author).toBe('joly')
})
