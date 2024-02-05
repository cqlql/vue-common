export default function formatFileSize(size?: number | string) {
  if (size === undefined || size === null) {
    return '0B';
  }
  size = Number(size);
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  // 四舍五入
  return Number(size.toFixed(1)) + units[unitIndex];
  // 不四舍五入
  // return Math.floor(size * 10) / 10 + units[unitIndex]
}
