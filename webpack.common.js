const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

console.log(__dirname);

module.exports = {
    entry: {
        index: './src/index.js',
        vendor: ['jquery', 'lodash'],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: 'src/index.html',
            favicon: false,
        }),
        new webpack.optimize.CommonsChunkPlugin({ // 提取公共模块 需最先加载公共模块
            name: 'commonModule',
        }),
    ],
    output: {
        filename: '[name].bundle.[hash:4].js',
        path: path.resolve(__dirname, 'dist'),
    },
    /* externals: {
        jquery: 'jQuery',
    }, */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css?[hash:8]',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};