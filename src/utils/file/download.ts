/**
 * 文件下载
 * @param file
 * @example
 * // 实现保存文本
 * download(new Blob(['文本内容文本内容文本内容文本内容']))
 */

export default function download(file: File | string) {
  const a = document.createElement('a');
  if (typeof file === 'string') {
    a.href = file;
  } else {
    a.download = file.name;

    a.href = URL.createObjectURL(file);
  }

  document.body.appendChild(a);
  a.click();
  a.remove();
}
