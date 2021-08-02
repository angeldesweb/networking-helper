const path = require('path');

module.exports = {
    mode:'none',
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        library:"networkingHelper",
        libraryTarget:"umd",
        globalObject:"this",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            }
        ]
    }
}