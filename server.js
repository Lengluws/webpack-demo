const path = require('path');
const express = require('express');
const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware")
const webpackConfig = require('./webpack.config');

const app = express(),
    DIST_DIR = path.join(__dirname, "dist"), // 设置静态访问文件路径
    PORT = 9000,
    complier = webpack(webpackConfig);

let devMiddleware = webpackDevMiddleware(complier, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false, // 向控制台显示任何内容
    noInfo: false, // 显示错误信息到控制台（仅警告和错误）
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    }, // watch options (only lazy: false)
    stats: { colors: true }, // 用于形成统计信息的选项
    serverSideRender: false, // 关闭服务器端渲染模式。有关详细信息，请参阅服务器端渲染部分。
});

let hotMiddleware = webpackHotMiddleware(complier, {
    log: false,
    heartbeat: 2000
});

app.use(devMiddleware);

app.use(hotMiddleware);

app.use(express.static(DIST_DIR)); // 设置访问静态文件的路径

app.listen(PORT, () => {
    console.log("成功启动：localhost:"+ PORT);
});