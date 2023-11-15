import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// import IconsResolver from 'unplugin-icons/resolver';

export default function autoImport() {
  const pathSrc = path.resolve(process.cwd(), 'types');
  const include = [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/];
  return [
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      include,

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
        // ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        // IconsResolver({
        //   prefix: 'Icon',
        // }),
      ],

      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),

    Components({
      globs: [],
      include,
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),

        // Auto register icon components
        // 自动注册图标组件
        // IconsResolver({
        //   prefix: 'Icon',
        // }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        // ElementPlusResolver(),
      ],

      dts: path.resolve(pathSrc, 'auto-components.d.ts'),
    }),
  ];
}
