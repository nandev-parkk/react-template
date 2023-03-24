const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const os = require('os');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		publicPath: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(css|s[ac]ss)$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash].css',
			chunkFilename: '[name].[chunkhash].chunk.css',
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin({
				parallel: os.cpus().length - 1,
			}),
		],
	},
});
