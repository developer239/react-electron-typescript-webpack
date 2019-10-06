const path = require('path')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: []
}
