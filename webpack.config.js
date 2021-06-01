const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    devtool: false,
    mode: 'production',
    target: 'es2015',
    entry: path.join(__dirname, 'tree-shake', 'index.js'),
    output: {
        pathinfo: true,
        path: path.join(__dirname, 'tree-shake'),
        filename: '[name].js',
    },
    optimization: {
        moduleIds: "size",
        usedExports: true,
        mangleExports: true,
        // concatenateModules: false,
        // minimize: false,
        // minimizer: [
        //     new TerserPlugin({
        //         terserOptions: {
        //             compress: {
        //                 inline: 3
        //             }
        //         }
        //     })
        // ],
        // runtimeChunk: {
        //     name: (entrypoint) => `runtime~${entrypoint.name}`
        // }
    },
}