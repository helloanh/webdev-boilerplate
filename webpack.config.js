// module.exports = {
// 	entry: './src/js/app.js',
// 	output: {
// 		path: __dirname + '/dist',
// 		filename: 'bundle.js'
// 	},
// 	module: {
// 		loaders: [
// 			{test: /\.css$/, loader: "style-loader!css-loader"},
// 			{test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query:{presets:['es2015']}}
// 		]
// 	}
// }

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};