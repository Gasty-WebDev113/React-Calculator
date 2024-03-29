const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports =  {

    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },

    output:{
        filename: './app.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|gif|woff|mp4|ico)$/,
                use: [{
                    loader:'url-loader',
                    options: {
                        limit: 0,
                    },
                }],
            }]
        },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "plugins",
            template: path.resolve(__dirname, "public/index.html"),
            favicon: path.resolve(__dirname, "public/logo.ico")
        })
    ]
}