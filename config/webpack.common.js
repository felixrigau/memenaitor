const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
  
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        libraryTarget: 'umd',
        publicPath: '',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: [
                    path.join(__dirname, '../src')
                ],
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            options: { minimize: true },
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.png', '.jpg',],
        modules: ['node_modules'],
        alias: {
            Components: path.resolve(__dirname, '../src/components'),
            Actions: path.resolve(__dirname, '../src/actions'),
            Reducers: path.resolve(__dirname, '../src/reducers'),
            Utils: path.resolve(__dirname, '../src/utils')
        },
    },
};
