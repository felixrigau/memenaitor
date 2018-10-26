const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');

module.exports = merge(baseConfig, {
    mode: 'none',
    devtool: 'source-map',
});