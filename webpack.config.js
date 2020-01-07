const path = require('path');

module.exports = {
    entry: {
        app: ['./src/app/index.js']
    },
    output: {
        filename: '[name].js', // [chunkhash]
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }
        ]
    }
}