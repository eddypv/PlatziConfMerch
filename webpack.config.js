const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPluguin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js', // punto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:'/' // para utilizar en react-router-dom
  },
  resolve: {
    // que elementos que va escuchar
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPluguin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPluguin({
      filename: 'assets/[name].css',
    }),
    new Dotenv()

  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
    historyApiFallback:true // para utilizar en react-router-dom
  },
};
