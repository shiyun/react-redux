var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');

module.exports = {	
   entry: [
      path.resolve(__dirname, './src/index.js')
    ],

    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'app.js',
		publicPath: 'http://127.0.0.1:3000/'
    },
    module: {
		loaders: [{
			test: /\.jsx?$/, 
			loader: 'babel', 
			exclude: /node_modules/, 
			query: {presets:['react', 'es2015', 'strage-0']}
		}, {
			test: /\.less/,
			loader: 'style-loader!css-loader!less-loader'
		}, {
			test: /\.(css)$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192'
		}]
  },
  plugins:  [
	  new webpack.DefinePlugin({
		  "process.env": {
			  NODE_ENV: JSON.stringify("production") //production development
		  }
	  }),
	  new webpack.optimize.UglifyJsPlugin({
		  compress: {
			  //supresses warnings, usually from module minification
			  warnings: false
		  }
	  })
  ]
			

};


