export interface fileSelectOptions {
  /**
   * @default false
   */
  multiple?: boolean;
  /**
   * @default '*'
   * images
   *
   */
  accept?: string;
  /**
   * Select the input source for the capture file.
   * @see [HTMLInputElement Capture](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture)
   */
  capture?: string;

  /**
   * 文件大小限制
   * 单位 M
   */
  sizeLimit: number;

  /**
   * 错误回调
   * 多选时用，用于定制错误处理，避免某一文件出错终止所有
   */
  fail?: () => void;
}

// https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types
// const fileTypes = [
//   'image/apng',
//   'image/bmp',
//   'image/gif',
//   'image/jpeg',
//   'image/pjpeg',
//   'image/png',
//   'image/svg+xml',
//   'image/tiff',
//   'image/webp',
//   'image/x-icon',
// ];

function errorMessage(msg: string) {
  ElMessage.error(msg);
}

function useGetInputFile() {
  let inputFile: HTMLInputElement | undefined;

  function getInputFile(options: fileSelectOptions) {
    const { accept, capture, multiple } = options;
    const file = inputFile || document.createElement('input');
    file.type = 'file';
    file.accept = accept || '*';
    file.capture = capture || '';
    file.multiple = multiple || false; // 是否多选

    if (!inputFile) {
      // 移动端 file 元素必须加到页面中，否则不会触发 onchange 事件
      // 弹出的文件选择框，如果不选文件就不会删除元素，造成页面可能出现很多 input file
      // 目前解决方案：目前只要没有删，就利用起来，这样最多也只会添加一个 input file 了
      file.style.display = 'none';
      document.body.appendChild(file);
      // setTimeout(() => file.remove(), 60000) // 固定1分钟后删除，好像不靠谱
    }
    inputFile = file;
    return file;
  }

  function removeInputFile() {
    if (inputFile) {
      inputFile.remove();
      inputFile = undefined;
    }
  }

  return {
    getInputFile,
    removeInputFile,
  };
}

const { getInputFile, removeInputFile } = useGetInputFile();

// 检查，如果类型正确返回 true
export function fileTypeCheck(type: string, fileName: string, fileType: string) {
  if (type === 'image/*') {
    return /image\/[\w+-]+/.test(fileType);
  }

  if (/image\/[\w+-]+/.test(type)) {
    return type === fileType;
  }

  const reg = new RegExp(type.replace(/^\./, '\\.') + '$');
  return reg.test(fileName);
}

/**
 * 文件类型检查
 * 如果类型正确，返回 true
 */
export function fileTypesCheck(file: File, accept?: string) {
  if (accept) {
    const types = accept.replace(/\s+/g, '').toLowerCase().split(',');

    return types.some((type) => fileTypeCheck(type, file.name.toLowerCase(), file.type));
  }
  return false;
}

export function fileSelect(options = {} as fileSelectOptions) {
  return new Promise((resolve, reject) => {
    const { sizeLimit, accept } = options;
    const inputFile = getInputFile(options);
    inputFile.onchange = () => {
      const file = inputFile.files![0];

      // 通过文件名判断类型
      if (fileTypesCheck(file, accept) === false) {
        const msg = `文件类型不正确，必须是 ${accept} 文件`;
        errorMessage(msg);
        reject({
          message: msg,
        });
        return;
      }

      // 大小限制
      if (sizeLimit && file.size > sizeLimit * 1024 * 1024) {
        const msg = `文件须小于${sizeLimit}M`;
        errorMessage(msg);
        reject({
          message: msg,
        });
        return;
      }

      resolve(file);
      removeInputFile();
    };
    inputFile.click();
  });
}

export function filesSelect(options = {} as fileSelectOptions) {
  options.multiple = true;
  return new Promise((resolve, reject) => {
    const { sizeLimit, accept } = options;
    const inputFile = getInputFile(options);
    inputFile.onchange = () => {
      const files = inputFile.files!;
      const newFiles = [];
      const errSizeFiles = [];
      let errmsg = '';
      let hasTypeError = false;

      for (let index = 0, length = files.length; index < length; index++) {
        const file = files[index];
        let isCorrect = true;

        // 通过文件名判断类型
        if (fileTypesCheck(file, accept) === false) {
          isCorrect = false;
          hasTypeError = true;
        }

        // 大小限制
        if (sizeLimit && file.size > sizeLimit * 1024 * 1024) {
          isCorrect = false;
          errSizeFiles.push(file.name);
        }

        if (isCorrect) {
          newFiles.push(file);
        }
      }

      if (errSizeFiles.length) {
        errmsg = `文件"${errSizeFiles.join(',')}"大于${sizeLimit}M`;
      }

      if (hasTypeError) {
        if (errmsg) {
          errmsg += '、';
        }

        errmsg += `文件类型不正确，必须是 ${accept} 文件`;
      }

      if (errmsg) {
        errorMessage(errmsg);
      }

      // 文件全部被排除
      if (!newFiles.length) {
        reject(new Error(errmsg));
        return;
      }

      resolve(newFiles);
      removeInputFile();
    };
    inputFile.click();
  });
}

// 拍照
export function camera(options = {} as fileSelectOptions) {
  return new Promise((resolve) => {
    options.capture = 'camera';
    if (!options.accept) {
      options.accept = 'image/*';
    }
    const inputFile = getInputFile(options);
    inputFile.onchange = () => {
      const f = inputFile.files![0];
      resolve(f);
      removeInputFile();
    };
    inputFile.click();
  });
}
