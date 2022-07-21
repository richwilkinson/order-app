module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // module: { rules: [ ... ] }
    devServer: {
        index: index.html
    },
 };