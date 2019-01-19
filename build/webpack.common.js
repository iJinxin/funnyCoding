const path = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config');
const utils = require('./utils');

// 处理路径
const resolve = (dir) => {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.ems.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   // https://vue-loader.vuejs.org/guide/asset-url.html#transform-rules
        //   transformAssetUrls: {
        //     video: ['src', 'poster'],
        //     source: 'src',
        //     img: 'src',
        //     image: 'xlink:href'
        //   }
        // }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: file => (
        //   /node_modules/.test(file) &&
        //     !/\.vue\.js/.test(file)
        // ),
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          outputPath: 'img/'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'video/'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'font/'
        }
      }
    ]
  },
  plugins: [
    // The plugin is required!
    // https://vue-loader.vuejs.org/guide/#manual-configuration
    new VueLoaderPlugin()
  ]
};
