const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const autoprefixer=require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require("terser-webpack-plugin");

const browserConfig = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
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
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
    new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].bundle.css',  // prepend folder name
        chunkFilename: 'css/[name].[chunkhash].bundle.css',    // prepend folder name
        ignoreOrder: false,
    }),
    new webpack.ids.DeterministicChunkIdsPlugin({
        maxLength: 5,
      })
  ],
};

const serverConfig = {
  mode: "production",
  entry: "./src/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
};
module.exports = [browserConfig];
