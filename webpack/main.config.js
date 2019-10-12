const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./base.config')

module.exports = merge.smart(baseConfig, {
  target: 'electron-main',
  entry: {
    main: path.resolve(__dirname, '..', 'src', 'main', 'index.ts'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
})
