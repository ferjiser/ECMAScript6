module.exports = {
    context: __dirname,
    entry: ["./src/BlockBindings",
        "./src/StringsRegularExpressions",
        "./src/Functions",
        "./src/Objects",
        "./src/Destructuring",
        "./src/SetMaps",
        "./src/ArraysImprovements",
        "./src/Promises",
        "./src/Classes"
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
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