// vue.config.js
const path = require('path')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
    // 开发生产共同配置
    config.resolve.alias['components'] = path.resolve(__dirname, './src/components')
    config.resolve.alias['views'] = path.resolve(__dirname, './src/views')
  },
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8085
  }
}
