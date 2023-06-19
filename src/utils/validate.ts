/**
 * 验证金额
 * @param str 
 * @returns 
 */
export function validAmount(str:string) {
  const reg = /^-?\d*\.?\d{0,2}$/
  return reg.test(str)
}
