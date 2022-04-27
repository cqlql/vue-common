import { escapeRegChar } from '../reg'

export default function createSearchRegexp(keyword: string) {
  keyword = escapeRegChar(keyword) // 转义正则符号
  keyword = keyword.trim().replace(/ +/g, '|') // 支持空格分隔字符串
  return new RegExp(keyword)
}
