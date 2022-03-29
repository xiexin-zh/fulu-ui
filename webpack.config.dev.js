import { join } from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import ip from 'ip'
import commonConfig from './webpack.config.common'

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export default merge.smart(commonConfig, {
  devServer: {
    host: ip.address(),
    port: 8888,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    open: true,
    publicPath: '/',
    contentBase: join(__dirname, 'dist'),
  },
  entry: [join(__dirname, 'src', 'index.js')],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new webpack.ProvidePlugin({
      Mock: 'mockjs',
      MockAdapter: 'axios-mock-adapter',
    }),
  ],
  devtool: 'inline-source-map',
})
