const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 打包模式
  entry: {
    index: './examples/render2Vdom/lo-index.js',
  }, // 入口文件
  output: {
    filename: 'vue.js', // 输出文件名
  },
  resolve: {
    alias: {
      vue: path.resolve(__dirname, 'src/platforms/web/entry-runtime-with-compiler'),
      compiler: path.resolve(__dirname, 'src/compiler'),
      core: path.resolve(__dirname, 'src/core'),
      shared: path.resolve(__dirname, 'src/shared'),
      web: path.resolve(__dirname, 'src/platforms/web'),
      weex: path.resolve(__dirname, 'src/platforms/weex'),
      server: path.resolve(__dirname, 'src/server'),
      entries: path.resolve(__dirname, 'src/entries'),
      sfc: path.resolve(__dirname, 'src/sfc'),
      he: path.resolve(__dirname, 'src/compiler/parser/entity-decoder'),
    },
  },
  module: {
    rules: [
      {
        /* 将js文件转码成es5*/
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        /* 将vue文件转化为vue可以识别的组件模块*/
        test: /\.vue?$/,
        use: {
          loader: 'vue-loader',
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'examples/render2Vdom/index.html'),// 将文件打包，并将上面上面生成的js文件注入进去
      filename: 'index.html',
      inject: false,
    }),
  ],
  devServer: {
    host: 'localhost',
    // writeToDisk: true,
    port: 9527
  },
  devtool: 'sourcemap',
}
