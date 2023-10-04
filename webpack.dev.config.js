const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map", // allows error messages to be mapped to the code we wrote and not compiled version

  // Добавляем это настройку и описываем то как мы хотим видеть работу девСервера
  devServer: {
    // Указывает путь к
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    host: "localhost",

    // включает горячую перезагрузку
    hot: true,

    // автоматически открывает браузер
    open: true,
  },
};
