const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('../../renderer.config')

module.exports = merge.smart(baseConfig, {
  mode: 'production',
  entry: {
    mainWindow: ['@babel/polyfill', path.resolve(__dirname, '..', '..', '..', 'src', 'renderer', 'main', 'index.tsx')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'main-window.html',
      chunks: ['mainWindow']
    }),
  ]
})
