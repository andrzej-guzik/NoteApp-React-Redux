const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [ "react", "react-dom", "react-router", "react-redux", "redux" ];

const config = {
	entry: {
		scripts: "./src/index.js",
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
	},
	 module: {
        rules: [
            {
				test: /\.jsx?$/,
                use: ["react-hot-loader", "babel-loader", "eslint-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: "css-loader?importLoaders=1!postcss-loader"
                })
            }
        ]
    },
    plugins: [
    	// new webpack.optimize.CommonsChunkPlugin({
		// 	names: ["vendor", "manifest"]
        // }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

module.exports = config;
