const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        hot: true,
        proxy: {
            '/search': {
                target: 'http://localhost:3001',
                secure: false,
                pathRewrite: { '^/search': '/search/get_data_list' },
            },
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                // 'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],
});