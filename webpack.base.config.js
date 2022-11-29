// webpack 默认配置
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "./static"),
    filename: "[name].[contenthash:8].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 复制一个 html 并将最后打包好的资源在 html 中引入
    new htmlWebpackPlugin({
      // 页面title 需要搭配 ejs 使用
      title: "webpack-react",
      // html 模板路径
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        // 压缩HTML⽂件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空⽩符与换⾏符
        minifyCSS: true, // 压缩内联css
      },
    }),
    // 每次部署时清空 dist 目录
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:6].css",
    }),
    new WebpackManifestPlugin({
      fileName: "./data/manifest.json",
    }),
  ],
  resolve: {
    // 规定在那里寻找第三方模块
    modules: [path.resolve(__dirname, "./node_modules")],
    // 别名
    alias: {
      react: path.resolve(
        __dirname,
        "./node_modules/react/umd/react.production.min.js"
      ),
      "react-dom": path.resolve(
        __dirname,
        "./node_modules/react-dom/umd/react-dom.production.min.js"
      ),
      "@": path.resolve(__dirname, "./src"),
    },
    // 自动补齐后缀名
    extensions: [".js", ".jsx"],
  },
};
