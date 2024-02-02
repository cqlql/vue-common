import { test, expect } from 'vitest';
test('版本比较', () => {
  /**
   * 比较版本号大小，true 表示需要升级
   * @param version1
   * @param version2
   */
  function compareVersion(version1: string, version2: string): boolean {
    const v1 = version1.split('.');
    const v2 = version2.split('.');

    const maxLength = Math.max(v1.length, v2.length);

    for (let i = 0; i < maxLength; i++) {
      const num1 = parseInt(v1[i] || '0');
      const num2 = parseInt(v2[i] || '0');

      if (num1 > num2) {
        return false;
      } else if (num1 < num2) {
        return true;
      }
    }

    return false;
  }

  expect(compareVersion('1.0.0', '1.0.1')).toBe(true);
  expect(compareVersion('1.00.1', '2')).toBe(true);
  expect(compareVersion('1.1.1', '1.0.5')).toBe(false);
});
