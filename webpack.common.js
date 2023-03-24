const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.tsx'),
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{ test: /\.(png|jpe?g|gif)$/, use: 'file-loader' },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
		}),
		new Dotenv(),
	],
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],
							['svgo', { plugins: [{ removeViewBox: false }] }],
						],
					},
				},
			}),
		],
	},
};
