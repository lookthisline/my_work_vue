// NOTE: 配置参考 <https://cli.vuejs.org/zh/config/#css-loaderoptions>

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development' ? 'warning' : false,
  productionSourceMap: false,
  filenameHashing: true,
  devServer: {
    host: '0.0.0.0',
    port: process.env.VUE_APP_PORT || 80,
    open: true,
    disableHostCheck: true
    // proxy: [process.env.VUE_APP_BASE_API],
    // proxy: {
    //     // NOTE: <https://cli.vuejs.org/zh/config/#devserver-proxy>
    //     '/api': {
    //         target: [process.env.VUE_APP_BASE_API],
    //         ws: false,
    //         secure: true,
    //         changeOrigin: true,
    //         pathRewrite: {
    //             ['^' + process.env.VUE_APP_BASE_API]: ''
    //         }
    //     }
    // }
  },
  configureWebpack: {}
};
