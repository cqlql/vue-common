/**
 * 链接 js 加载执行
 * 可扩展加成其他类型
 * 目前不考虑 ie9 以下
 * */

/**
 * @param string src 链接
 */
export default function scriptLoad(src: string) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = src
    script.onload = function () {
      resolve(script)
      script.remove()
    }
    script.onerror = function () {
      reject(new Error('js 加载失败'))
      script.remove()
    }
    document.head.appendChild(script)
  })
}
