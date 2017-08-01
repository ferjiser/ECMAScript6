module.exports = {
    context: __dirname,
    entry: {
        BlockBindings: "./src/BlockBindings",
        StringsRegularExpressions: "./src/StringsRegularExpressions",
        Functions: "./src/Functions",
        Objects: "./src/Objects",
        Destructuring: "./src/Destructuring",
        SetMaps:  "./src/SetMaps",
        ArraysImprovements: "./src/ArraysImprovements",
        Promises: "./src/Promises"
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    externals: {
        'jquery': 'jQuery'
    }
}