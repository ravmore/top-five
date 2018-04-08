const path = require('path');

module.exports = [{
	entry: './src/client/js/index.jsx',
	output: {
		path: path.join(__dirname, 'static/js'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css'],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [ {loader: 'style-loader '}, {loader: 'css-loader'} ],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
}];