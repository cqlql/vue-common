/// <reference types="vitest" />
import type { UserConfig, ConfigEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugin'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    base: '',
    resolve: {
      alias: {
        '@/': pathResolve('src') + '/', // 设置 @ 指向 src
      },
    },
    plugins: createVitePlugins(isBuild),
    server: {
      // Listening on all local IPs
      host: true,
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome70',
      chunkSizeWarningLimit: 2000,
    },
    test: {
      include: ['tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  }
}
