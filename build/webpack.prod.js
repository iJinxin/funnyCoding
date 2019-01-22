/**
 * 生产环境
 * 提取共用模块，第三方资源打包长缓存，全局变量管理，懒加载，代码压缩，拆分chunk
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 提取css代码
// https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 在生产环境压缩css代码
// https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonWebpackConfig = require('./webpack.common.js');
const config = require('./config');
const utils = require('./utils');

// For NamedChunksPlugin
const seen = new Set();
const nameLength = 4;

const prodWebpackConfig = merge(commonWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      usePossCSS: true,
      extract: true
    })
  },
  devtool: config.build.devtool,
  // 打包后的文件放置在根目录下的dist文件中
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].js')
  },
  plugins: [
    // strict-circuits all Vue.js warning code
    // https://vue-loader-v14.vuejs.org/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    // 提取css
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:8].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash:8].css') // 按需加载时使用
    }),

    // 生成发布版的index.html
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      title: 'funnyCoding',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }),
    // keep chunk.id stable when chunk has no name
    // https://github.com/webpack/webpack.js.org/issues/2545
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name
      }
      const modules = Array.from(chunk.modulesIterable)
      if (modules.length > 1) {
        const hash = require('hash-sum')
        const joinedHash = hash(modules.map(m => m.id).join('_'))
        let len = nameLength
        while (seen.has(joinedHash.substr(0, len))) len++
        seen.add(joinedHash.substr(0, len))
        return `chunk-${joinedHash.substr(0, len)}`
      } else {
        return modules[0].id
      }
    }),
    // 代码压缩
    // keep module.id stable，node_modules包更新频率低，可长缓存在客户端。
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    // js分片 https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks
    // node_modules 被引用模块单独打包
    // 不属于node_modules的公用模块打包
    splitChunks: {
      chunks: 'all',  // all, async异步, inline同步, default async
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          name: 'vendors',
          chunks: 'initial'
        },
        elementUI: {
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          priority: 20, // element-ui单独打包，权重大于venders和app
          name: 'venders-elementUI'
        },
        // common: {
        //   test: /[\\/]src[\\/]/,
        //   minChunks: 2,
        //   name: 'commons'
        // }
      }
    },
    runtimeChunk: 'single',
    minimizer: [
      // js压缩
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set true if you want js source maps
      }),
      // css压缩
      new OptimizeCSSAssetsPlugin()
    ],
  }
});

module.exports = prodWebpackConfig;