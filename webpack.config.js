const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
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
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: '[name].bundle.[hash:4].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    externals: {
        jquery: 'jQuery',
    },
    resolve: {
        alias: {
            '@json': path.resolve(__dirname, 'json'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(css|styl)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'stylus-loader',
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
                exclude: /node_modules/,
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
            {
                test: /\.(mp3)(\?.*)?$/,
                loader: 'url-loader',
            },
        ],
    },
};