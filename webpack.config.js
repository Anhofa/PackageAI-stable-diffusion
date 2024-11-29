const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  devtool: 'eval-source-map', // 快速且调试友好
  entry: './src/index.js', // 项目的入口文件
  // output: {
  //   filename: 'bundle.js', // 打包后的文件名
  //   path: path.resolve(__dirname, 'dist'), // 打包后的目录
  // },
  output: {
    filename: '[name].[contenthash].js', // 使用占位符 [name] 和 [contenthash]
    path: path.resolve(__dirname, 'dist'), // 确保输出到 dist 目录
    clean: true, // 清理旧文件
  }, 

  cache:{
    type: 'filesystem',//使用文件缓存
  },
  devServer:{
    hot:true, // 开启热更新
    open:true, // 自动打开浏览器
  },
  module: {
    noParse: /jquery|lodash/, // 忽略某些库的依赖关系，减少打包时间
    rules:[
        {
            test:/\.(js|jsx)$/i,
            exclude:/node_modules/,
            use:['babel-loader',
                'thread-loader',
            ],
        },
        {
            test:/\.css$/i,
            use:['style-loader','css-loader']
        },
        {
            test: /\.(png|jpg|gif|svg)$/i,
            type: 'asset/resource', // 处理 SVG 等静态资源
        },
    ],
  },
  optimization: {
    splitChunks: {
        chunks: 'all',
        minSize: 10000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 30000,
        cacheGroups: {
            defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
            },
            common: {
                test: /[\\/]src[\\/](utils|components)[\\/]/,
                minChunks: 2,
                priority: -5,
                reuseExistingChunk: true,
            },
        },
    },
  },

  plugins:[
    new CleanWebpackPlugin(), // 自动清理dist目录
    // new FriendlyErrorsWebpackPlugin(), // 友好的错误提示
    new BundleAnalyzerPlugin(), // 分析打包后的文件
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // 解析文件扩展名
  },
  stats:{
    assets: true, // 显示输出资源信息
    modules: false, // 显示输出模块信息
    chunks:true, // 显示输出块信息
    chunkModules:false, // 显示输出块模块信息
  },
  mode: 'development' // 开发模式
});