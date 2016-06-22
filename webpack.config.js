var webpack = require('webpack');

module.exports = {
  output: {
    path: "./js",
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js"
  },
  entry: {
    dev: ["./_scripts/dev.js"],
    site: ["./_scripts/site.js"],
    vendor: ["./_scripts/vendor.js"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      WebFont: 'webfontloader'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  watch: true
};
