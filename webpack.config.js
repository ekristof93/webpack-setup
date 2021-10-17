const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "app"),
    },
    host: "0.0.0.0",
    compress: true,
    hot: true,
    port: 8080,
  },
  mode: "development",
  entry: "./app/assets/js/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
