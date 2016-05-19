var path = require('path');

module.exports = {

   entry: [
      path.resolve(__dirname, './src/index.js')
    ],

    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'app.js',
		publicPath: 'http://127.0.0.1:3000/'
    },

    module: {
		loaders: [{
			test: /\.jsx?$/, 
			loader: 'babel', 
			exclude: /node_modules/, 
			query: {presets:['react', 'es2015']}
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
  }
};