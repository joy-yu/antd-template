const {
  resolve
} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = '/admin'

module.exports = {
  entry: {
    index: ['react-hot-loader/patch', './src/main.js'],
    vendor: ['react-dom','react','axios','qs','mobx','react-router-dom','mobx-react']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js?[hash]',
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            "presets": ["env", "react", "stage-0"],
            "plugins": ["react-hot-loader/babel", "transform-decorators-legacy", "transform-runtime", "lodash", ["import", { libraryName: "antd", style: true }]]
          }
        }],
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
        use: [
          'style-loader',
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                // require('autoprefixer')()
              ]
            },
          },
          'less-loader'
        ]
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
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx']
  }
}
