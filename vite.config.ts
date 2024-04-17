import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoImport from './build/autoImport';
import { configHtmlPlugin } from './build/html';
import Icons from 'unplugin-icons/vite';
import tsNameof from 'vite-plugin-ts-nameof';
import { analyzer } from 'vite-bundle-analyzer';
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build';

  return {
    server: {
      host: true,
    },
    plugins: [
      tsNameof(),
      vue(),
      vueJsx(),
      configHtmlPlugin({ isBuild }),
      // createSvgIconsPlugin({
      //   iconDirs: [fileURLToPath(new URL('./src/assets/icons', import.meta.url))],
      //   svgoOptions: isBuild,
      //   // default
      //   symbolId: 'icon-[dir]-[name]',
      // }),
      Icons({
        autoInstall: true,
      }),
      autoImport(),
    ].concat(mode === 'analyzer' ? [analyzer()] : []), // 打包分析
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // 修复偶发性字体图标乱码问题
    // 原因：因为 css 中类似的 "\e783" 会被转换成显示成显示字符
    esbuild: { charset: 'ascii' },
    build: {
      outDir:
        mode === 'production'
          ? 'dist'
          : 'Z:/' + { test: 'front.dev.test', testp: 'front.dev' }[mode],
      rollupOptions: {
        // https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97
        // https://rollupjs.org/guide/en/#outputmanualchunks
        output: {
          manualChunks: {
            // home: ['src/views/sys/login/LoginView.vue'],
            system: [
              'src/views/system/member/MemberManage.vue',
              'src/views/system/dept/DepartmentManage.vue',
              'src/views/system/sub-manager/SubManager.vue',
              'src/views/system/role/RoleManage.vue',
            ],
            application: [
              'src/views/application/AppManagement/AppManagement.vue',
              'src/views/application/ApprovalCenter/ApprovalCenter.vue',
              'src/views/application/AppGroup/AppGroup.vue',
              'src/views/application/TempForm/TempForm.vue',
              'src/views/application/AppWorkbench2/AppWorkbench.vue',
              'src/views/application/AppAdminHome2/AppAdminHome.vue',
              'src/views/application/FormDesignUpdate/FormDesignUpdate.vue',
            ],
          },
        },
      },
    },
  };
});
