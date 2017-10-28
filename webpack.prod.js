const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new LodashModuleReplacementPlugin,
    // new BundleAnalyzerPlugin()
  ]
})
