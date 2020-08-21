const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|json)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(js|ts?x)$/i,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      Apps: path.resolve(__dirname, 'src/apps'),
      Assets: path.resolve(__dirname, 'src/assets'),
      Components: path.resolve(__dirname, 'src/components'),
      Hooks: path.resolve(__dirname, 'src/hooks'),
      Models: path.resolve(__dirname, 'src/models'),
      Pages: path.resolve(__dirname, 'src/pages'),
      Routers: path.resolve(__dirname, 'src/routers'),
      Services: path.resolve(__dirname, 'src/services'),
      Stores: path.resolve(__dirname, 'src/stores'),
      Utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
