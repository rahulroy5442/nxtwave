const path=require('path')
const autoprefixer=require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack=require('webpack')

const TerserPlugin = require("terser-webpack-plugin");
const browserConfig={ mode: 'production',
target: 'node',
entry:["regenerator-runtime/runtime.js",'./src/server/App.js'],

output:{

    filename: './js/[name].js',
    path: path.resolve(__dirname, 'server'),

    chunkFilename: './js/[name].js'  ,
    publicPath:''
},
 
// optimization: {
// minimize: true,
// minimizer: [
//   new TerserPlugin({
//     parallel: true,
//   })],
//     chunkIds: false,
//     mergeDuplicateChunks: false
      
//   },  

//   devServer: {
  
//     watchContentBase: true,
//     historyApiFallback:true
// },

module:{
    rules:[
        {
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/
           
        },
        {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                      name: "[name].[ext]",
                      outputPath: "imgs",
                      emit:false
                    }
                  }
        },
       
        {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },]
},
plugins: [new MiniCssExtractPlugin()]/* ,
devtool : 'source-map', */
}
module.exports={
    
  ...browserConfig

};