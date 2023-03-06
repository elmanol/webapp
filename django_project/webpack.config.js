const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    bundle: path.resolve(__dirname, './frontend/index.js'),// path to our input file
  }
  ,
  output: {
    path: path.resolve(__dirname, './static'),  // path to our Django static directory
    filename: '[name].js',  // output bundle file name
  },
};