const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT = path.resolve(__dirname);

module.exports = {
    output: {
        filename: '[name].bundle.[hash:4].js',
        path: ROOT + '/dist/',
        publicPath: '/',
    },
    externals: {
        jquery: 'jQuery',
    },
    resolve: {
        alias: {
            '@json': path.resolve(__dirname, 'json'),
            '@': ROOT
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
                        // options: {
                        //     modules: true,   // 是否开启CSS模块 class={style.class}规则
                        //     localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        // }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         sourceMap: true
                    //     }
                    // },
                    {
                        loader: 'stylus-loader',
                    },
                ],
                exclude: /node_modules/
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
                        loader: 'file-loader?name=img/[hash].[ext]'
                    },
                ],
                exclude: /node_modules/
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
    plugins: [
        new CleanWebpackPlugin([ROOT + '/dist/']),
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
};