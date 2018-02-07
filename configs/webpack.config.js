const path = require('path');
const baseDir = '../';

module.exports = {
  entry: path.resolve(baseDir, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(baseDir, 'dist'),
    library: 'TypeJS',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
  },
  devtool: '#inline-source-map'
};
