class Queue<T = any> {
  list: T[] = [];
  add(item: T) {
    this.list.push(item);
  }
  exec(cb: (item: T) => void) {
    this.list.forEach((item) => {
      cb(item);
    });
    this.list = [];
  }
}
export default class CacheAsync<T = any> {
  requestFn: () => Promise<T>;
  cache?: T;
  queue = new Queue();
  success = false;
  loading = false;

  constructor(requestFn: () => Promise<T>) {
    this.requestFn = requestFn;
  }

  request(): Promise<T> {
    if (this.success) {
      return Promise.resolve(this.cache!);
    }

    const { queue } = this;
    if (this.loading) {
      return new Promise((resolve, reject) => {
        queue.add({ resolve, reject });
      });
    }
    this.loading = true;
    this.requestFn()
      .then((result) => {
        this.cache = result;
        queue.exec(({ resolve }) => {
          resolve(this.cache);
        });
        this.success = true;
      })
      .catch(() => {
        queue.exec(({ reject }) => {
          reject();
        });
      })
      .finally(() => {
        this.loading = false;
      });

    // 第一次
    return new Promise((resolve, reject) => {
      queue.add({ resolve, reject });
    });
  }

  clear() {
    this.cache = undefined;
    this.success = false;
    this.loading = false;
  }
}
