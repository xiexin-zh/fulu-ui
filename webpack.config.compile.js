const ip = require('ip');
const path = require('path');
const process = require('process');
const webpack = require('webpack');
const SpritesmithPlugin = require('webpack-spritesmith');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { version: buildVersion } = require('./package.json');
const npmScriptName = process.env.npm_lifecycle_event;
const IS_DEV = npmScriptName !== 'build';
const svgDirs = [
	require.resolve('antd').replace(/warn\.js$/, ''),
	path.join(__dirname, 'src'),
];

const configs = {
	entry: {
		index:  `./dev/${npmScriptName === 'demo' || !IS_DEV ? 'demo' : 'manage'}Entry`,
	},
	mode: !IS_DEV ? 'production' : 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]-'+ buildVersion +'.js',
		chunkFilename: '[name]-'+ buildVersion +'.js',
		publicPath: '/',
	},
	devServer: {
		hot: true,
		open: true,
		port: 10010,
		inline: true,
		host: ip.address(),
		historyApiFallback: true,
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		}, {
			test: /\.less$/,
			use: [{
				loader: 'style-loader',
			}, {
				loader: 'css-loader',
			}, {
				loader: 'less-loader',
			}]
		}, {
			test: /\.js(x)?$/,
			exclude: /(node_modules)/,
			use: ['babel-loader', 'eslint-loader'],
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			use: [
				{
					loader: 'babel-loader',
				},
				{
					loader: '@svgr/webpack',
					options: {
						babel: false,
						icon: true,
					},
				},
			],
			include: svgDirs,
		}, {
			test: /\.(jpeg|jpg|gif)$/i,
			use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
					}
			}]
		}, {
			test: /\.png$/,
			use: ['file-loader?name=[hash].[ext]']
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)\w*/,
			include: path.resolve(__dirname, 'src/assets/fonts'),
			use: [{
				loader: 'url-loader',
				options: {
					limit: 1000000,
				}
			}]
		}],
	},
	plugins: [
		new CleanWebpackPlugin(['lib', 'dist']),
		new HtmlWebpackPlugin({
			title: '私有组件库',
			filename: './index.html',
			template: './views/index.html',
		}),
		...(IS_DEV ? 
			[new webpack.HotModuleReplacementPlugin()]: []),
		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh_CN/),
		new SpritesmithPlugin({ // 生成雪碧图插件
			src: {
				cwd: path.join(__dirname, 'src/assets/sprite'),
				glob: '*.png',
			},
			target: {
				image: path.join(__dirname, 'src/assets', 'sprite.png'),
				css: path.join(__dirname, 'src/assets', 'sprite.less'),
			},
			apiOptions: {
				cssImageRef: '~sprite.png',
			},
		}),
	],
	resolve: {
		extensions: ['.jsx', '.js'],
		modules: ['node_modules', 'assets'],
		alias: {
			models: path.join(__dirname, 'dev', 'models'),
			component: path.resolve(__dirname, 'src', 'component'),
		},
	}
};

module.exports = configs;