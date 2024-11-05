const path=require('path')
const autoprefixer=require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack=require('webpack')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports={
    
    mode: 'production',
    entry:["regenerator-runtime/runtime.js",'./src/index.js'],

    output:{

        filename: './js/[name].js',
        path: path.resolve(__dirname, 'dist'),

        chunkFilename: './js/[name].js'  ,
        publicPath:''
    },
     
//  optimization: {
//     minimize: true,
//     minimizer: [
//       new TerserPlugin({
//         parallel: true,
//       })],
//         chunkIds: false,
//         mergeDuplicateChunks: false
          
//       },  
//       devServer: {
      
//         watchContentBase: true,
//         historyApiFallback:true
//     },
   
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
                          outputPath: "imgs"
                        }
                      }
            },
           
            {
                test: /\.css$/,
                exclude: /node_modules/,
                
                use: [
                    {loader:MiniCssExtractPlugin.loader},
                     
                    {loader:'css-loader'},
                      
                        {loader:'sass-loader'},
                        
                      ]
            }]
    }/* ,
    devtool : 'source-map', */
    ,
    plugins: [
         new LoadablePlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/Main.html',
            filename: 'Main.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',  // prepend folder name
            chunkFilename: 'css/[name].css',    // prepend folder name
            ignoreOrder: false,
        }),
        new webpack.WatchIgnorePlugin({
            paths:[path.resolve(__dirname, 'src/server')]}
        )
       
  
    ]

};