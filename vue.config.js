const path = require('path')

const resolve = paths => path.join(__dirname, `src/${paths}`)
const aliases = {
  '@': resolve(''),
  '@views': resolve('views'),
  '@components': resolve('components'),
  '@vuex': resolve('vuex'),
  '@routes': resolve('routes'),
}
module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [
    /* string or regex */
  ],
  productionSourceMap: false,
  chainWebpack: chain => {
    Object.keys(aliases).forEach(key => {
      chain.resolve.alias.set(key, aliases[key])
    })
  },
  configureWebpack: (config) => {
    console.log(`=========== 当前环境 ${process.env.NODE_ENV} =========`)
  },
  // CSS related options
  css: {
    extract: process.env.NODE_ENV !== 'development',
    sourceMap: false,
    loaderOptions: {
      less: {
        test: /\.scss$/,
        loader: 'scss-loader'
      }
    },
    modules: false
  },
  parallel: true,
  pwa: {},
  devServer: {
    open: process.platform === 'darwin',
    disableHostCheck: false,
    host: '0.0.0.0',
    port: 10000,
    https: false,
    hotOnly: true,
    hot: true,
    // proxy: {
    //   '/workbench': {
    //     target: 'https://test-apiboss-workstation.selleros.cn',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/workbench': ''
    //     }
    //   },
    // }
  },
  pluginOptions: {}
}