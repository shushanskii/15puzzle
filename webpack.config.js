const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" },
      ],
    }),
  ]
}
