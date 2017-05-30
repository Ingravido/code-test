const path = require('path');

module.exports = {
  entry:  path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          { loader: 'url-loader' },
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
};

