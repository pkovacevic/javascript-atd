module.exports = {
    entry: './Scripts/src/index.js',
    output: {
        filename: './Scripts/dist/bundle.js'
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};


