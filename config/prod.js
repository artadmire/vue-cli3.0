const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

module.exports =  {
    plugins: [
        // new UglifyJsPlugin({
        //     uglifyOptions: {
        //         compress: {
        //             drop_console: true,
        //             drop_debugger: true,
        //             warnings: true
        //         }
        //     }
        // }),
        // new PrerenderSPAPlugin({
        //     // Required - The path to the webpack-outputted app to prerender.
        //     staticDir: path.join(__dirname, 'dist'),
        //     // Required - Routes to render.
        //     routes: ['/home','/invite_friends','/download'],
        //     minify: {
        //         collapseBooleanAttributes: true,
        //         collapseWhitespace: true,
        //         decodeEntities: true,
        //         keepClosingSlash: true,
        //         sortAttributes: true
        //     }
        // }),
        // new OptimizeCSSPlugin({
        //     cssProcessorOptions: {
        //         safe: true
        //     }
        // }),
    ]
}