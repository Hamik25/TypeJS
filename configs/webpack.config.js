const path = require('path');
const baseDir = '../';

module.exports = {
  entry: path.resolve(baseDir, 'src/Index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(baseDir, 'dist')
  },
  module: {
    loaders: [
        {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                babelrc: false,
                presets: ["es2015", "stage-2"]
            }
        }
    ]
  }
};
