/**
 * 将关键字用 <b> 包裹，并返回
 * 搜索用
 */
import { escapeRegChar } from '@/utils/reg.js'
function htmlToText (html) {
  const el = document.createElement('div')
  el.textContent = html
  return el.innerHTML
}
export default function filterKeyWrod (text, keyword) {
  keyword = escapeRegChar(keyword) // 转义正则符号
  const reg = new RegExp(keyword, 'g')
  text = text.replace(reg, findStr => `_$$$_${findStr}_/$$$_`)
  const textConent = htmlToText(text)
  return textConent.replace(/_\$\$\$_(.+?)_\/\$\$\$_/g, '<b>$1</b>')
}
