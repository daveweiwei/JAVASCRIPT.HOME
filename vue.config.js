'use strict'
const path = require('path')
const defaultSetting = require('./src/settings.js')

const name = defaultSetting.title

//拼接根路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  //关于webpack的配置
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
