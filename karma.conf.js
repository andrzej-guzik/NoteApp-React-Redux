const webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
	config.set({
		browsers: ["Chrome"],
		frameworks: ["mocha"],
		files: ["test/**/*.test.js"],
		preprocessors: {
			"test/**/*.test.js": ["webpack", "sourcemap"]
		},
		reporters: ["mocha"],
		client: {
			mocha: {
				timeout: "5000"
			}
		},
		webpack: webpackConfig
	});
};
