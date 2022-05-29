/* 
!! 可使用 front-matter(https://github.com/jxson/front-matter) 代替

解析 markdown 顶部如下格式

---
title: 标题
author: joly
---

到

{
  title: "标题",
  author: "joly",
},

*/

export default function mdFront(text: string) {
  const resultData: Record<string, string> = {}
  const res = text.match(/^---\s*[\n\r]([\s\S]+?)[\n\r]---\s*[\n\r]/)

  if (res) {
    const resContent = res[1] as string
    ;(resContent.match(/.+/g) as string[]).forEach((content) => {
      const result = content.match(/(.+)\:(.+)/)
      if (result) {
        const key = result[1].trim()
        const value = result[2].trim()
        resultData[key] = value
      }
    })
  }

  return resultData
}
