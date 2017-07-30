const webpack = require("webpack")
const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    devtool: "eval-source-map",
    entry: "./src/index.jsx",
    output: {
        path : path.resolve(__dirname,"build"),
        filename: "bundle.js",
        publicPath: "build"
    },
     resolve:{
        extensions: [".js",".jsx",".json"]
    },
    stats:{
        colors: true,
    },
    module: {
        rules:[
            {
                use: "babel-loader",
                test: /\.jsx?$/
            },
            {
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                test: /\.css$/
            }
        ]
    },
  plugins: [
        
        new webpack.optimize.UglifyJsPlugin({
		minimize: true,
        compress: {
            warnings: false,
        },
        
        output: {
        comments: false,
        beautify: false,
       }
    }),
   new ExtractTextPlugin("styles.css")
    ]

}
