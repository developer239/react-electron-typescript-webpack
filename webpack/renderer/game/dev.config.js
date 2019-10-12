const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('../../renderer.dev.config')

module.exports = merge.smart(baseConfig, {
  entry: {
    gameWindow: ['@babel/polyfill', path.resolve(__dirname, '..', '..', '..', 'src', 'renderer', 'game', 'index.tsx')],
  },
  devServer: {
    port: 2004,
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
})
