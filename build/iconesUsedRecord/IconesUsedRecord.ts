import fs from 'fs';
import path from 'path';
import type { PluginOption } from 'vite';
export default function IconesUsedRecord(): PluginOption {
  const iconsRecord: Record<string, 1> = {};
  function toPascalCase(str: string): string {
    return str.replace(/^~icons/, 'Icon').replace(/[-/]([a-z\d])/g, function (match, letter) {
      return letter.toUpperCase();
    });
  }

  return {
    name: 'icones-used-record', // 必须的，将会在 warning 和 error 中显示
    transform(_code, id) {
      if (/^~icons/.test(id) && !iconsRecord[id]) {
        iconsRecord[id] = 1;

        const iconsNameRecord: Record<string, 1> = {};

        const iconDataImport: string[] = [];
        const iconDataExport: string[] = [];
        // const iconDataExportDefault = ``;
        Object.keys(iconsRecord).forEach((id) => {
          const name = toPascalCase(id);
          if (iconsNameRecord[name]) return;
          iconsNameRecord[name] = 1;
          const importCode = `import ${name} from '${id}';`;
          iconDataImport.push(importCode);
          iconDataExport.push(`${name}`);
          // iconDataExportDefault += `  ${name}: "${importCode}",\n`;
        });
        // iconDataExportDefault = `export default {\n${iconDataExportDefault}}`;

        // prettier-ignore
        const textContent = `/* eslint-disable */\n/* prettier-ignore */\n${iconDataImport.join('\n')}\n\nexport {\n  ${iconDataExport.join(',\n  ')},\n};\n`;

        fs.writeFileSync(
          path.resolve(process.cwd(), 'src/views/demos/icons/iconesUsed.ts'),
          textContent,
          'utf8',
        );
      }
    },
  };
}
