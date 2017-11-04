const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    entry: {
        index: [
            'react-hot-loader/patch',
            'webpack-dev-server/client',
            'webpack/hot/only-dev-server',
            './src/index.js',
        ],
        vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        hot: true,
        inline: true,
        proxy: {
            '/search': {
                target: 'http://localhost:3001',
                secure: false,
                pathRewrite: { '^/search': '/search/get_data_list' },
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