
var webpack = require("webpack");
var path = require("path");

var RESOURCES_JSX = path.resolve(__dirname, "resources/js");
var OUTPUT = path.resolve(__dirname, "output");

var nodeEnv = process.env.NODE_ENV || 'development';
var isProd = nodeEnv === 'production';

var config = {
	devtool: isProd ? 'cheap-module-source-map' : 'eval',
	entry : RESOURCES_JSX + "/App.js",
	output : {
		path : OUTPUT,
		filename : "bundle.js"
	},
	devServer: {
		//contentBase: "./resources/pages",
		hot: true,
		historyApiFallback: true,
		inline: true
	 },
	module: {
		loaders: [{
			test : /\.jsx?/,
			include: RESOURCES_JSX,
			loader: "babel-loader",
			query: {
		        presets: ['es2017', 'react']
		    }
		}]
	}
};

if (isProd) {
    config.devtool = false;
    config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
	      'process.env': {NODE_ENV: JSON.stringify('production')}
	})
  ];
};

module.exports = config;