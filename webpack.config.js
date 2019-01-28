
const webpack =require('webpack');
const {spawn}= require('child_process');

const port = process.env.PORT || 8080;
const publicPath = `http://localhost:${port}/`;
module.exports={
  entry: "./app/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist',
    publicPath
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
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
],
devServer: {
  inline:true,
  hot:true,
  before() {
    if (process.env.HOT) {
      console.log('Starting Main Process...');
      spawn(
        'npm',
        ['run', 'start-dev'],
        { shell: true, env: process.env, stdio: 'inherit' }
      )
      .on('close', code => process.exit(code))
      .on('error', spawnError => console.error(spawnError));
    }
  }
},
node:{
  __dirname:true
}

}

