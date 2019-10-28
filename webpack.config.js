const path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'production',
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