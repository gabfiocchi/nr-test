const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/app/index.js']
    },
    output: {
        filename: '[name].js', // [chunkhash]
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     Promise: 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
        //     fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        // }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/app/index.html'
        })
    ]
};
