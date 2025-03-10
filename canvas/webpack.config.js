const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: "./src/index.ts",
    babel: "./src/babel.js",
    tree_index: "./src/tree-index.ts"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve both TS and JS files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./draw.html", // Injects bundled JS into HTML
    }),
  ],
};
