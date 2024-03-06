import type { Editor } from '@ckeditor/ckeditor5-core'

/**
 * 模拟文件上传api
 */
function uploadImage(_file: File) {
  return new Promise((resolve, _reject) => {
    resolve('https://www.baidu.com/img/flexible/logo/pc/result.png')
  })
}

class ImageUploadAdapter {
  loader: any
  constructor(loader: any) {
    // The file loader instance to use during the upload. It sounds scary but do not
    // worry — the loader will be passed into the adapter later on in this guide.
    this.loader = loader
  }
  // Starts the upload process.
  async upload() {
    const file = await this.loader.file
    const url = await uploadImage(file)
    return {
      default: url
      // '160': 'https://www.baidu.com/img/flexible/logo/pc/result.png'
    }
  }

  // Aborts the upload process.
  abort() {}
}
export default function ImageUploadAdapterPlugin(editor: Editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    // Configure the URL to the upload script in your back-end here!
    return new ImageUploadAdapter(loader)
  }
}
