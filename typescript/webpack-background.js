const config = {
  entry: './src/background.ts',
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
    filename: 'background.js'
  },
  resolve: {
    // Need to add the .tsx, .ts extensions for ts-loader
    extensions: [ '.tsx', '.ts', '.js' ],
  }
}

module.exports = config