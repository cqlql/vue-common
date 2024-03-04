import { escapeRegChar } from '@/utils/reg';

// 避免输出 html 标签
function htmlToText(html: string) {
  const el = document.createElement('div');
  el.textContent = html;
  return el.innerHTML;
}

/**
 * 将关键字用 <b> 包裹，并返回
 * 搜索用
 */
export function keywordHighlight(text: string, keyword: string) {
  if (keyword) {
    keyword = escapeRegChar(keyword); // 转义正则符号
    keyword = keyword.trim().replace(/ +/g, '|'); // 支持空格分隔字符串
    const reg = new RegExp(keyword, 'g');
    text = text.replace(reg, (findStr) => `_$$_${findStr}_/$$_`);

    const textContent = htmlToText(text);
    return textContent.replace(/_\$\$_(.+?)_\/\$\$_/g, '<b>$1</b>');
  }

  return htmlToText(text);
}

export function keywordTest(keyword: string, content: string) {
  const reg = createRegexp(keyword);

  return reg.test(content);
}

export function createRegexp(keyword: string) {
  keyword = escapeRegChar(keyword); // 转义正则符号
  keyword = keyword.trim().replace(/ +/g, '|'); // 支持空格分隔字符串
  return new RegExp(keyword);
}

export function search<T = any>(list: T[], keyword: string, keys: (keyof T)[]): T[] {
  const reg = createRegexp(keyword);
  const newList: T[] = [];

  list.forEach((item) => {
    const newItem: {
      [k in keyof T]?: any;
    } = {};

    let has = false;
    keys.forEach((k) => {
      if (reg.test(item[k] as string)) {
        newItem[k] = keywordHighlight(item[k] as string, keyword);
        has = true;
      }
    });

    if (has) {
      newList.push({
        ...item,
        ...newItem,
      });
    }
  });

  return newList;
}
