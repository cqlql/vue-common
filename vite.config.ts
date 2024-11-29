import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoImport from './build/autoImport';
import { configHtmlPlugin } from './build/html';
import Icons from 'unplugin-icons/vite';
import tsNameof from 'vite-plugin-ts-nameof';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import VueDevTools from 'vite-plugin-vue-devtools';
import { analyzer } from 'vite-bundle-analyzer';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build';

  return {
    server: {
      host: true,
      proxy: {
        '/api': 'https://innerapi.xiaodingtie.com',
        // '/api': 'https://testinnerapi.xiaodingtie.com',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 解决 scss2.0 legacy JS API 警告，参考: https://blog.csdn.net/CssHero/article/details/142686148
          api: 'modern-compiler',
        },
      },
    },
    plugins: (() => {
      const plugins = [
        tsNameof(),
        vue(),
        vueJsx(),
        VueDevTools(),
        configHtmlPlugin({ isBuild }),
        createSvgIconsPlugin({
          iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
          svgoOptions: isBuild,
          // default
          symbolId: 'icon-[dir]-[name]',
        }),
        Icons({
          autoInstall: true,
        }),
        autoImport(),
      ];

      // 打包分析
      if (mode === 'analyzer') {
        plugins.push(analyzer());
      }

      return plugins;
    })(),

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // 修复偶发性字体图标乱码问题
    // 原因：因为 css 中类似的 "\e783" 会被转换成显示成显示字符
    esbuild: { charset: 'ascii' },
    build: {
      // sourcemap: true,
      outDir: getOutDir(mode),
      assetsDir: 'assets' + require('./package.json').version,
      // rollupOptions: {
      //   // https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97
      //   // https://rollupjs.org/guide/en/#outputmanualchunks
      //   output: {
      //     manualChunks: {
      //       home: ['src/views/sys/login/LoginView.vue'],
      //       system: [
      //         'src/views/system/member/MemberManage.vue',
      //         'src/views/system/dept/DepartmentManage.vue',
      //         'src/views/system/sub-manager/SubManager.vue',
      //         'src/views/system/role/RoleManage.vue',
      //       ],
      //       application: [
      //         'src/views/application/AppManagement/AppManagement.vue',
      //         'src/views/application/ApprovalCenter/ApprovalCenter.vue',
      //         'src/views/application/AppGroup/AppGroup.vue',
      //         'src/views/application/TempForm/TempForm.vue',
      //         'src/views/application/AppWorkbench2/AppWorkbench.vue',
      //         'src/views/application/AppAdminHome2/AppAdminHome.vue',
      //         'src/views/application/FormDesignUpdate/FormDesignUpdate.vue',
      //       ],
      //     },
      //   },
      // },
    },
  };
});

function getOutDir(mode: string) {
  let outDir = 'dist';
  switch (mode) {
    case 'testdev':
      outDir = 'Z:/front.dev.test';
      break;
    case 'testdev2':
      outDir = 'Z:/front.dev.test/123';
      break;
    case 'test':
      outDir = 'Y:/';
      break;
  }
  return outDir;
}
