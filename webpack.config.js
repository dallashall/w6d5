var path = require('path');

module.exports = {
  entry: "./src/widgets.jsx",
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
