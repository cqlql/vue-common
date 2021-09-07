
export function getNoDate () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ list: [] })
    }, 1000)
  })
}

export function getList (page) {
  const pageNum = 10
  return new Promise((resolve) => {
    if (page >= 10 || page <= 0) {
      resolve({ list: [] })
      return
    }
    const list = []
    for (let i = (page - 1) * pageNum, len = pageNum * page; i < len; i++) {
      if (i % 10 === 2) {
        list.unshift('//img30.360buyimg.com/babel/s380x300_jfs/t1/165019/40/8639/60165/603d92e5E1d9852b8/2006d88391f60fe8.jpg.webp')
      } else {
        list.unshift(i)
      }
    }
    setTimeout(() => {
      resolve({ list })
    }, 200)
  })
}

export function getHasPagesList (page) {
  const pageNum = 10
  return new Promise((resolve) => {
    const list = []
    for (let i = (page - 1) * pageNum, len = pageNum * page; i < len; i++) {
      list.unshift(i)
    }

    const totalNumber = 35
    const totalpages = Math.ceil(totalNumber / 10)
    if (page >= totalpages) {
      list.length = totalNumber % 10
    }

    setTimeout(() => {
      resolve({
        list,
        pages: {
          currentPage: page,
          totalNumber,
          totalpages
        }
      })
    }, 1000)
  })
}
