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
	          	// loads any image file with these extensions and 
	          	// emits the file with a name that is the result of 
	          	// the MD5 hash of the file's contents in the dist directory
	            loader: 'css-loader'
	          }, {
	            loader: 'sass-loader'
	          }],
	          fallback: 'style-loader'
	        })
	    },
      	{
          test:  /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              // this compresses the file
              loader: 'image-webpack-loader', 
              options: {
                bypassOnDebug: true,
              },
            },
          ],
      	}
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};