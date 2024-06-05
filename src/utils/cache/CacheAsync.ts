/**
 * 缓存异步请求
 * @example
 * const cacheAsync = new CacheAsync(getFormDesignBaseData);
 * async getBaseOptions(): Promise<GetFormDesignBaseDataResult> {
 *    return cacheAsync.request();
 * }
 */
export default class CacheAsync<T = any> {
  getData: () => Promise<T>
  cache?: T
  queue = new Queue()
  success = false
  loading = false

  constructor(getData: () => Promise<T> = () => Promise.resolve({} as T)) {
    this.getData = getData
  }

  request(getData: () => Promise<T> = this.getData): Promise<T> {
    if (this.success) {
      return Promise.resolve(this.cache!)
    }

    const { queue } = this
    if (this.loading) {
      return new Promise((resolve, reject) => {
        queue.add({ resolve, reject })
      })
    }
    this.loading = true
    getData()
      .then((result) => {
        this.cache = result
        queue.exec(({ resolve }) => {
          resolve(this.cache)
        })
        this.success = true
      })
      .catch((err) => {
        queue.exec(({ reject }) => {
          reject(err)
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

  clear() {
    this.cache = undefined
    this.success = false
    this.loading = false
  }
}

class Queue<T = any> {
  list: T[] = []
  add(item: T) {
    this.list.push(item)
  }
  exec(cb: (item: T) => void) {
    this.list.forEach((item) => {
      cb(item)
    })
    this.list = []
  }
}
