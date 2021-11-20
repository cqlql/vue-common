class Queue {
  constructor() {
    this.list = []
  }
  add(item) {
    this.list.push(item)
  }
  exec(cb) {
    this.list.forEach((item) => {
      cb(item)
    })
    this.list = []
  }
}
export default class RequestCache {
  constructor() {
    this.cache = {}
    this.queue = new Queue()
    this.success = false
    this.loading = false
  }
  request(request, setCache) {
    if (this.success) {
      return Promise.resolve(this.cache)
    }

    const { queue } = this
    if (this.loading) {
      return new Promise((resolve, reject) => {
        queue.add({ resolve, reject })
      })
    }
    this.loading = true
    request()
      .then((result) => {
        setCache(this.cache, result)
        queue.exec(({ resolve }) => {
          resolve(this.cache)
        })
        this.success = true
      })
      .catch((e) => {
        queue.exec(({ reject }) => {
          reject()
        })
      })
      .finally(() => {
        this.loading = false
      })

    // 第一次
    return new Promise((resolve, reject) => {
      queue.add({ resolve, reject })
    })
  }
}
