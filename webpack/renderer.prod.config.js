const merge = require('webpack-merge')

const baseConfig = require('./renderer.config')

module.exports = merge.smart(baseConfig, {
  mode: 'production'
})
