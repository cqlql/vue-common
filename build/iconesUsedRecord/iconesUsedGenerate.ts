import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dataFileName = 'icones-used.ts';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFilePath = path.join(__dirname, '../../src/components/Icon/demo/list', dataFileName);
const srcPath = path.join(__dirname, '../../src');
const ignore = ['icones-used.ts', 'IconPageDemo.vue'];

// const logFilePath = path.join(__dirname, 'log.json');

class IconesUsedGenerate {
  data: Set<string> = new Set();
  constructor() {
    this.openDataFile();

    this.readAllFile((iconPath) => this.data.add(iconPath));

    // fs.writeFileSync(logFilePath, JSON.stringify(Array.from(this.data)), 'utf8');

    this.writeDataFile();
  }

  openDataFile() {
    fs.open(dataFilePath, function (err) {
      if (err) {
        if (err.code === 'ENOENT') {
          fs.writeFileSync(dataFilePath, '', 'utf8');
        }
        console.error(err);
      }
    });
  }

  eachAllFile(callback: (filePath: string) => void) {
    function readList(parentPath: string) {
      const files = fs.readdirSync(parentPath);
      files.forEach((name) => {
        if (ignore.includes(name)) return;
        const currentPath = path.join(parentPath, name);
        const isDirectory = fs.statSync(currentPath).isDirectory();
        if (isDirectory) {
          readList(currentPath);
        } else {
          callback(currentPath);
        }
      });
    }

    readList(srcPath);
  }

  readIconPath(filePath: string, callback: (iconPath: string) => void) {
    fs.openSync(filePath, 'r');
    const content = fs.readFileSync(filePath, 'utf8');
    const reg = /'(~icons[^']+)/g;
    const result = content.match(reg);
    result?.forEach((item) => {
      callback(item.substring(1));
    });
  }

  readAllFile(callback: (iconPath: string) => void) {
    this.eachAllFile((filePath) => {
      this.readIconPath(filePath, (iconPath) => {
        callback(iconPath);
      });
    });
  }

  writeDataFile() {
    const imports: string[] = [];
    const exports: string[] = [];
    Array.from(this.data).forEach((iconPath) => {
      const iconName = toUpperCamelCase(iconPath.replace(/^~icons\//, 'icon-'));
      imports.push(`import ${iconName} from '${iconPath}';`);
      exports.push(`{name:'${iconName}',icon:${iconName},path:'${iconPath}'}`);
    });

    fs.writeFileSync(
      dataFilePath,
      '/* eslint-disable */\n/* prettier-ignore */\n' +
        '/* 此文件为自动生成，其中导出不能在正式环境中使用 */\n' +
        imports.join('\n') +
        '\n\n' +
        'export default [\n' +
        '  ' +
        exports.join(',\n  ') +
        '\n];',
      'utf8',
    );
  }
}

new IconesUsedGenerate();

function toUpperCamelCase(str: string) {
  const arr = str.replace(/[/:]/g, '-').split('-');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return result;
}
