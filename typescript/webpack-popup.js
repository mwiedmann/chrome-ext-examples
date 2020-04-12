const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/popup.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'popup.js'
  },
  resolve: {
    // Need to add the .tsx, .ts extensions for ts-loader
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/manifest.json' }
    ]),
    new HtmlWebpackPlugin({
      template: 'src/popup.ejs',
      minify: false
    })
  ]
}

module.exports = config