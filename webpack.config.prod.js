const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    mode: 'production',
    
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },

    watchOptions: {
        poll: true,
        ignored: /node_modules/
      },

   entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },

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
                            "sass-loader",
                         ]
                },
                {
                    test: /\.html$/i,
                    loader: "html-loader",
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
                
    // devtool: 'source-map',

    // devServer: {
    //                 port: 8081,
    //                 hot: true,
    //                 static:  './public',
    //             },

}
