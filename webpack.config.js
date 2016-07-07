var debug = process.env.NODE_ENV !== 'production';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? 'inline-sourcemap' : null,
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname + "/dist/",
        filename: 'bundle.min.js'
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    }
};
