const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");




module.exports = {
    mode: mode,

    // entry: './src/index.js',
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'public')
    // },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
                }
            },
            {
            test: /\.s[ac]ss$/i,
            use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "sass-loader"
                ]
            },
        ], 
    },
    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserPlugin(),
        ],
      },
    devtool: 'source-map',
    devServer: {
        static: './dist',
    },

}
