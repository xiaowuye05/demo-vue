module.exports = {
  lintOnSave: 'warning',
  devServer: {
    port: 8080,
    proxy: {
      '/api': { // 将www.exaple.com印射为/apis
        target: 'http://10.108.142.239:3000', // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 需要rewrite的,
        }
      }
    }
  }
}
