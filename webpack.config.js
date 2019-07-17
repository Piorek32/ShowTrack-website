const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use : [
                    {
                        loader: "html-loader",
                        options : {minimize : true}
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|svg|gif)$/,
                use: [
                    "file-loader", // creates style nodes from JS strings
                    
                ]
            }
        ]
    }, 
    plugins : [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html" 
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename : "[id].css"
        })

    ]
}