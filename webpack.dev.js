const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 8010,
    proxy: {
      '/api/*': {
        //http://rapapi.org/mockjsdata/17271
        target: 'http://121.43.59.56/',
        secure: false
        // changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },
    historyApiFallback: {
      index: common.output.publicPath
    },
    inline: true,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ]
})
