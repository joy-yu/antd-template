const {
  resolve
} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
const url = require('url')
const publicPath = '/admin'

module.exports = (options = {}) => ({
  entry: {
    index: ['react-hot-loader/patch', './src/main.js'],
    vendor: './src/vendor.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: options.dev ? '[name].js' : '[name].js?[hash]',
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: resolve(__dirname, 'src'),
            attrs: ['img:src', 'link:href']
          }
        }]
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader','less-loader']
      },
      {
        test: /favicon\.png$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new LodashModuleReplacementPlugin,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    new OpenBrowserPlugin({ url: 'http://localhost:8010/' })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    host: '127.0.0.1',
    port: 8010,
    proxy: {
      '/api/*': {
        //http://rapapi.org/mockjsdata/17271
        target: '',
        secure: false
        // changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },
    historyApiFallback: {
      index: publicPath
    },
    inline: true,
    hot: true
  },
  devtool: 'eval'
})
