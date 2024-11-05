const path=require('path')
const autoprefixer=require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack=require('webpack')

const TerserPlugin = require("terser-webpack-plugin");

const webpackExternals=require('webpack-node-externals');
const HtmlWebpackInlineSourcePlugin=require('html-webpack-inline-source-plugin')
//const LoadablePlugin = require('@loadable/webpack-plugin');
const IgnoreEmitPlugin =require('ignore-emit-webpack-plugin');
// const paths=__dirname
const paths=path.resolve(__dirname,'src/server')
const browserConfig={ 
        mode: 'production',
        target: 'node',
        entry:["regenerator-runtime/runtime.js",'./src/server/App.js'],

        output:{

            filename: './js/[name].js',
            path: path.resolve(__dirname, 'server'),

            chunkFilename: './js/[name].js'  ,
            publicPath:'',
            clean: true
        },
          externals:[webpackExternals()],
          
          // watchOptions:{
          //   ignored:new RegExp(`^(?!.*src\/server.*$)`)
          // },
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
                            outputPath: "imgs"
                           
                            }
                          },
                          
                          exclude:/node_modules/
                },
              
                {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              },]
        },
        plugins: [new MiniCssExtractPlugin(),
        //   new webpack.IgnorePlugin({
        //     checkResource (resource, context)
        //     {
        //       console.log(resource,context)
        //        // const resourceAg=/^(.*)(png|svg|jpge|jpg)$/.test(resource) ;//const contextAg=/^src\/(.*)\/public$/.test(context) ;
        //         const resArg=/^(.*)\.(jpg|svg|png)$/.test(resource)
        //         return resArg;
        //     }
        // })
        
         new IgnoreEmitPlugin(/\.(png|svg|jpg|jpeg)$/)

          
          ]

/* ,
devtool : 'source-map', */
}
module.exports={
    
  ...browserConfig

};