/**
 * getUrlSearch
 * 取 url search 参数值
 *
 * @param search 可以为null，此时也将返回null
 * @return 没有返回null
 * */
export default function (name: string, search = location.search) {
  const reg = new RegExp('[?&]' + name + '=([^&]+)')
  if (search.substring(0, 1) !== '?') {
    search = '?' + search
  }
  const match = reg.exec(search)

  if (match) {
    return match[1]
  }
  return match
}
