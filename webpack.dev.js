const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const ROOT = path.resolve(__dirname);

module.exports = merge(baseConfig, {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:8000',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            './src/index.js',
        ],
        vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: ROOT + '/dist',
        compress: true,
        port: 8000,
        hot: true,
        inline: true,
        openPage: 'index.html',     // 默认打开index.html
        proxy: {
            '/fcgi-bin/': {
                target: 'http://s.music.qq.com/',
                secure: false,
                // pathRewrite: { '^/search': '/search/get_data_list' },
            },
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // 'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],
});