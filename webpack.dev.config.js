// webpack 默认配置
const path = require('path');
const webpack = require("webpack");

// 引入js到 html 文件中
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

const { merge } = require('webpack-merge');
const webpackBase = require('./webpack.base.config');

module.exports = merge(webpackBase, {
    mode: 'development',
    plugins: [
        // 启用模块热替换(HMR - Hot Module Replacement)
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, './data/react-manifest.json')
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, './static/react.dll.js')
        })
    ],
    devtool: 'eval',
    // // 启动项目
    devServer: {
        open: true,
        port: 1314,
        hot: true,
    },
})