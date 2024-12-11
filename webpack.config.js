module.exports = {
	entry: "./src/index.tsx", // Set the correct entry file path
	output: {
		path: __dirname + "/public", // Where Webpack bundles the code
		filename: "bundle.js",
	},
	mode: "development", // Set the mode to development
	resolve: {
		extensions: [".ts", ".tsx", ".js"], // Resolve TypeScript and JavaScript files
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/, // Handle .ts and .tsx files
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/, // Handle CSS files
				use: ["style-loader", "css-loader"],
			},
		],
	},
	devServer: {
		static: "./public", // Serve content from the 'public' directory
	},
};
