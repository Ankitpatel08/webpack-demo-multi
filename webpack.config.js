var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
    entry: {
        app1 : './src/app1',
        app2 : './src/app2'
    },
    output: {
        path: './dist',
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module:{
        loaders: [
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}

module.exports = config;