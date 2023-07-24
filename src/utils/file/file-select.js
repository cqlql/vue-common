let fileElem = null
function getInputFile(options) {
  const { accept, capture, multiple } = options
  const file = fileElem || document.createElement('input')
  file.type = 'file'
  file.accept = accept || ''
  file.capture = capture || ''
  file.multiple = multiple || false // 是否多选

  if (!fileElem) {
    // 移动端 file 元素必须加到页面中，否则不会触发 onchange 事件
    // 弹出的文件选择框，如果不选文件就不会删除元素，造成页面可能出现很多 input file
    // 目前解决方案：目前只要没有删，就利用起来，这样最多也只会添加一个 input file 了
    file.style.display = 'none'
    document.body.appendChild(file)
    // setTimeout(() => file.remove(), 60000) // 固定1分钟后删除，好像不靠谱
  }
  fileElem = file
  return file
}

function removeFileElem() {
  if (fileElem) {
    fileElem.remove()
    fileElem = null
  }
}

const fileSelect = {
  file(options = {}) {
    return new Promise((resolve, reject) => {
      const { sizeLimit, allow } = options
      const inputFile = getInputFile(options)
      inputFile.onchange = () => {
        const file = inputFile.files[0]

        // 通过文件名判断类型
        if (allow) {
          if (!allow.test(file.name)) {
            reject({
              code: 1,
              message: `文件类型不正确，必须是 ${allow} 文件`,
            })
            return
          }
        }

        // 大小限制
        if (sizeLimit && file.size > sizeLimit * 1024 * 1024) {
          reject({
            code: 2,
            message: `文件须小于${sizeLimit}M`,
          })
          return
        }

        resolve(file)
        removeFileElem()
      }
      inputFile.click()
    })
  },

  files(options = {}) {
    options.multiple = true
    return new Promise((resolve, reject) => {
      const { sizeLimit } = options
      const inputFile = getInputFile(options)
      inputFile.onchange = () => {
        const files = inputFile.files
        const newFiles = []
        const errFiles = []
        for (let index = 0, length = files.length; index < length; index++) {
          const file = files[index]
          // 大小限制
          if (sizeLimit && file.size > sizeLimit * 1024 * 1024) {
            errFiles.push(file.name)
            console.error(new Error(`文件${file.name}大于${sizeLimit}M，被排除`))
          } else {
            newFiles.push(file)
          }
        }

        if (!newFiles.length) {
          reject(new Error(`文件"${errFiles.join(',')}"大于${sizeLimit}M，被排除`))
          return
        }

        resolve(newFiles)
        removeFileElem()
      }
      inputFile.click()
    })
  },

  // fileReadAsDataURL (file) {
  //   return new Promise((resolve, reject) => {
  //     var fileReader = new FileReader()
  //     // 文件读取 完后触发
  //     fileReader.onload = function (e) {
  //       resolve(e.target.result)
  //     }
  //     // 文件读取为 DataURL，base64
  //     fileReader.readAsDataURL(file)
  //   })
  // },

  // 拍照
  camera(options = {}) {
    return new Promise((resolve, reject) => {
      options.capture = 'camera'
      if (!options.accept) {
        options.accept = 'image/*'
      }
      const inputFile = getInputFile(options)
      inputFile.onchange = () => {
        const f = inputFile.files[0]
        resolve(f)
        removeFileElem()
      }
      inputFile.click()
    })
  },
}

export default fileSelect
