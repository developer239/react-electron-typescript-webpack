const path = require('path')


const DIST_DIR = 'dist'

const config = {
  target: 'electron',
  entry: {
    counter: path.resolve(__dirname, 'src', 'renderer', 'counter', 'render.js'),
    main: path.resolve(__dirname, 'src', 'renderer', 'main', 'render.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, DIST_DIR),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}

module.exports = config
