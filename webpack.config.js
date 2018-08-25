const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index_bundle.js'
  },
  /*module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },*/
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      //title: 'Webpack React Example',
      template: './src/templates/index.html'
    })
  ],
  resolve: {
    modules: [
      path.resolve("./src"),
      path.resolve("./node_modules")
    ],
    extensions: [".js", ".jsx"]
  }
}; 