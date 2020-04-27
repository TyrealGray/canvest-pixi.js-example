const path = require('path');

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	mode: 'development',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/preset-env',
						],
					],
					plugins: [
					],
				},
			},
		],
	},
};