
const path = require('path');


module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "dist")
  }
};