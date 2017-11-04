const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev');

const app = express();
const compiler = webpack(config);
const port = 3000;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

// 注册中间件
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true },
    lazy: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true,
    },
}));

app.use(WebpackHotMiddleware(compiler));

app.get('/', (req, res) => {
    res.sendFile('/dist/index.html');
});

// Serve the files on port 3000.
app.listen(port, () => {
    console.log('Example app listening on port 3000!\n');
});