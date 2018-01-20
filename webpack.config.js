const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')


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
  plugins: [
    new CleanWebpackPlugin([DIST_DIR]),
    new UglifyJSPlugin(),
  ],
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
