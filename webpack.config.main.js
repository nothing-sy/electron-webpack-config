var path =require('path');
module.exports = {
  target: 'electron-main',//编译为electron 主进程
  entry:"./main.dev.js",
  output: {
    filename: 'main.pro.js',
    path: __dirname + '/dist'

  },
  module: {
    rules: [ {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }


}