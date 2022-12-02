const path=require('path')
require('ignore-styles')

require('@babel/register')({
  ignore:[/(node_modules)/],
  presets:['@babel/preset-env','@babel/preset-react']
  });
console.log("JNS",path.resolve(__dirname,'./App.js'))
require(path.resolve(__dirname,'./App.js'))