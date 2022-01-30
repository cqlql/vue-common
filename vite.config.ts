import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import windiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

import { configSvgIconsPlugin } from './build/vite/plugin/svgSprite'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    base: '',
    resolve: {
      alias: {
        '@/': pathResolve('src') + '/', // 设置 @ 指向 src
      },
    },
    plugins: [vue(), windiCSS(), configSvgIconsPlugin(isBuild)],
    server: {
      // Listening on all local IPs
      host: true,
    },
  }
}
