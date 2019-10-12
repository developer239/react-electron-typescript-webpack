const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('../../renderer.config')

module.exports = merge.smart(baseConfig, {
  mode: 'production',
  entry: {
    gameWindow: ['@babel/polyfill', path.resolve(__dirname, '..', '..', '..', 'src', 'renderer', 'game', 'index.tsx')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'game-window.html',
      chunks: ['gameWindow']
    }),
  ]
})
