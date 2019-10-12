const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('../../renderer.dev.config')

module.exports = merge.smart(baseConfig, {
  entry: {
    mainWindow: ['@babel/polyfill', path.resolve(__dirname, '..', '..', '..', 'src', 'renderer', 'main', 'index.tsx')],
  },
  devServer: {
    port: 2005,
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
})
