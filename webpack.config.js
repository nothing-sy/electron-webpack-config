

module.exports={
  entry: "./app/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist'

  },
  
  module: {
    rules: [ {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test:/\.html$/,
        use:{
          loader:'html-loader'
        }

      }
    ]
  }

}

