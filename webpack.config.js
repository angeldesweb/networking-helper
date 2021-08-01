const path = require('path');
const JsDocPlugin = require('jsdoc-webpack-plugin');

module.exports = {
    mode:'none',
    entry:'./src/index.js',
    output:{
        filename:'main.js',
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
    },
    plugins: [
        new JsDocPlugin({
            conf: 'jsdoc.json',
            cwd: '.',
            preserveTmpFile: true,
            recursive: true
        })
    ]
}