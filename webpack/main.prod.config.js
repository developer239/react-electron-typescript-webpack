const merge = require('webpack-merge')

const baseConfig = require('./main.config')

module.exports = merge.smart(baseConfig, {
  mode: 'production'
})
