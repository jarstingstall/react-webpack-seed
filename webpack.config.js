module.exports = {
  entry: './app/index.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  devServer: {
    contentBase: './public/'
  },
};
