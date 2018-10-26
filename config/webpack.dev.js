const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.common.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        stats: true,
        inline: true,
        contentBase: path.join(__dirname, './../src'),
        port: '8080',
        overlay: {
            warnings: true,
            errors: true
        },
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: [
                    path.join(__dirname, '../src'),
                ],
                loader: 'babel-loader',
            },
        ]
    },
});
