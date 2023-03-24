const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		port: 4000,
		open: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(css|s[ac]ss)$/i,
				use: [
					'style-loader',
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
});
