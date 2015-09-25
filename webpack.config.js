var webpack = require('webpack'),
    path = require('path');
    
module.exports = {
  debug: true,
  entry: {
    main: './index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    
  }
}


