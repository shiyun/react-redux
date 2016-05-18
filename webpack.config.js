var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        filename: 'app.js',
		path: path.resolve(__dirname, './public'),
        publicPath: 'http://127.0.0.1:3000/'
    },
    module: {
		loaders: [{
		  test: /\.jsx?$/,
		  exclude: /node_modules/,
		  loader: 'babel', 
		  query: {presets: ['es2015', 'react']}
		
		},{
		  test: /\.js$/,
		  exclude: "/node_modules/",
		  loader: 'react-hot!jsx-loader?harmony'
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