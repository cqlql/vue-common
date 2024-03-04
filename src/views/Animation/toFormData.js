export default function toFormData(obj, map = {}) {
  let data = {}
  fn(obj)
  return data

  function fn(obj, name) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let val = obj[key]
        let newName = name ? name + '[' + (map[key] || key) + ']' : key
        if (val instanceof Array || val instanceof Object) {
          fn(val, newName)
        } else {
          if (val === undefined) continue // 跳过 undefined
          data[newName] = encodeURIComponent(val)
        }
      }
    }
  }
}
