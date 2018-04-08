const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// 定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
const entry = require('./entry.js');

module.exports = {
    mode: 'development', // 设置开发环境
    // 实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
    // entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', APP_PATH],
    entry: entry,
    output: {
        path: BUILD_PATH,
        filename: './Scripts/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },{
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        // 添加我们的插件 会自动生成一个html文件
        /*new HtmlwebpackPlugin({
            title: 'Hello World app'
        }),// 在build目录下自动生成index.html，指定其title
        */
        // 实现刷新浏览器必写
        new webpack.HotModuleReplacementPlugin(),
    ]
}