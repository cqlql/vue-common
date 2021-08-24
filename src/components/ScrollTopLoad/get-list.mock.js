export function getList (page) {
  const pageNum = 10
  return new Promise((resolve) => {
    if (page >= 5) {
      resolve([])
      return
    }
    const list = []
    for (let i = (page - 1) * pageNum, len = pageNum * page; i < len; i++) {
      list.unshift(i)
    }
    setTimeout(() => {
      resolve(list)
    }, 1000)
  })
}
