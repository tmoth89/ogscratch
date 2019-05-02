const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  // mode: process.env.NODE_ENV,
  mode: 'development',

  devServer : {
    publicPath: 'http://localhost:8080/build/',
    compress: true,
    historyApiFallback: true,
    proxy: {

      '/api': 'http://localhost:3000',

      // '/': 'http://localhost:3000/',
      '/api': 'http://[::1]:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
}
