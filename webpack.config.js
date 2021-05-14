const path = require('path')

module.exports = {
  entry: './js/model-loader.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname)
  },
  mode: 'production'
}
