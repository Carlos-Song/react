 var webpack = require('webpack');
 var path = require('path');

 module.exports = {
   context: __dirname + '/src',
   entry: "./js",
   module: {
     loaders: [{
       test: /\.js?$/,
       exclude: /(node_modules)/,
       loader: 'babel-lodear',
       query: {
         presets: ['react', 'es2015']
       }
     }]
   },
   output: {
     path: __dirname + "/src",
     filename: "bundle.js"
   }
 };
