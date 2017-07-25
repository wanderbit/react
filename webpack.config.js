var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            /* {
             test: /\.less$/,
             loader: "style-loader!css-loader!less"
             }*/
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]

    }
};
