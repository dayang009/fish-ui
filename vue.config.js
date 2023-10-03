'use strict'

// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // 选项
  lintOnSave: true,
  outputDir: 'dist',
  assetsDir: 'static',
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 3210,
    https: false,
    open: true
  },

})
