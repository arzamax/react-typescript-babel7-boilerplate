const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'public', 'index.html'),
  filename: 'index.html',
  inject: true,
});

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff(2)?|ttf|eot|)$/i,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'images'
        },
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, DefinePluginConfig, MiniCssExtractPluginConfig],
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
};
