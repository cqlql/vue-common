
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
    if (page >= 5) {
      resolve({ list: [] })
      return
    }
    const list = []
    for (let i = (page - 1) * pageNum, len = pageNum * page; i < len; i++) {
      list.unshift(i)
    }
    setTimeout(() => {
      resolve({ list })
    }, 1000)
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
