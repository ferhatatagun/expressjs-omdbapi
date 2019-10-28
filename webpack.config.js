const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// module.exports = {
//     mode: 'development',
//     entry: './app/src/js/General.js',
//     output: {
//         path: path.resolve(__dirname, 'app/dist'),
//         filename: 'bundle.js'
//     },
//     watch: true
// };

var ExtractTextPlugin = require('extract-text-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    entry: ['./app/src/js/General.js', './app/src/css/General.scss'],
    output: {
        path: path.resolve(__dirname, 'app/dist/'),
        filename: './bundle.js'
    },
    module: {
        rules: [{
            test: /\.(css|sass|scss)$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './bundle.css',
            allChunks: true,
        }) 
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            name: true,

            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },
    watch: true,
};

// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     mode: 'development',
//     entry: ['/app/src/js/General.js', '/app/src/css/General'],
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'app/dist'),
//         publicPath: '/dist',
//     },

//     module: {
//         rules: [{
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['env']
//                 }
//             },
//             {
//                 test: /\.(scss|css)$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     'postcss-loader',
//                     'sass-loader',
//                 ],
//             },
//         ],
//     },

//     plugins: [
//         new MiniCssExtractPlugin({
//             filename: '/app/dist/bundle.css',
//         }),
//     ],

//     optimization: {
//         splitChunks: {
//             chunks: 'async',
//             minSize: 30000,
//             minChunks: 1,
//             name: true,

//             cacheGroups: {
//                 vendors: {
//                     test: /[\\/]node_modules[\\/]/,
//                     priority: -10
//                 }
//             }
//         }
//     },

//     devServer: {
//         contentBase: './app'
//     }
// };