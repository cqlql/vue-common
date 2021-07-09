// 子项目 vue.config
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const options = {
  lintOnSave: false,
  publicPath: '',
  outputDir: resolve('dist')
}

const projetcName = path.basename(__dirname)

module.exports = {
  ...options,

  // chainWebpack文档 https://github.com/neutrinojs/webpack-chain/tree/v4
  chainWebpack (config) {
    config.entryPoints
      .delete('app')

    config
      .entry(projetcName)
      .add(`./projects/${projetcName}/src/main.js`)

    config
      .plugin('html')
      .tap(args => {
        const arg = args[0]
        arg.template = resolve('public/index.html')
        // arg.filename = projetcName + '.html'// 更改 index.html 名字
        return args
      })

    config
      .plugin('copy')
      .tap(args => {
        const arg = args[0].patterns[0]
        arg.from = resolve('public')
        arg.to = options.outputDir
        arg.globOptions.ignore.push(path.resolve(arg.from, 'index.html').replace(/\\/g, '/'))
        return args
      })
  }
}
