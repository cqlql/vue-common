/**减号转大写驼峰 */
export function toUpperCamelCase(str: string) {
  const arr = str.split('-');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return result;
}
